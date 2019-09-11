// server.js

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { getTodos, addTodo } = require('./server/todos');

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.set('Access-Control-Allow-Headers', 'content-type');
  next();
});

app.get('/api/todos', (req, res) => {
  res.json(getTodos())
});

app.post('/api/todos', bodyParser.json(), (req, res) => {
  console.log(req.body);
  addTodo(req.body.title);
  const todos = getTodos();

  res.json(todos[todos.length - 1]);
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











