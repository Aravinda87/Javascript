const fs = require("node:fs")

const readablestream = fs.createReadStream("./file1.txt",{
    encoding : "utf-8",
    highWaterMark : 2,
});

const writeablestram = fs.createWriteStream("./file2.txt");

readablestream.pipe(writeablestram);

// readablestream.on("data", (chunk) =>{
//     console.log(chunk)
//     writeablestram.write(chunk)
// });