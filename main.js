'use strict'

const { createServer } = require('http');
const { createReadStream }  = require('fs');

const server = createServer((req, res)=>{

  const readStream = createReadStream('index.html')
  readStream
  .on('error', (err)=>{
    res.end(error);
  })
  .on('open', ()=>{
    readStream.pipe(res);
  })
});


var port = 8080;

server.listen(port, ()=>{
  console.log(`server listening on ${port}`);
})
