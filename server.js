const http =require('http');

const server = http.createServer((req,res)=>{
    res.end('this is a server end')
})

server.listen('3000');