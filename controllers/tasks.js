const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  //This extracts the id property from req.params but immediately saves it into a brand new variable named taskID. It just makes the rest of the code slightly easier to read.

  const task = await Task.findOne({ _id: taskID });
  //MongoDB automatically names its ID fields _id. You are telling it to find the document where the _id matches the taskID you pulled from the URL.

  if (!task) {
    //findOne() returns null if the given id is not found
    return res.status(404).json({ msg: `To task with id: ${taskID}` });
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    returnDocument: "after",
    runValidators: true,
  });

  //The Filter ({ _id: taskID }): "Find the document that has this ID."
  //The Update (req.body): "Take the new data sent by the user (the JSON in the request body) and apply it to that document."

  //The Options Object:-
  //returnDocument: 'after': Returns the document exactly as it looks after the update

  //runValidators: true: This is a major safety feature. If our Task Schema says the name is required or has a maxlength, MongoDB normally only checks those when we create a task. Setting this to true ensures that if a user tries to update a task with an empty string or an invalid value, the database will catch it and throw an error.

  if (!task) {
    return res.status(400).json({ msg: `No data with id ${taskID}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return res.status(404).json({ msg: `Not task with id ${taskID}` });
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
