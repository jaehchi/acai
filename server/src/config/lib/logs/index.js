import * as chalk from 'chalk';

export const success = (...log) => {
  process.env.DEBUG === 'TRUE' ? console.log(chalk.default.white.bgGreen.bold(...log)) : null;
};

export const error = (...log) => {
  process.env.DEBUG === 'TRUE' ? console.log(chalk.default.white.bgRed.bold(...log)) : null;
};

export const warning = (...log) => {
  process.env.DEBUG === 'TRUE' ? console.log(chalk.default.gray.bgYellow.bold(...log)) : null;
};