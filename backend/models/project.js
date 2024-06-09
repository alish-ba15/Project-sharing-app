const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  title: { type: String, required: true },
  desc: String,
  userName: String,
  url: String,
  image: String,
});
const Project = mongoose.model("Project", Schema)
module.exports = Project