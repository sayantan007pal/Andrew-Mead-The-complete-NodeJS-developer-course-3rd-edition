//Object "event" with name and printGuestList method
const event = {
     name : "Birthday Party",
     printGuestList: function () {
        console.log("Guest list for : " + this.name); // 'this' is a binding to the event object
     }
}
event.printGuestList()


const eventArrow = {
    name: "Birthday Party of arrow function",
    printGuestList: () => {
        console.log("Guest list for : " + eventArrow.name); // 'this' is not bound in arrow functions so we should use the eventArrow object
        console.log("Guest list for : " + this.name);
    }
}
eventArrow.printGuestList()