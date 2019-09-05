// server.js

const express = require('express');
const app = express();
const port = 5000;

app.get('/api', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.json({ x: 1, y: 4 })
});

app.use(express.static('build'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});











