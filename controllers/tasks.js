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

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    //The Filter ({ _id: taskID }): "Find the document that has this ID."
    //The Update (req.body): "Take the new data sent by the user (the JSON in the request body) and apply it to that document."

    //The Options Object:-
    //new: true: By default, MongoDB returns the old version of the document (the one before it was updated). By setting new: true, we tell it to return the fresh, updated version so you can send it back to the frontend.

    //runValidators: true: This is a major safety feature. If our Task Schema says the name is required or has a maxlength, MongoDB normally only checks those when we create a task. Setting this to true ensures that if a user tries to update a task with an empty string or an invalid value, the database will catch it and throw an error.

    if (!task) {
      return res.status(400).json({ msg: `No data with id ${taskID}` });
    }
    res.status(200).json({ id: taskID, data: req.body });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
