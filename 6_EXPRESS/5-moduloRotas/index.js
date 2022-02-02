const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const basePath = path.join(__dirname, 'templates');
const users = require('./users');

// Ler o body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', users);

app.get('/', (req, res) => {
  res.sendFile(path.join(basePath, 'index.html'));
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
