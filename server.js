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
var Promise = require('bluebird')
var bcrypt = require('bcrypt-nodejs')

app.use(session({secret : "session"}))
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/'));


app.get('/data',function(req, res){
	car.find({}, function(err,data){
		console.log(data)
		res.json(data)
	})
	// res.json(searchTest)
	// res.end()
})
var home = JSON.stringify("http://localhost:5000/index.html");

// var comparePassword = function(attemptedPassword, req, callback) {
// 	var pass = req.body.password;
//     bcrypt.compare(attemptedPassword, pass, function(err, isMatch) {
//       callback(isMatch);
//     });
//   };


app.post("/logIn",function(req,res){

	var pass = req.body.password;
	console.log(req.body.user);
	var red = "index.html";
	
	// password: req.body.password
	user.findOne({username: req.body.user}, function(err, user){
		if (!user){ 
			console.log('wrong')
			} else { 
				bcrypt.compare(req.body.password, user.password, function(err, hash){
					if(hash){
						if(user.username === req.body.user){
							res.send(home)
							req.session.regenerate(function() {
       							// req.session.user = newUser;
    						})
						}else {
			            	res.redirect('/login');
			            	console.log('wrrrrrrrrrong');
			          		}
			        } 
			
				})
		
            }	
	});
	res.end()			
});




app.get('/logout', function(req, res) {
  
  req.session.destroy(function() {
  })
  res



  .end(home)
  // res.send(home)
});
var hashPassword = function(string) {
    var cipher = Promise.promisify(bcrypt.hash);
    return cipher(string, null, null)
      .then(function(hash) {
        console.log(hash,"=====================================hashed password");
      });
  }


app.post("/signUp",function(req,res){
	console.log(req.body)

    var userr = new user ({
	username: req.body.name,
	password: hashPassword(req.body.password),
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

app.listen(5000, function() {
  console.log(`listening on port ${port}`);
});