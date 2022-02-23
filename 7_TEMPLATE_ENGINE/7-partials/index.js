const express = require('express');
const lerolero = require('lerolero');
const exphbs = require('express-handlebars');

const app = express();
const hbs = exphbs.create({
  partialsDir: ['views/partials'],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

function randoNumber() {
  return Math.floor(Math.random() * 11);
}

app.get('/blog', (req, res) => {
  const leroLero = lerolero();
  const posts = [
    {
      title: 'Aprender JavaScript',
      category: 'JavaScript',
      body: leroLero,
      comments: randoNumber(),
    },
    {
      title: 'Aprender Python',
      category: 'Python',
      body: leroLero,
      comments: randoNumber(),
    },
    {
      title: 'Aprender C',
      category: 'C',
      body: leroLero,
      comments: randoNumber(),
    },
    {
      title: 'Aprender React.js',
      category: 'React.js',
      body: leroLero,
      comments: randoNumber(),
    },
  ];

  res.render('blog', { posts });
});

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
