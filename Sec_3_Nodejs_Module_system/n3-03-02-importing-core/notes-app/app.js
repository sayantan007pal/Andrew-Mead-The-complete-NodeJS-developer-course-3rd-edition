const add = require('./utils')

const validator = require('validator')

const getNotes = require('./notes')

console.log(add(1,2))
/*
utils.js is running
3
 */

console.log(getNotes())
console.log(validator.isEmail("sayantan@gmail.com"))
console.log(validator.isURL("https://www.google.com"))