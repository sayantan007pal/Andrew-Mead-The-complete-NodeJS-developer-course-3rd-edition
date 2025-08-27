//
// Goal: To wireup List command
//
// 1. Create and export listNotes from notes.js
// - "Your Notes" using chalk
// - Print note title for each note 
// 2. Call listNotes from command handler
// 3. Test your work by running the script

const chalk = require('chalk')
const fs = require('fs')
const getnotes = () => {
    return "Your notes..."
}


const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((notes) => notes.title === title)

    debugger
    if(duplicateNotes.length === 0){
    notes.push({             
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log('Note added successfully!')
    } 
    else {
        console.log('Note title taken!')
    }

}

const removeNote = function(title){
    // console.log('Removing note with title: ' + title)
    const notes = loadNotes()
    const filterNotesToKeep = notes.filter((notes) => {

        return notes.title !== title
    })
            if(notes.length > filterNotesToKeep.length){

            console.log('Note removed successfully! having title: ' + title)
        }
        else{
            console.log('Note not found with title: ' + title)
        }
    saveNotes(filterNotesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const loadBuffer = fs.readFileSync('notes.json')
        const dataJSON = loadBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}
const listNotes = ()=>{
    const note = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    note.forEach((note) => {
        console.log(note.title)
    })
}
module.exports = {
    getnotes: getnotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes
}