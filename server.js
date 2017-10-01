var express = require("express");
var path = require('path')
var app = express();

app.use(express.static(__dirname +"/"))

app.get("/",function(req,res){
	res.sendFile(__dirname+"/templates/home.html");
})

app.post("/signUp",function(req,res){
  console.log("data is here")
  res.end();
})

app.listen(1994, function(){
  console.log("I Am Listening to  1994")
})
