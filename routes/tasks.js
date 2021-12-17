const { ALLTasks, SingleTask, CreateTask, DeleteTask, UpdateTask } = require("../controllers/TaskController");

const router = require("express").Router();


// get and post route
router.route("/").get(ALLTasks).post(CreateTask);

// put and delete router 
router.route('/:id').get(SingleTask).put(UpdateTask).delete(DeleteTask);

module.exports = router;
