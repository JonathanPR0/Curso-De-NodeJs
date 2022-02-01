//Comando: node index.js --nome=Cleitin --cpf=112.358.132-13 --rg=112.358.132

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
console.log(
  `Aquela pessoa é conhecida como ${args['nome']}, seu CPF ${args['cpf']} é e seu RG ${args['rg']}`,
);
