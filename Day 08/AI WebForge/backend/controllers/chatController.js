// POST /api/projects/:id/chat
// send a revision prompt and return updated project.

import projectModel from "../models/Project";
import { reviseProject } from "../services/ai";
import { applyOperations } from "../services/diff";

export async function buildManifest(files) {
  const manifest = [];
  for (const [path, entry] of Object.entries(files)) {
    manifest.push({ path, hash: entry.hash, size: entry.content.length });
  }

  return manifest;
}

export async function chat(req, res) {
  const { prompt } = req.body;

  if (!prompt || typeof prompt === "string") {
    return res.status(400).json({
      success: false,
      message: "prompt is required",
    });
  }

  if (!req.user) {
    return req.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const project = await projectModel.findOne({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!project) {
    return req.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  // Set status to revising and save user prompt immediately
  project.status = "revising";
  project.messages.push({
    role: "user",
    content: prompt,
    timeStamp: new Date(),
  });
  await project.save();

  try {
    // build compact manifest (path + hash + size) instead of sending all code.
    const manifest = buildManifest(project.files);

    //Include relevant file contents so the AI can do accurate search/replace
    const relevantFiles = {};
    for (const [path, entry] of Object.entries(project.files)) {
      relevantFiles[path] = entry.content;
    }

    //  Recent messages for context
    const recentMessages = project.messages.slice(-4).map((m) => ({
      role: m.role,
      content: m.content,
    }));

    console.log(
      `[AI] Revising project ${project._id}: "${prompt.slice(0, 80)}...."` +
        `(${manifest.length} files, manifest ~${JSON.stringify(manifest).length}chars)`,
    );

    // Call ai with manifest and relative files
    const result = await reviseProject(
      prompt,
      manifest,
      relevantFiles,
      recentMessages,
    );

    console.log(
      `AI got ${result.operations.length}operations: ${result.description}`,
    );

    // Apply operations to file map
    const {
      files: updatedFiles,
      applied,
      errors,
    } = applyOperations(project.files, result.operations);

    if (errors.length > 0) {
      console.log(`[Diff] Errors applying operations: `, errors);
    }

    // Update project in DB
    project.files = updatedFiles;
    project.markModified("files");
    project.version += 1;
    project.status = "completed";
    project.messages.push({
      role: "assistant",
      content:
        result.description + errors.length > 0
          ? `\n\n Some Operations Failed: ${errors.join(", ")}`
          : "",
    });

    await project.save();

    // Return the update project
    const filesObj = {};

    for (const [path, entry] of Object.entries(project.files)) {
      filesObj[path] = entry.content;
    }

    res.json({
      _id: project._id,
      name: project.name,
      description: project.description,
      files: filesObj,
      messages: project.messages,
      version: project.version,
      status: project.status,
      applied,
      errors,
      aiDescription: result.description,
    });
  } catch (err) {
    console.log(`[AI Revision Error] ${err.message}`);
    project.status = "completed";
    await project.save();
    res.status(500).json({
      success: false,
      message: err.message || "Failed to process revision request",
    });
  }
}
