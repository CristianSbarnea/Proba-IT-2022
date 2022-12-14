const express = require('express');
const mongoose = require('moongoose');
const session = require('express-session');
const dotenv = require('dotenv');

const app = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 4000; 

// conectare la baza de date  

mongoose.connect(process.env.DB_URI); 
const db = mongoose.connection;

app.use(express.urlencoded({extended: false}));
app.use(session({secret:"secret", saveUninitialized:true, resave: false}));

app.use("", require('./routes/routes'));
 
// app.get('/', (req, res) => res.send("Hello World!"));
app.listen(PORT, () => {console.log(`Server ready! Listening on http://localhost:${PORT}`)}); 