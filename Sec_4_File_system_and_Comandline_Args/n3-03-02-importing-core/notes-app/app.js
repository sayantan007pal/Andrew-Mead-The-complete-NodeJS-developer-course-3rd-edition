const notes = require('./notes.js')
const yargs = require('yargs')

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
yargs.parse()

/*
☁  notes-app [main] ⚡  node app.js add --title="this is my title" --body="this is my body"
TITLE: this is my title
BODY: this is my body
*/


/**
☁  notes-app [main] ⚡  node app.js add --title="NEW Title" --body="NEW body"
TITLE: NEW Title
BODY: NEW body
 */