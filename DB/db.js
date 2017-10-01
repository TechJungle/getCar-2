var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongoURI = 'mongodb://localhost/user';
var db = mongoose.connection;

mongoose.connect(mongoURI,{useMongoClient: true});
 
 db.on('error', function () {
   console.log("ERRRRROR connect to db");
 }).once('open', function () {
   console.log('Mongodb connection open');
});
 



var userSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true }
});

var User = mongoose.model('User', userSchema);


 
 // User.comparePassword = function(candidatePassword, savedPassword, cb) {
 //   bcrypt.compare(candidatePassword, savedPassword, function(err, isMatch) {
 //     if (err) { return cb(err); }
 //     cb(null, isMatch);
 //   });
 // };
 
//  userSchema.pre('save', function(next) {
//    var cipher = Promise.promisify(bcrypt.hash);
//    return cipher(this.password, null, null).bind(this)
//      .then(function(hash) {
//        this.password = hash;
//        next();

// })})




module.exports = User;