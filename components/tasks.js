const getAllTasks = (req, res) => {
  res.send("get the tasks");
};
const createTasks = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
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
