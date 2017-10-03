var express = require('express');
var morgan = require('morgan');
var bodyParser=require('body-parser');
var path = require('path')
var user = require("./db/db.js");
var car = require("./db/carDB.js")
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var app = express();
var session = require("express-session")

app.use(session({secret : "session"}))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/'));
var logged = false;
app.get('/data',function(req, res){
	car.find({}, function(err,data){
		data.push(logged)
		res.json(data)
	})
	// res.json(searchTest)
	// res.end()
})
app.post("/logIn",function(req,res){
	console.log(req.body.user + "1223456")
	user.findOne({username: req.body.user}, function(err, user){
		if (!user){ 
			console.log('wrong')
			} else { 
				console.log(user.password)
				console.log("ELse")
				bcrypt.compare(req.body.password, user.password, function(err, hash){
					if(hash){
						console.log('hhhh')
							req.session.regenerate(function(data) {
								console.log(data + "sisssion")
								logged = true;		
								console.log(logged + "11111")
       							// req.session.user = newUser;
    						})
						
			        } else {console.log("wroooooooooong")}
			
				})
		
            }	
	});		
	res.end()
});

app.get('/logout', function(req, res) {
  
  req.session.destroy(function() {
  	logged = false;
  	res.end()
  })
  console.log(req.session)

});

// var hashPassword = function(string) {
// 	var he
// 	bcrypt.hash(string, null, null, function(err, hash){
// 		he = hash
// 	})
// 	return he
//     // var cipher = Promise.promisify(bcrypt.hash);
//     // return cipher(string, null, null)
//     //   .then(function(hash) {
//     //     console.log(hash,"=====================================hashed password");
//     //   });
//   }

app.post("/signUp",function(req,res){
  bcrypt.hash(req.body.password, null, null, function(err, hash){
    var userr = new user ({
	username: req.body.name,
	password: hash,
	phone: req.body.numberPhon,
	email: req.body.email })
userr.save(function(err, userr){
	if (err){
		console.log(err)
	}
})
})
  logged = true;
    res.end()
})

app.post("/add",function(req,res){
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
    res.end()
})

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
