const express = require('express');

const app = express();

app.use(express.static('public'));
app.set('view engine','pug');

app.get('/',(req,res)=>{
    res.render('index',{title:'首页'});
})

app.get('/movie',(req,res)=>{
    res.render('movie',{title:'电影'});
})

app.get('/video',(req,res)=>{
    res.render('video',{title:'视频'});
})

app.get('/image',(req,res)=>{
    res.render('image',{title:'图片'});
})

let list = ["香蕉","苹果","鸭梨"];

app.get('/list',(req,res)=>{
    res.render('list',{data:list});
})

app.get('/insert',(req,res)=>{
    let val = req.query.fruit;
    list.push(val);
    res.redirect('/list');
})

app.listen(3000,()=>{
    console.log('server is running');
})