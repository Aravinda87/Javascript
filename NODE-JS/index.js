const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req,res) =>{

    // res.end(req.url)

    if(req.url === "/")
    {
        res.writeHead(200 , {"content-type" : "text/plain"})
        res.end("home-page")
    }else if(req.url === "/about")
    {
        res.writeHead(200 , {"content-type" : "text/plain"})
        res.end("about-page")
    }else if(req.url === "/api")
    {
        res.writeHead(200 , {"content-type" : "application/json"})
        res.end(JSON.stringify({
            first : "aravinda",
            second : "T R"
        }))
    }else{
        res.writeHead(404)
        res.end("page not found!")
    }

    // res.writeHead(200,{"content-type":"text/html"})
    // const html = fs.readFileSync("./index.html","utf-8")
    // res.end(html)

})

server.listen(3000,() =>{
        console.log("server running on http://localhost:3000/")
})

