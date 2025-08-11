const add = require('./utils')


const chalk = require('chalk')
const getNotes = require('./notes')

console.log(add(1,2))
/*
utils.js is running
3
 */

console.log(getNotes())
console.log(chalk.blue("Hello world!"))
console.log(chalk.bold.blue("Hello world!"))
console.log(chalk.blue.bold("Hello world!"))
console.log(chalk.green.bold.inverse("Hello world!"))