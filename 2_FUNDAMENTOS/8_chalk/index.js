const chalk = require('chalk');
const alunos = [
  {
    nome: 'Jonathan',
    nota: 10,
  },
  {
    nome: 'Cleitin',
    nota: 3,
  },
  {
    nome: 'José Maria',
    nota: 7,
  },
];

console.clear();
alunos.forEach(({ nome, nota }) => {
  if (nota > 8) {
    console.log(`${nome} foi ${chalk.green('aprovado!')} - Nota: ${nota}`);
  } else if (7 <= nota && nota < 8) {
    console.log(
      `${nome} foi ${chalk.yellow(
        'aprovado',
      )}, mas se arrastando - Nota: ${nota}`,
    );
  } else if (nota < 7) {
    console.log(
      `${nome} foi ${chalk.red(
        'reprovado!',
      )} vai ter que fazer a recuperação - Nota: ${nota}`,
    );
  }
});
