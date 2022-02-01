const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'p1',
      message: 'Qual o seu primeiro nome?',
    },
    {
      name: 'p2',
      message: 'Qual o seu sobrenome?',
    },
  ])
  .then((answers) => {
    console.log(`Prazer conhecer você ${answers.p1} ${answers.p2}`);
  })
  .catch((err) => console.error(err));
