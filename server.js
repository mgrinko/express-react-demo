// server.js

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { getTodos, addTodo, removeTodo } = require('./server/todos');

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'content-type');
  res.set('Access-Control-Allow-Methods', 'DELETE');
  next();
});

app.get('/api/todos', (req, res) => {
  res.json(getTodos())
});

app.post('/api/todos', bodyParser.json(), (req, res) => {
  addTodo(req.body.title);
  const todos = getTodos();

  res.json(todos[todos.length - 1]);
});

app.delete('/api/todos/:todoId', (req, res) => {
  removeTodo(req.params.todoId);

  res.json({ status: 'success' });
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











