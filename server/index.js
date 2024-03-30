const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
const conifgurePassport = require('./config/passport');
const authRoutes = require('./routes/authRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
conifgurePassport();
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth',authRoutes);
app.get('/dashboard', (req,res) => {
  res.json({msg:"Logged in"})
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(3000, () => console.log('listening on port: 3000'));
})

