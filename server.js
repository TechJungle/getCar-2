var express = require("express");
var bodyParser=require('body-parser')
var db = require("./db/db.js")
var app = express();

app.use(express.static(__dirname + '/'));
app.get("/",function(req,res){
  res.sendFile(__dirname +"/templates/add.html");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.post("/add",function(req,res){
  db.create(req.body,function(err){
    if(err){
      throw err;
    }
    console.log("data deliverd to db")
  })


  // console.log(req.body)
  // console.log("data is here")
  // res.end("Done");
})


app.listen(1994, function(){
  console.log("I Am Listening to  1994")
})
