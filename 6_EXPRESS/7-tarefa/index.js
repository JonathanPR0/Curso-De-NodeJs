const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const basePath = path.join(__dirname, './templates');
const pages = require('./pages');

app.use('/page', pages);
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});
app.get('/code', (req, res) => {
  res.sendFile(`${basePath}/code.html`);
});

app.use((req, res, next) => {
  res.status(404).sendFile(`${basePath}/404.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
