const add = require('./utils')
const getNotes = require('./notes')




const command = process.argv[2] // argv[] stands for argument vector which means it holds the command line arguments
console.log(process.argv)

if(command === 'add'){
    console.log('Adding new note')
}else if(command === 'remove'){
    console.log('Removing note')
}

/*
☁  notes-app [main] ⚡  node app.js add --title="Things to buy"
utils.js is running
[
  '/usr/local/bin/node',
  '/Users/sayantanpal100/Desktop/Udemy Projects/Andrew-Mead-The-complete-NodeJS-developer-course-3rd-edition/Sec_4_File_system_and_Comandline_Args/n3-03-02-importing-core/notes-app/app.js',
  'add',
  '--title=Things to buy'
]
Adding new note

 */
