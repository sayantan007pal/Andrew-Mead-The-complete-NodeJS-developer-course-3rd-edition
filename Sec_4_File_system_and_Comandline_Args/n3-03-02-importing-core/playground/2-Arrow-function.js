
const eventArrow = {
    name: "Birthday Party of arrow function",

    printGuestList: () => {
        console.log("Guest list for : " + eventArrow.name); // 'this' is not bound in arrow functions so we should use the eventArrow object
        console.log("Guest list for : " + this.name);
    }
}
eventArrow.printGuestList()

// so in order to access "this" we need to use a regular function

const event = {
    name: "Birthday Party of arrow function",
    
    printGuestList() {
        // console.log("Guest list for : " + eventArrow.name); // 'this' is not bound in arrow functions so we should use the eventArrow object
        console.log("Guest list for : " + this.name);
    }
}
event.printGuestList()