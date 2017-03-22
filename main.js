'use strict'

const { createServer } = require('http');
const { createReadStream }  = require('fs');
const readStream = createReadStream('index.html')

const server = createServer((req, res)=>{
  res.writeHead(200);
  readStream.pipe(res);

});


var port = 8080;

server.listen(port, ()=>{
  console.log(`server listening on ${port}`);
})
