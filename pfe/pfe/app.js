const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require("cors");
const app =express();

const loginRouter = require('./routes/login.routes');
const {corsOptions, credentials} = require("./utils/cors-config")
const registerRouter = require('./routes/register.routes');
const logoutRouter = require('./routes/logout.routes');

app.use(express.json()) // To parse the incoming requests with JSON payloads
app.use(express.urlencoded({extended: true}));
app.use(credentials);
app.use(cors(corsOptions))

app.get('/', (req, res) => res.send({message : 'ok'})) ;

app.use('/login' , loginRouter ) ;

app.use('/register' , registerRouter) ;

app.use("/logout" , logoutRouter);

module.exports = app ;
