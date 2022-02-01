const path = require('path');

//Path absoluto
console.log(path.resolve('text.txt'));

//Formar path
const midFolder = 'programas';
const fileName = 'nodeJs.txt';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath);
