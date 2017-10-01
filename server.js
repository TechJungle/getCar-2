var express = require('express');
var morgan = require('morgan');
var path = require('path')
var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/'));

var searchTest=[{car:"BMW", color:'red', img: 'https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26'},
				{car:"Mercedes", color:"red", img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:"Mitsubishi", color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'Tesla', color: 'purple',img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'mercedes', color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},{car:"BMW", color:'red', img: 'https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26'},
				{car:"Mercedes", color:"red", img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:"Mitsubishi", color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'Tesla', color: 'purple',img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'mercedes', color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},{car:"BMW", color:'red', img: 'https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26'},
				{car:"Mercedes", color:"red", img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:"Mitsubishi", color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'Tesla', color: 'purple',img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'mercedes', color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},{car:"BMW", color:'red', img: 'https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26'},
				{car:"Mercedes", color:"red", img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:"Mitsubishi", color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'Tesla', color: 'purple',img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"},
				{car:'mercedes', color:'blue', img: "https://auto.ndtvimg.com/car-images/big/dc/avanti/dc-avanti.jpg?v=26"}];

app.get('/data', function(req, res){
	res.json(searchTest)
	res.end()
})
var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});