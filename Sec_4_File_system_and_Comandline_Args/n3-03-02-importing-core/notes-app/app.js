const add = require('./utils')
const getNotes = require('./notes')
const yargs = require('yargs')

console.log(process.argv)
console.log(yargs.argv)

/*
☁  notes-app [main] ⚡  node app.js                            
utils.js is running
[
  '/usr/local/bin/node',
  '/Users/sayantanpal100/Desktop/Udemy Projects/Andrew-Mead-The-complete-NodeJS-developer-course-3rd-edition/Sec_4_File_system_and_Comandline_Args/n3-03-02-importing-core/notes-app/app.js'
]
{ _: [], '$0': 'app.js' }
*/


/*
☁  notes-app [main] ⚡  node app.js add --title="Things to buy"
utils.js is running
[
  '/usr/local/bin/node',
  '/Users/sayantanpal100/Desktop/Udemy Projects/Andrew-Mead-The-complete-NodeJS-developer-course-3rd-edition/Sec_4_File_system_and_Comandline_Args/n3-03-02-importing-core/notes-app/app.js',
  'add',
  '--title=Things to buy'
]
{ _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }
*/
