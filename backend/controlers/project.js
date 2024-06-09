const getAllProjects = (req, res) => {
    res.send("get all project")
}
const createProject = (req, res) => {
    const {title, desc, userName, url, image} =  req.body
        const result = project.create({title, desc, userName, url, image})
    console.log("result")
    res.send(result)
  };
  
  const updateProject = (req, res) => {
    res.send("updateProject");
  };
  const deleteProject = (req, res) => {
    res.send("deleteProject");
  };
  
  module.exports = {
    getAllProjects,
    createProject,
    deleteProject,
    updateProject,
  };
