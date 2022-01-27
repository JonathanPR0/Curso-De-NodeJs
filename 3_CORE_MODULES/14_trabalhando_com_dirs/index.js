const fs = require('fs');

if (!fs.existsSync('./minhaPasta')) {
  console.log('Pasta inexistente, criando...');
  fs.mkdirSync('minhaPasta');
} else {
  console.log('Pasta existente');
}
