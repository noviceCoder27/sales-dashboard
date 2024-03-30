const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  twitterId: String,
  accessToken: String,
  refreshToken: String,
});


const User = mongoose.model('User', userSchema);


module.exports = User