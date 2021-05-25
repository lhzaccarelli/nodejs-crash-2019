const fs = require('fs')
const path = require('path')

fs.unlink(path.join(__dirname, "/test", "hello.txt"), (err) => {
    if (err) {
        throw err
    }
    console.log("File removed...")
})

//Remove dir
fs.rmdir(path.join(__dirname, "/test"), (err) => {
    if (err) {
        throw err
    }
    console.log("Folder removed...")
})

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if (err) {
        throw err
    }
    console.log("Folder created...")
})

// Create/override and write to file
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), 'Hello world', {}, (err) => {
    if (err) {
        throw err
    }
    console.log("File created...")
})

// Append content to a file
fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "\nNode JS", (err) => {
    if (err) {
        throw err
    } 
    console.log("Text appended to file...")
})

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) {
        throw err
    } 
    console.log(`File data: \n${data}`)
})

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), err => {
    if (err) {
        throw err
    } 
    console.log("File renamed...")
})