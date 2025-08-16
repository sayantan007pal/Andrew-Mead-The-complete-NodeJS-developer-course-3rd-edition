const fs = require('fs')
const getnotes = function(){
    return "Your notes..."
}

const addNotes = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })
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

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
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
    addNotes: addNotes
}