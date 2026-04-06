const getAllTasks = (req, res) => {
  res.send("get the tasks");
};

const createTasks = (req, res) => {
  res.send("create tasks");
};
const getTask = (req, res) => {
  res.send("get a single task");
};
const updateTask = (req, res) => {
  res.send("update a task");
};
const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
