const fs = require("node:fs")

setTimeout(() => {
    console.log("timer")
}, 5000);

fs.readFile(__filename,() =>{
    console.log("i/o queue")
})