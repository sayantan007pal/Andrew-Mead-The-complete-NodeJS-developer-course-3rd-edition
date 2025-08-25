const notes = require('./notes.js')
const yargs = require('yargs')


//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

//Crete add command
yargs.command({
  command : 'add',
  description : 'Add a new Note',
  builder:{
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body:{
      describe:'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body)

  }
})

yargs.command({
  command: 'remove',
  description: 'Remove a Note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv)  {
    notes.removeNote(argv.title)
  }
})

yargs.command({
  command: 'list',
  description: 'List all Notes',
  handler(argv)  {
    notes.listNotes()
  }
})



yargs.parse()


/*
☁  notes-app [main] ⚡  node app.js remove --title="NEW Title"
Note not found with title: NEW Title
☁  notes-app [main] ⚡  node app.js add --title="NEW Title" --body="NEW body"                                   
Note added successfully!
☁  notes-app [main] ⚡  node app.js add --title="NEW Title" --body="NEW body"
Note title taken!
☁  notes-app [main] ⚡  node app.js remove --title="NEW Title"               
Note removed successfully! having title: NEW Title
☁  notes-app [main] ⚡  node app.js remove --title="NEW Title not a duplicate" --body="NEW body not a duplicate"
Note not found with title: NEW Title not a duplicate
☁  notes-app [main] ⚡  node app.js add --title="NEW Title not a duplicate" --body="NEW body not a duplicate"   
Note added successfully!
☁  notes-app [main] ⚡  node app.js add --title="NEW Title" --body="NEW body"                                
Note added successfully!
*/




/*
☁  notes-app [main] ⚡  node app.js list                                     
Your Notes
undefined
NEW Title not a duplicate
NEW Title
*/