//Comando: node index.js --a=112 --b=358

//Módulo externo
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

//Módulo interno
const soma = require('./soma.js').soma;

const { a, b } = args;
soma(a, b);
