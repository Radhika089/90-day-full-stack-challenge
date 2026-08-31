import projectModel from "../models/Project.js";
import crypto from "crypto";

function hashContent(content) {
  return crypto.createHash("md5").update(content).digest("hex").slice(0, 12);
}

// POST -> /api/projects
export async function createProject(req, res) {
  const { prompt } = req.body;

  // Validate prompt
  if (!prompt || typeof prompt !== "string" || !prompt.trim()) {
    return res.status(400).json({
      success: false,
      message: "Prompt is required",
    });
  }

  // Check authentication
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. User must be logged in.",
    });
  }

  try {
    // Create the initial project
    const project = await projectModel.create({
      name: "Planning project...",
      description: prompt.trim(),
      files: {},
      messages: [
        {
          role: "user",
          content: prompt.trim(),
        },
        {
          role: "assistant",
          content: "Planning project structure...",
        },
      ],
      owner: req.user._id,

      // These are explicitly shown for learning,
      // but your schema already provides these defaults.
      version: 0,
      filesPlanned: [],
      filesGenerated: [],
      currentFile: null,
      error: null,
    });

    // Start AI generation in the background.
    runBackgroundGeneration(project._id.toString(), prompt.trim());

    return res.status(201).json({
      success: true,
      message: "Project created successfully!",
      project: {
        _id: project._id,
        name: project.name,
        description: project.description,
        files: project.files,
        messages: project.messages,
        version: project.version,
        owner: project.owner,
        published: project.published,
        status: project.status,
        filesPlanned: project.filesPlanned,
        filesGenerated: project.filesGenerated,
        currentFile: project.currentFile,
        error: project.error,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    });
  } catch (err) {
    console.error("Error creating project:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: err.message,
    });
  }
}

// background worker to progressively generate files and update database in real-time

export async function runBackgroundGeneration(projectId, prompt) {}

//GET -> /api/projects
// list all projects of the user
export async function listProjects(req, res) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. User must be logged in.",
    });
  }

  try {
    const projects = await projectModel
      .find(
        { owner: req.user._id },
        { name: 1, description: 1, createdAt: 1, updatedAt: 1 },
      )
      .sort({ updatedAt: -1 });

    res.json({ success: true, projects });
  } catch (err) {
    console.error("Error listing projects:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to load projects",
      error: err.message,
    });
  }
}

//GET -> /api/projects/:id
// get project details
export async function getProject(req, res) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. User must be logged in.",
    });
  }

  try {
    const project = await projectModel.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found!",
      });
    }

    const fileObj = {};
    for (const [path, entry] of Object.entries(project.files)) {
      fileObj[path] = entry.content;
    }

    return res.status(200).json({
      success: true,
      project: {
        _id: project._id,
        name: project.name,
        description: project.description,
        files: fileObj,
        messages: project.messages,
        version: project.version,
        owner: project.owner,
        published: project.published,
        status: project.status,
        filesPlanned: project.filesPlanned,
        filesGenerated: project.filesGenerated,
        currentFile: project.currentFile,
        error: project.error,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt,
      },
    });
  } catch (err) {
    console.error("Error getting project:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to load project",
      error: err.message,
    });
  }
}

//Delete -> /api/projects/:id
// delete project.
export async function deleteProject(req, res) {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. User must be logged in.",
    });
  }

  const result = await projectModel.findOneAndDelete({
    _id: req.params.id,
    owner: req.user._id,
  });

  if (!result) {
    return res.status(404).json({
      success: false,
      message: "Project not found!",
    });
  }

  return res.status(200).json({
    success: true,
    message: "Deleted Successfully!",
  });
}

//PUT -> /api/projects/:id/files
// update project files
export async function updateProjectFiles(req, res) {
  const { files } = req.body;

  if (!files || typeof files !== "object") {
    return res.status(400).json({
      success: false,
      message: "File object is required.",
    });
  }

  if (!req.user) {
    return res.status(404).json({
      success: false,
      message: "Unauthorized.User not found!",
    });
  }

  try {
    const project = await projectModel.findOne({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!project) {
      return (
        res.status(404),
        json({
          success: false,
          message: "Project not found",
        })
      );
    }

    // rebuild project files map with content & hashes

    const newFiles = {};

    for (const [path, content] of Object.entries(files)) {
      if (typeof content === "string") {
        newFiles[path] = { content, hash: hashContent(content) };
      }
    }

    project.files = newFiles;
    await project.save();

    const fileObj = {};

    for (const [path, entry] of Object.entries(project.files)) {
      if (typeof content === "string") {
        fileObj[path] = entry.content;
      }
    }

    res.json({
      _id: project._id,
      name: project.name,
      description: project.description,
      files: fileObj,
      messages: project.messages,
      version: project.version,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    });
  } catch (err) {
    console.log(err.message);
  }
}

//POST -> /api/projects/:id/publish
// mark a project as publicly published
export async function publishProject(req, res) {
  if (!req.user) {
    return res.status(404).json({
      success: false,
      message: "Unauthorized.User not found!",
    });
  }

  try {
    const project = await projectModel.findOneAndUpdate(
      {
        _id: req.params.id,
        owner: req.user._id,
      },
      { published: true },
      { returnDocument: "after" },
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project Published.",
    });
  } catch (err) {}
}

//GET -> /api/projects/public/:id
// get a publicly published project details
export async function getPublicProject(req, res) {
  const project = await projectModel.findById(req.params.id);

  if (!project) {
    return res.status(404).json({
      success: false,
      message: "Project not found",
    });
  }

  if (!project.published) {
    return res.status(403).json({
      success: false,
      message: "Project is not published yet.",
    });
  }

  const fileObj = {};

  for (const [path, entry] of Object.entries(project.files)) {
    fileObj[path] = entry.content;
  }

  res.json({
    _id: project._id,
    name: project.name,
    description: project.description,
    files: fileObj,
    version: project.version,
  });
}
