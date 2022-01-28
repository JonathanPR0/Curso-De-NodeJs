const _ = require('lodash');
const chalk = require('chalk');
const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = [0, 1, 1, 2, 3, 5, 8, 13];

const diff = _.difference(a, b);
console.log(chalk.blue(diff));
