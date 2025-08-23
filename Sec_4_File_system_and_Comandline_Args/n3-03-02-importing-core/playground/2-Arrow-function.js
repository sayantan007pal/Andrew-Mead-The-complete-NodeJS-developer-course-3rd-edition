
const event = {
    name: "Birthday Party of arrow function",
    guestList: ["Sayantan", "Sayan", "Sourav"],
    printGuestList() {
        // console.log("Guest list for : " + eventArrow.name); // 'this' is not bound in arrow functions so we should use the eventArrow object
        console.log("Guest list for : " + this.name);

        this.guestList.forEach(function(guest) {    // regular function causing 'this' to be undefined as it is not bound
            console.log(guest + " is attending " + this.name);
        });
    }
}
event.printGuestList()

/*
[nodemon] restarting due to changes...
[nodemon] starting `node 2-Arrow-function.js`
Guest list for : Birthday Party of arrow function
Sayantan is attending undefined
Sayan is attending undefined
Sourav is attending undefined
*/



const eventArrow = {
    name: "Birthday Party of arrow function",
    guestList: ["Sayantan", "Sayan", "Sourav"],
    printGuestList() {
        // console.log("Guest list for : " + eventArrow.name); // 'this' is not bound in arrow functions so we should use the eventArrow object
        console.log("Guest list for : " + this.name);

        this.guestList.forEach((guest) => {         //arrow function is capturing 'this' from the surrounding context thus 'this' refers to eventArrow
            console.log(guest + " is attending " + this.name);
        });
    }
}
eventArrow.printGuestList()

/*
[nodemon] restarting due to changes...
[nodemon] starting `node 2-Arrow-function.js`
Guest list for : Birthday Party of arrow function
Sayantan is attending Birthday Party of arrow function
Sayan is attending Birthday Party of arrow function
Sourav is attending Birthday Party of arrow function
*/