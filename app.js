

// Set up variables
var app = require('express')();
var port = process.env.PORT || 8080;
var express = require('express');
var request = require('request');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

var io = require('socket.io').listen(app.listen(port));
require('./config')(app, io);
require('./routes')(app, io);