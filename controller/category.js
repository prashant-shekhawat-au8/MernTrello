const category = require("../models/Category.js")

module.exports={
    getAll:(req,res,next) => {
    let categoryList = []
    category.find({},(err,categorys) => {
      if(err) {
        next(err)
      } else {
        for(let type of categorys ){
          categoryList.push({_id:type._id,name:type.name})
        }
        res.json({status:"Success",message:"category found",data:{category:categoryList}})
      }
    })
  },

  create:(req,res,next) => {
    category.insertMany({name:req.body.name},(err,result) => {
      if(err) next (err)
      res.json({status:"success",message:"data added succesfully",data:null})
    })
  },

   updateById:(req,res,next) => {
    category.findByIdAndUpdate(req.params.categoryId,
      {name:req.body.name},(err,result) => {
        console.log(req.body)
        if(err) next (err)
        res.json({status:"success",message:"data updated successfully",data:null})
      }
      )
  },

  deleteById:(req,res,next)=>{
    category.findByIdAndRemove(req.params.categoryId,(err,result)=>{
      if(err) next(err)
      res.json({status:"success",message:"data deleted successfully"})
    })
  }
}