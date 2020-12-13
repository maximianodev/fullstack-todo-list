const express = require('express');
const app = express();
const db = require('../config/mongoConnection');

const cors = require('cors');
app.use(cors());

const TodoController = require('../controllers/TodoController');
app.use('/todos', TodoController);

module.exports = app;