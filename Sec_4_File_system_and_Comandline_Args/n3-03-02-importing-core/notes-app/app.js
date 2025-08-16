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
☁  notes-app [main] ⚡  node app.js add --title="NEW Title" --body="NEW body"
Note title taken!
☁  notes-app [main] ⚡  node app.js add --title="NEW Title not a duplicate" --body="NEW body not a duplicate"
Note added successfully!
*/