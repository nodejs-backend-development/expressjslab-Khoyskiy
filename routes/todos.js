const express = require('express');
const { getTodos, createTodos } = require('../controllers/todos.controller');

const router = express.Router();

router.get('/todos/:userID', getTodos); // Retrieves post comments GET

router.post('/todos', createTodos); // Creates a post comment POST

module.exports = router;
