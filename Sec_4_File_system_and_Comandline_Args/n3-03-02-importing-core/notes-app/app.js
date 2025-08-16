const notes = require('./notes.js')
const yargs = require('yargs')


/*
Challenge: Setup command option and function

1. Setup a remove command to take a required "--title" option
2.Create and export removeNote function from note.js
3.Call removeNote in remove command handler
4.Have removeNote log the title of the note being removed
5.Test your work by running the command: node app.js remove --title="NEW Title"


Challenge: Wire up remove command

1.Load existing notes
2.use array filter to remove note
3. Save the newly created array
4 test your work with a title that exist and a title that does not exist

Challenge: provide logs
1. Log the title of the note being removed
2. Log a message if the note was not found

*/
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
  handler : function (argv){
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
  handler: function (argv) {
    notes.removeNote(argv.title)
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