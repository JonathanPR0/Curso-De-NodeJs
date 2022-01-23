const chalk = require('chalk');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `${chalk.bgGray(
    'Qual a sua linguagem de programação favorita?',
  )} \n${chalk.bold('a)')} JavaScript\n${chalk.bold('b)')} Python\n${chalk.bold(
    'c)',
  )} C\n${chalk.bold('d)')} Java\n${chalk.bold('e)')} PHP\n`,
  (resp) => {
    let language;
    if (resp === 'a' || resp === 'A') {
      language = 'JavaScript';
    } else if (resp === 'b' || resp === 'B') {
      language = 'Python';
    } else if (resp === 'c' || resp === 'C') {
      language = 'C';
    } else if (resp === 'd' || resp === 'D') {
      language = 'Java';
    } else if (resp === 'e' || resp === 'E') {
      language = 'PHP';
    }
    language
      ? console.log(
          chalk.blue(
            `A minha linguagem de programação favorita é: ${language}`,
          ),
        )
      : console.error(
          chalk.red(
            'Você deve ter colocado uma resposta que não tinha nas alternativas, rode o programa novamente!',
          ),
        );
    readline.close();
  },
);
