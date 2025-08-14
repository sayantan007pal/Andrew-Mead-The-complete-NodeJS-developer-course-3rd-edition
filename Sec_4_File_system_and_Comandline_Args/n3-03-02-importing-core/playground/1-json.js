const fs = require('fs') // Importing the file system module
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  year: 2016
}
const bookJSON = JSON.stringify(book) // Convert object to JSON string
console.log(bookJSON)

/*
☁  playground [main] ⚡  node ./1-json.js                                                   
{"title":"Ego is the Enemy","author":"Ryan Holiday","year":2016}
*/
const parsedBook = JSON.parse(bookJSON) // Convert JSON string back to object
console.log(parsedBook)
console.log('TITLE: ' + parsedBook.title)
console.log('AUTHOR: ' + parsedBook.author)
console.log('YEAR: ' + parsedBook.year)

/*
☁  playground [main] ⚡  node ./1-json.js
{ title: 'Ego is the Enemy', author: 'Ryan Holiday', year: 2016 }
TITLE: Ego is the Enemy
AUTHOR: Ryan Holiday
YEAR: 2016
*/

fs.writeFileSync('1-json.json', bookJSON) // Write JSON string to a file