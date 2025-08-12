const add = require('./utils')
const getNotes = require('./notes')

// const command = process.argv

// console.log(command)

/*☁  notes-app [main] ⚡  node app.js       
utils.js is running
[
  '/usr/local/bin/node',
  '/Users/sayantanpal100/Desktop/Udemy Projects/Andrew-Mead-The-complete-NodeJS-developer-course-3rd-edition/Sec_3_Nodejs_Module_system/n3-03-02-importing-core/notes-app/app.js'
]
 */



const command = process.argv[2]

if(command === 'add'){
    console.log('Adding new note')
}else if(command === 'remove'){
    console.log('Removing note')
}

/*
☁  notes-app [main] ⚡  node app.js add
utils.js is running
Adding new note

 */
