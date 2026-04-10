const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    //This extracts the id property from req.params but immediately saves it into a brand new variable named taskID. It just makes the rest of the code slightly easier to read.

    const task = await Task.findOne({ _id: taskID });
    //MongoDB automatically names its ID fields _id. You are telling it to find the document where the _id matches the taskID you pulled from the URL.

    if (!task) {
      //findOne() returns null if the given id is not found
      return res.status(404).json({ msg: `To task with id: ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = (req, res) => {
  res.send("update a task");
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `Not task with id ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
