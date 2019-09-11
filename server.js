// server.js

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { getTodos, addTodo } = require('./server/todos');

app.get('/api/todos', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(getTodos())
});

app.post('/api/todos', bodyParser.text(), (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');

  addTodo(req.body);
  const todos = getTodos();

  res.json(todos[todos.length - 1]);
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











