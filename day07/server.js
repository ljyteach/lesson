const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/getname',(req,res)=>{
    setTimeout(function(){
        res.send('lixiaoming');
    },300)
    
})

let student = {
    name:'xiaoming',
    age:2,
    sex:'male'
}

let list = [
    {name:'xiaoming',age:1},
    {name:'xaohong',age:2},
    {name:'xiaoliang',age:3}
]

app.get('/getstudent',(req,res)=>{
    res.send(student);
})

app.get('/getlist',(req,res)=>{
    res.send(list);
})

app.post('/insertlist',(req,res)=>{
    list.push(req.body);
    res.send(list);
})

app.get('/getsex',(req,res)=>{
    res.send('female');
})

app.listen(3000,()=>{
    console.log('server is running');
})