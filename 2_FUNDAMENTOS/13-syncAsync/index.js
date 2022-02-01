const fs = require('fs');
const lerolero = require('lerolero');

console.log('Início');
//Síncrono
fs.writeFileSync('arquivoSincrono.txt', lerolero());

//Assíncrono
fs.writeFile('arquivoAssincrono.txt', lerolero(), (err) => {
  setTimeout(() => {
    console.log('Arquivo assíncrono criado');
  }, 2000);
});

console.log('Fim');
