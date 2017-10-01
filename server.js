var express = require("express");
var bodyParser=require('body-parser');
var db = require("./db/db.js");
var session = require("express-session")
var app = express();
app.use(session({
  secret : "session"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/'));


app.get("/",function(req,res){
  // if(req.session.loggedIn){
    res.sendFile(__dirname +"/templates/homeBage.html");
  // }
    // res.sendFile(__dirname +"/templates/login.html");
})

app.post("/add",function(req,res){
  db.create(req.body,function(err){
    if(err){
      throw err;
    }
    console.log("data deliverd to db")
  })
})

app.listen(1994, function(){
  console.log("I Am Listening to  1994")
})
