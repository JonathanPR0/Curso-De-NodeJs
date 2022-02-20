const express = require('express');
const lerolero = require('lerolero');
const exphbs = require('express-handlebars');
const app = express();
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  const user = {
    name: 'Jonathan',
    lastname: 'Amarante',
    age: 16,
  };
  const leroLero = lerolero();
  res.render('home', { user, leroLero });
});

app.listen(3000, () => {
  console.log('App funcionando');
});
