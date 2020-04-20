const fs = require('fs')
const chalk = require('chalk')

const getNotas = () => {
    return 'minhas notas...'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })    
    
        saveNotes(notes);
        console.log(chalk.green('New note Added!'))
    } else{
        console.log(chalk.red('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToRemove= notes.filter((note) => note.title === title)

    if (noteToRemove.length !== 0) {
        const notesToSave= notes.filter((note) => note.title !== title)

        saveNotes(notesToSave);
        console.log(chalk.green( 'Note "' + title + '" Removed!'))
    } else{
        console.log(chalk.red('Title Not Found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse( 'Your Notes'))

    notes.forEach((note)=>{
        console.log(chalk.blue(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note)
    {
        console.log(chalk.green(note.title))
        console.log(note.body)
    } else{
        console.log(chalk.red('Note Not Found!'))
    }
    
}



const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }    
}

module.exports = {
    getNotas: getNotas,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}