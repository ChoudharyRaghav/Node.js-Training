import chalk from "chalk";

console.log(chalk.blue("Hello Node"))

console.log(chalk.red("Hello Node"))

console.log(chalk.yellowBright.bgMagenta.bold("Hello Node"))

console.log(chalk.green("This is Green Flag " +
    chalk.red.underline.bold("that changes to Red") +
    " and again changes to Green"))
