// server.js
'use strict'

//Import our dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Create instances
const app = express();
const router = express.Router();

//Setting up the port to 3000
const port = process.env.API_PORT || 3000;

//Configuring the API to use bodyParser to look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//This will prevent errors from Cross Origin Resource Sharing by
//setting our headers to allow CORS with middleware
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods',
        'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.header('Access-Control-Allow-header', 'Access-Control-Allow-Headers, Origin, Accept' +
        'X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

//Remove cacheing to receive most recent comments
    res.setHeader('Cache-Control','no-cache');
    next();
});

//Setting the route path and initializing the API
router.get('/', function (req,res){
    res.json({ message: 'API Initialized!'});
});

//Use router configuration when an api is called
app.use('/api','router');

//Starts the server and listens for requests
app.listen(port,function(){
    console.log('api running on port ${port}');
});