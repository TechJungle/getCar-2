var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./DB/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/'));


app.get("/",function(req,res){
	res.sendFile(__dirname + '/template/logIn.html');
})
	
app.post("/logIn",function(req,res){
	if(req.findOne({user: req.body.user})){
		res.sendFile(__dirname + "/index.html")
	}
		res.sendFile(__dirname + "/signup.html")

})

app.listen(8000,function(){
	console.log('connnnnnnnnnnnnnnected')
});

