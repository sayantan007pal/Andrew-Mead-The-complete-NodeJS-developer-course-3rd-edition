const fs = require('fs')
const getnotes = function(){
    return "Your notes..."
}

const addNotes = function(title,body){
    const notes = loadNotes()
    //
    notes.push({             
        title: title,
        body: body
    })
    console.log('TITLE: ' + title)
    console.log('BODY: ' + body)
    saveNotes(notes)

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