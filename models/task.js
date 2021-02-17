const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:String,
  description:String,
  status:String,
  category:String,

})

module.exports = mongoose.model("task",taskSchema)