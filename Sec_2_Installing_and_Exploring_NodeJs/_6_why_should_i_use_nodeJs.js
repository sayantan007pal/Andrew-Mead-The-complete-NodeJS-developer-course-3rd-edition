import chalk from 'chalk';

//Blocking scope
//This code will not run until the previous one is completed
console.log("Start");
setTimeout(() => {
  console.log("This is a delayed message");
}, 2000);
console.log("End");
//Output:           
/*
Start
End
This is a delayed message
 */



//Non-blocking scope
//This code will run immediately without waiting for the previous one

console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold('Error message'));
//Output:
/*
Hello world! (in blue)
Error message (in red and bold)
*/