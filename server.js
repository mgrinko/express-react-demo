// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let todos = [
  { id: 1, completed: false, title: '111111' },
  { id: 2, completed: false, title: '222222' },
  { id: 3, completed: true, title: '3333333' },
];

app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/api/todos', (req, res) => {
  res.json(todos);
});

app.post('/api/todos', (req, res) => {
  res.json(todos);
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











