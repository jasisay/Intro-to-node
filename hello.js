const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req,res)=>{
    const q = url.parse(req.url,true);
    let fileName = "." + q.pathname;
    if(fileName === './') fileName = './index.html';
    fs.readFile(fileName,(err,data)=>{
        if(err){
            res.writeHead('404',{'Content-Type':'text/html'});
            res.end('file not found')
        } else {
            res.writeHead(200,{'Content-Type':'text/html'});
  
            res.end(data);
            console.log('Incoming requests:...' + req.url)
        }
    });
}).listen(8080);

console.log('Server listening on port 8080.');