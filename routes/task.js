const router=require('express').Router();
const taskController=require('../controller/task.js')

router.post("/",taskController.create)
router.get("/",taskController.getAll)
router.put("/:taskId",taskController.updateById)
router.put("/move/:taskId",taskController.updateMoveById)
router.put("/cs/:taskId",taskController.updateCsById)
router.delete("/:taskId",taskController.deleteById)

module.exports=router;