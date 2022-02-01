const chalk = require('chalk');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'string',
      name: 'nome',
      message: 'Qual é o seu nome?',
    },
    {
      type: 'number',
      name: 'idade',
      message: 'Qual a sua idade?',
    },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
      throw new Error('O nome e a idade são obrigatórios');
    }
    console.log(
      `Nome:${chalk.bgYellow.black(answers.nome)}\nIdade:${chalk.bgYellow.black(
        answers.idade,
      )}`,
    );
  })
  .catch((err) => console.log(chalk.red(err)));
