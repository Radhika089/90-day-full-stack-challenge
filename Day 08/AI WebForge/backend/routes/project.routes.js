import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import {
  createProject,
  deleteProject,
  getProject,
  getPublicProject,
  listProjects,
  publishProject,
  updateProjectFiles,
} from "../controllers/project.controller.js";

const projectRouter = express.Router();

//Public Route
projectRouter.get("/public/:id", getPublicProject);

//Protected Route
projectRouter.use(authMiddleware);

projectRouter.post("/", createProject);
projectRouter.get("/", listProjects);
projectRouter.get("/:id", getProject);
projectRouter.delete("/:id", deleteProject);
projectRouter.put("/:id/files", updateProjectFiles);
projectRouter.post("/:id/publish", publishProject);

export default projectRouter;
