const http = require('http');
const host = "127.0.0.1";
const port = "3000";
const server = http.createServer((req, res)=>{
    console.log("Request: " + req.url);

    res.statusCode = 200;
    res.setHeader("content-Type", "text/html");
    res.end("<h1>Welcome to FPTU</h1>");
});

server.listen(port, host, ()=>{
    console.log(`Server is running at ${host}:${port}`);
});