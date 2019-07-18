// const fs = require('fs')
//
// fs.writeFileSync('notes.txt', 'hello world')
//
// fs.appendFileSync('notes.txt', ' blah blah')

// const add = require('./utils.js')
// // const name = 'Andrew'
//
// const sum = add(5,4)
// console.log(sum)

const validator = require('validator')
const getNotes = require('./notes.js')

console.log(getNotes())
