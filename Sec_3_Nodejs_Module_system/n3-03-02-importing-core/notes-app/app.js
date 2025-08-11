const fs = require('fs') // loading the fs module from node js

fs.writeFileSync('notes.txt', "My Name is sayantan")


fs.appendFileSync('notes.txt', "I'm a software engineer")