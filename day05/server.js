//核心模板、自定义模块、第三方模块

const http = require('http');  //引入http模块
const fs = require('fs')

http.createServer(function(req,res){
    fs.readFile('./index.html','utf-8',(err,data)=>{
        res.end(data);
    })

}).listen(3000,function(){
    console.log('server is running');
})