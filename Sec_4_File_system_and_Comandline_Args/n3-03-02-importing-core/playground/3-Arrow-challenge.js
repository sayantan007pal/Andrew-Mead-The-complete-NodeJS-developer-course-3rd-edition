//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {   //here i am defining the method and not using arrow function as i want to use 'this'
        return this.tasks.filter((task)=> task.completed === false)

    }
}

console.log(tasks.getTasksToDo())



/*
[nodemon] restarting due to changes...
[nodemon] starting `node 3-Arrow-challenge.js`
[ { text: 'Clean yard', completed: false },
  { text: 'Film course', completed: false } ]
*/