//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const fs = require('fs')
const getnotes = () => {
    return "Your notes..."
}


const addNotes = (title,body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((notes) => notes.title === title)
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

module.exports = {
    getnotes: getnotes,
    addNotes: addNotes,
    removeNote: removeNote
}