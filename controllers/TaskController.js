const { PrismaClient } = require("@prisma/client");

// init prisma
const Prisma = new PrismaClient();

const { task } = Prisma;

// @route GET ALL ALLTasks
//@ DESC GET ALL ALLTasks
//@ ACCESS public
const ALLTasks = async (req, res, next) => {
  try {
    const tasks = await task.findMany();

    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};
// @route GET /tasks/2535353
//@ DESC GET single Task
//@ ACCESS public
const SingleTask = async (req, res) => {
  const { id } = req.params;
  try {
    const singleTask = await task.findUnique({ where: { id: Number(id) } });
    res.status(200).json(singleTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

// @route POST  /posts
//@ DESC create new POSTS
//@ ACCESS public
const CreateTask = async (req, res) => {
  try {
    const { task_name, task_description } = req.body;
    // check the user exist
    const existTask = await task.findUnique({ where: {task_name} });
    if (existTask) {
      return res.json({ message: "this task exist" });
    } else {
      const newTask = await task.create({
        data: { task_name, task_description },
      });
      res.status(200).json(newTask);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

// @route update  /task
//@ DESC update Put
//@ ACCESS public

const UpdateTask = async (req, res) => {
  try {
    // const { id } = req.params;
    const { task_name, task_description } = req.body;

    const updateTask = await task.update({
      where: { id: Number(req.params.id) },
      data: {
        task_name,
        task_description,
      },
    });
    res.status(200).json(updateTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

// @route delete  /posts
//@ DESC delete POST
//@ ACCESS public
const DeleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const DeleteTask = await task.delete({ where: { id: Number(id) } });
    res.status(200).json(DeleteTask);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "server errors" });
  }
};

module.exports = { ALLTasks, CreateTask, DeleteTask, SingleTask, UpdateTask };
