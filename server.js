// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

const todosRepository = require('./server/todos');


app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Allow-Methods', 'DELETE,PATCH');
  next();
});

app.get('/api/todos', (req, res) => {
  res.json(todosRepository.getTodos());
});

app.post('/api/todos', bodyParser.json(), (req, res) => {
  todosRepository.addTodo(req.body.title);

  const todos = todosRepository.getTodos();

  res.json(todos[todos.length - 1]);
});

app.patch('/api/todos/:todoId', bodyParser.json(), (req, res) => {
  todosRepository.updateTodo(req.params.todoId, req.body);
  res.json({ success: true });
});

app.delete('/api/todos/:todoId', (req, res) => {
  todosRepository.removeTodo(req.params.todoId);
  res.json({ success: true });
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











