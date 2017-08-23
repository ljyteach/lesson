var express = require('express');
var app = express();
app.use(express.static('./'))
var art = [
	{
		"title":"html和css入门",
		"content":"<p>html和css入门html和css入门html和css入门</p>\
		<p>html和css入门html和css入门html和css入门</p>\
		<p>html和css入门html和css入门html和css入门</p>\
		<p>html和css入门html和css入门html和css入门</p>\
		<p>html和css入门html和css入门html和css入门</p>\
		<p>html和css入门html和css入门html和css入门</p>\
		",
		"author":"超人",
		"date":"2017-1-12"
	},
	{
		"title":"javascript高级程序设计",
		"content":"<p>javascript高级程序设计javascript高级程序设计javascript高级程序设计</p>\
		<p>javascript高级程序设计javascript高级程序设计javascript高级程序设计</p>\
		<p>javascript高级程序设计javascript高级程序设计javascript高级程序设计</p>\
		<p>javascript高级程序设计javascript高级程序设计javascript高级程序设计</p>\
		<p>javascript高级程序设计javascript高级程序设计javascript高级程序设计</p>\
		<p>javascript高级程序设计javascript高级程序设计javascript高级程序设计</p>\
		",
		"author":"蝙蝠侠",
		"date":"2017-2-15"
	},
	{
		"title":"DOM编程艺术",
		"content":"<p>DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术</p>\
		<p>DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术</p>\
		<p>DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术</p>\
		<p>DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术</p>\
		<p>DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术</p>\
		<p>DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术DOM编程艺术</p>\
		",
		"author":"绿巨人",
		"date":"2017-3-19"
	},
	{
		"title":"JavaScript权威指南",
		"content":"<p>JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>\
		<p>JavaScript权威指南JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>\
		<p>JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>\
		<p>JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>\
		<p>JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>\
		<p>JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>\
		",
		"author":"钢铁侠",
		"date":"2017-5-1"
	},
	{
		"title":"vue完全手册",
		"content":"<p>vue完全手册vue完全手册vue完全手册vue完全手册vue完全手册</p>\
		<p>vue完全手册vue完全手册vue完全手册vue完全手册vue完全手册</p>\
		<p>vue完全手册vue完全手册vue完全手册vue完全手册vue完全手册</p>\
		<p>vue完全手册vue完全手册vue完全手册vue完全手册vue完全手册</p>\
		<p>vue完全手册vue完全手册vue完全手册vue完全手册vue完全手册</p>\
		<p>vue完全手册vue完全手册vue完全手册vue完全手册vue完全手册</p>\
		",
		"author":"雷神",
		"date":"2017-5-2"
	}
]

app.get('/getdata',function(req,res){
	res.send(art);
})

app.get('/getcontent',function(req,res){
	for(var i = 0;i<art.length;i++){
		if(art[i].title === req.query.title){
			res.send(art[i]);
			return;
		}
	}
	res.send('未能成功获取文章')
})

app.listen(3000,function(){
	console.log('server is running')
})