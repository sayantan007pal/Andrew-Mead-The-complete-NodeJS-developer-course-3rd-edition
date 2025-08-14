const add = require('./utils')
const getNotes = require('./notes')
const yargs = require('yargs')

//Crete add command
yargs.command({
  command : 'add',
  description : 'Add a new Note',
  handler : function (){
    console.log('Printing new note for adding.')
  }

})
//Create remove command
 yargs.command({
  command : 'remove',
  description : 'Remove a Note',
  handler : function (){
    console.log('Printing new note for removing.')
  }


})

//Create List command
yargs.command({
  command:'list',
  description: 'List all Notes',
  handler: function(){
    console.log('printing the whole list of notes')
  }
})



console.log(yargs.argv)

/*

☁  notes-app [main] ⚡  node app.js --help                     
utils.js is running
app.js [command]

Commands:
  app.js add     Add a new Note
  app.js remove  Remove a Note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
*/


/*
  ☁  notes-app [main] ⚡  node app.js add                        
utils.js is running
Printing new note for adding.
{ _: [ 'add' ], '$0': 'app.js' }
*/

/*
☁  notes-app [main] ⚡  node app.js remove
utils.js is running
Printing new note for removing.
{ _: [ 'remove' ], '$0': 'app.js' }

*/