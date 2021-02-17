const router=require('express').Router();
const categoryController=require('../controller/category.js')

router.post("/",categoryController.create)
router.get("/",categoryController.getAll)
router.put("/:categoryId",categoryController.updateById)
router.delete("/:categoryId",categoryController.deleteById)

module.exports=router;