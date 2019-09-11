// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const todos = [
  { id: 1, completed: true, title: 'HTML' },
  { id: 2, completed: true, title: 'CSS' },
  { id: 3, completed: false, title: 'JS' },
  { id: 4, completed: false, title: 'React' },
];

app.get('/api/todos', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.json(todos)
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











