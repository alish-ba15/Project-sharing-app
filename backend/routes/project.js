const express = require("express");
const { getAllProjects, createProject, deleteProject, updateProject } = require("../controlers/project");

const router = express.Router();

router
  .get("/", getAllProjects)
  .post("/add", createProject)
  .delete("/", deleteProject)
  .post("/", updateProject);

module.exports = router;
