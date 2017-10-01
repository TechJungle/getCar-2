var mongoose = require("mongoose");
var mongoURI = "mongodb://localHost/doaa";
var db = mongoose.connection;
var Schema = mongoose.Schema;
// car schema
var carSchema = new Schema({
  type : String,
  color:String,
  price:String
})

var carModel = mongoose.model('carModel',carSchema);

mongoose.connect(mongoURI,{useMongoClient: true});
db.once("open", function(){
   console.log("connect to db");
 }).on("error", function(){
   console.log("ERROR CONNECT to db");
 })

module.exports = carModel;
