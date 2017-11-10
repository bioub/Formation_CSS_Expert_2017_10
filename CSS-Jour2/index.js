const chalk = require('chalk');

console.log('Hello black');
console.log(chalk.green('Hello green'));
console.log(chalk.bgYellow.red('Hello red with bg yellow'));
console.log(chalk.bold.bgYellow.red('Hello bold, red with bg yellow'));