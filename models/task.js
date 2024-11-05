// models/task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true },
    category: { type: String, required: true }
});

module.exports = mongoose.model('Task', taskSchema);