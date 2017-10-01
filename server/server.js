var express = require('express');
var app = express();
// var index = require('../index');
// var logIn = require('./template/logIn')
var bodyParser = require('body-parser');

app.listen(1000,function(){
	console.log("CONNECT FINALLLLLLLLLLLLLLLLLLLLy")
});

// app.set('template', path.join(__dirname, 'logIn'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(express.join(__dirname, '/')));
// app.use(express.static(__dirname + '/'));

app.get('/', function(req,res){
	res.sendFile(__dirname+"/template/logIn.html")
})

// app.post('/template/logIn', function(req,res){
// 	// var username = req.body.username;
// 	console.log(req.body)
// 	res.end('hi')
// 	console.log('hi')
// })