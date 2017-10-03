var mongoose = require("mongoose");
var mongoURI = "mongodb://localHost/doaa";
// var mongoURI = "mongodb://techJungle:techJungle5@ds159344.mlab.com:59344/get-car";
var db = mongoose.connection;
var Schema = mongoose.Schema;
// car schema

var userSchema = new Schema({
  username: String,
  password: String,
  phone: Number,
  email: String
});

var User = mongoose.model('User', userSchema);

mongoose.connect(mongoURI,{useMongoClient: true});
db.once("open", function(){
   console.log("connect to db");
 }).on("error", function(){
   console.log("ERROR CONNECT to db");
 })

module.exports = User;