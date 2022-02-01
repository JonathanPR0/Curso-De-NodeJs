//Comando: node index.js nome=Jonathan dia=21 mes=janeiro ano=2022 idade=16

console.log(process.argv);

const args = process.argv.slice(2);
console.log(
  `Meu nome é ${args[0].split('=')[1]}, e hoje, dia ${
    args[1].split('=')[1]
  } de ${args[2].split('=')[1]} de ${args[3].split('=')[1]}, tenho ${
    args[4].split('=')[1]
  } anos`,
);
