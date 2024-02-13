const EventEmitter = require("node:events")

class Pizza_Shop extends EventEmitter{
    constructor(number){
        super()
        this.number = 0 
    }
    order(size,toppings){
        this.number++;
        this.emit("order",size,toppings)
    }
    display(){
        console.log(`${this.number}`)
    }
}

module.exports = Pizza_Shop