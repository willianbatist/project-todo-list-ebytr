const Tasks = require('../services/tasks');

const getTasks = async (_req, res) => {
  try {
    const tasks = await Tasks.getTasks();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
};  

const postTask = async (req, res) => {
  try {
    const task = await Tasks.postTask(req.body);
    return res.status(201).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.deleteTask(id);
    return res.status(202).json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, status } = req.body;
    const taskUpdate = await Tasks.updateTask(id, task, status);
    return res.status(200).json(taskUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getTasks,
  postTask,
  deleteTask,
  updateTask,
}