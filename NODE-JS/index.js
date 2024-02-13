const file_system  = require("node:fs")

const fs = file_system.readFileSync("./Drink.js","utf-8")

const async = file_system.readFile("./Drink.js","utf-8",(error,data)=>{
    if(error)
    {
        console.log(error)
    }else{
        console.log(data)
    }
})

console.log(fs)
console.log(async)
console.log("-----------------------------------------------------------")

file_system.writeFileSync("./aru.txt","hello aru")

file_system.writeFile("./aru.txt","aru", (err) =>{
    if(err)
    {
        console.log(err)
    }else{
        console.log("file written")
    }
})
console.log("-----------------------------------------------------------")