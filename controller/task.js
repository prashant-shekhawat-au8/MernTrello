const task = require("../models/task.js")

module.exports={
    getAll:(req,res,next) => {
    let taskList = []
    task.find({},(err,tasks) => {
      if(err) {
        next(err)
      } else {
        for(let type of tasks ){
          taskList.push({_id:type._id,title:type.title,description:type.description,status:type.status,category:type.category})
        }
        res.json({status:"Success",message:"task found",data:{task:taskList}})
      }
    })
  },

  create:(req,res,next) => {
    task.insertMany({title:req.body.title,description:req.body.description,status:req.body.status,category:req.body.category},(err,result) => {
      if(err) next (err)
      res.json({status:"success",message:"data added succesfully",data:null})
    })
  },

   updateById:(req,res,next) => {
    task.findByIdAndUpdate(req.params.taskId,
      {title:req.body.title,description:req.body.description,status:req.body.status,category:req.body.category},(err,result) => {
        console.log(req.body)
        if(err) next (err)
        res.json({status:"success",message:"data updated successfully",data:null})
      }
      )
  },
   updateMoveById:(req,res,next) => {
    task.findByIdAndUpdate(req.params.taskId,
      {category:req.body.category},(err,result) => {
        console.log(req.body)
        if(err) next (err)
        res.json({status:"success",message:"data updated successfully",data:null})
      }
      )
  },
   updateCsById:(req,res,next) => {
    task.findByIdAndUpdate(req.params.taskId,
      {status:req.body.status},(err,result) => {
        console.log(req.body)
        if(err) next (err)
        res.json({status:"success",message:"data updated successfully",data:null})
      }
      )
  },

  deleteById:(req,res,next)=>{
    task.findByIdAndRemove(req.params.taskId,(err,result)=>{
      if(err) next(err)
      res.json({status:"success",message:"data deleted successfully"})
    })
  }
}