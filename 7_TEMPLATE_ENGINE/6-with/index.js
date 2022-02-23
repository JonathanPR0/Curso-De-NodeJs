const express = require('express');
const lerolero = require('lerolero');
const exphbs = require('express-handlebars');
const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/courses', (req, res) => {
  const leroLero = lerolero();
  const course = {
    name: 'Instrodução ao Node.js',
    language: 'JavaScript',
    body: leroLero,
    comments: 5,
  };

  res.render('courses', { course });
});

app.get('/dashboard', (req, res) => {
  const infos = ['Jonathan', '16 anos', 'Programador'];
  res.render('dashboard', { infos });
});

app.get('/', (req, res) => {
  const user = {
    name: 'Jonathan',
    lastname: 'Amarante',
    age: 16,
  };
  const auth = true;
  const leroLero = lerolero();
  res.render('home', { user, leroLero, auth });
});

app.listen(3000, () => {
  console.log('App funcionando');
});
