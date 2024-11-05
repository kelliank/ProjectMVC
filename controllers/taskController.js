// controllers/taskController.js
const Task = require('../models/task');

// Afficher toutes les tâches
exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.render('tasks/index', { tasks });
};

// Afficher le formulaire de création
exports.getNewTaskForm = (req, res) => {
    res.render('tasks/new');
};

// Créer une nouvelle tâche
exports.createTask = async (req, res) => {
    const { title, description, dueDate, category } = req.body;
    await Task.create({ title, description, dueDate, category });
    res.redirect('/tasks');
};

// Afficher le formulaire d'édition
exports.getEditTaskForm = async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.render('tasks/edit', { task });
};

// Mettre à jour une tâche
exports.updateTask = async (req, res) => {
    const { title, description, dueDate, category } = req.body;
    await Task.findByIdAndUpdate(req.params.id, { title, description, dueDate, category });
    res.redirect('/tasks');
};

// Supprimer une tâche
exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
};
