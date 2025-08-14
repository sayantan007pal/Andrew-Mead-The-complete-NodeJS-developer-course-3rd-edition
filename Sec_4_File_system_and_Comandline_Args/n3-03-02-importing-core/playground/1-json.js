const fs = require('fs') // Importing the file system module

const dataBuffer = fs.readFileSync('1-json.json') // Reading the JSON file synchronously
console.log(dataBuffer) // Logging the buffer data

const dataJSON = dataBuffer.toString() // Converting buffer to string
console.log(dataJSON) // Logging the JSON string


const book = JSON.parse(dataJSON) // Parsing JSON string to object
console.log(book)
console.log(book.title)
console.log(book.author)
console.log(book.year)


/*
☁  playground [main] ⚡  node ./1-json.js
<Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 ... 14 more bytes>
{"title":"Ego is the Enemy","author":"Ryan Holiday","year":2016}
{ title: 'Ego is the Enemy', author: 'Ryan Holiday', year: 2016 }
Ego is the Enemy
Ryan Holiday
2016
*/