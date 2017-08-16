const fs = require('fs');

fs.readFile('./test1.txt','utf-8',(err,data)=>{
    console.log(data);
})

fs.readFile('./test2.txt','utf-8',(err,data)=>{
    console.log(data);
})
