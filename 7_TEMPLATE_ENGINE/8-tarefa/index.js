const express = require('express');
const exphbs = require('express-handlebars');
const lerolero = require('lerolero');

const app = express();
const hbs = exphbs.create({
  partialsDir: 'views/partials',
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'));

const products = [
  {
    id: 0,
    name: 'Notebook',
    price: 'R$ 2.350',
    description: lerolero(),
    evaluation: Math.floor(Math.random() * 6),
  },
  {
    id: 1,
    name: 'Smartphone',
    price: 'R$ 1.140',
    description: lerolero(),
    evaluation: Math.floor(Math.random() * 6),
  },
  {
    id: 2,
    name: 'Controle de Slide',
    price: 'R$ 50',
    description: lerolero(),
    evaluation: Math.floor(Math.random() * 6),
  },
  {
    id: 3,
    name: 'Headphone',
    price: 'R$ 150',
    description: lerolero(),
    evaluation: Math.floor(Math.random() * 6),
  },
];

app.get('/product/:id', (req, res) => {
  const product = products[parseInt(req.params.id)];
  res.render('product', { product });
});
app.get('/', (req, res) => {
  const leroLero = lerolero();

  res.render('home', { leroLero, products });
});

app.listen('3000', () => {
  console.log('Porta 3000 funcionando...');
});
