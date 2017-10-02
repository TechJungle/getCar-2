var express = require('express');
var morgan = require('morgan');
var bodyParser=require('body-parser');
var path = require('path')
var user = require("./db/db.js");
var car = require("./db/carDB.js")
var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + '/'));

app.get('/data', function(req, res){
	car.find({}, function(err,data){
		console.log(data)
		res.json(data)
	})
	// res.json(searchTest)
	// res.end()
})
var home = JSON.stringify("http://localhost:5000/index.html");
app.post("/logIn",function(req,res){
	console.log(req.body.user)
	var red = "index.html"
	user.findOne({username: req.body.user, password: req.body.password}, function(err, data){
		if (data){ res.send(home)
} else{console.log('wrong')}
	})	
})

app.post("/signUp",function(req,res){
	console.log(req.body)
  
    var userr = new user ({
	username: req.body.name,
	password: req.body.password,
	phone: req.body.numberPhon,
	email: req.body.email })
userr.save(function(err, userr){
	if (err){
		console.log(err)
	}
})
       
    res.end()
})

app.post("/add",function(req,res){
	console.log(req.body)

    var carr = new car ({
	type: req.body.type,
	color: req.body.color,
	price: req.body.price,
	image: req.body.image
}) 
    carr.save(function(err, carr){
	if (err){
		console.log(err)
	}
})
res.end(home)


})

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});