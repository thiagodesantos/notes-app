const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//costumizar o yags
yargs.version('1.1.0')

//Criação do add comando
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Corpo do add',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// criação remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a noite',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }        
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Listando o command
yargs.command({
    command:'list',
    describe: 'Lista os comandos',
    handler(){
        notes.listNotes()
    }
})

// Listando o command
yargs.command({
    command:'read',
    describe: 'lendo os comandos',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }        
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()

//add, remove, read, list

//console.log(yargs.argv)
    