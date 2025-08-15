const fs = require('fs') // Importing the file system module

// -->Challange : 
// 1.Load and Parse JSON data
// 2.Change the name and age property using your info
// 3.Stringify the changed object and overwrite the original JSON file
// 4. Test your work by logging the updated object


/* 
Done by me
*/


// const loadData = JSON.parse(fs.readFileSync('1-json.json')) // loaded the data and parsed the data
// console.log(loadData) // Logging the loaded data
// loadData.name = 'Samriddhi Pal'
// loadData.year = 2005
// console.log(loadData) // Logging the updated data
// console.log(JSON.stringify(loadData)) // Logging the updated data in string format



/**
 * ☁  playground [main] ⚡  node ./1-json.js
{ name: 'Sayantan Pal', planet: 'Earth', year: 2023 }
{ name: 'Samriddhi Pal', planet: 'Earth', year: 2005 }
{"name":"Samriddhi Pal","planet":"Earth","year":2005}
 */




/* 
Done by course
*/



const dataBuffer = fs.readFileSync('1-json.json')
console.log(dataBuffer) // Logging the buffer data
const dataJSON = dataBuffer.toString()
console.log(dataJSON) // Logging the string data
const user = JSON.parse(dataJSON)
console.log(user)

user.name = 'Samriddhi Pal'
user.year = 2005

const userJSON = JSON.stringify(user)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON)



/*
☁  playground [main] ⚡  node ./1-json.js
<Buffer 7b 22 6e 61 6d 65 22 3a 22 53 61 79 61 6e 74 61 6e 20 50 61 6c 22 2c 22 70 6c 61 6e 65 74 22 3a 22 45 61 72 74 68 22 2c 22 79 65 61 72 22 3a 32 30 32 ... 2 more bytes>
{"name":"Sayantan Pal","planet":"Earth","year":2023}
{ name: 'Sayantan Pal', planet: 'Earth', year: 2023 }
{"name":"Samriddhi Pal","planet":"Earth","year":2005}
*/