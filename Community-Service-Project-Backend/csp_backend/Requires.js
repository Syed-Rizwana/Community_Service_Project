const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const Feedback = require('./Routes/Feedback');
const signup = require('./Routes/signup');
const login=require('./Routes/login');
const AR=require('./Routes/AR');
const share1=require('./Routes/share1');
const contact=require('./Routes/contact');

const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/Feedback', Feedback);
app.use('/signup', signup);
app.use('/AR',AR);
app.use('/login', login);
app.use('/share1', share1);
app.use('/contact', contact);





module.exports = app;