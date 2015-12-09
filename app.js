require('newrelic');

// Set up variables
var app = require('express')();
var port = process.env.PORT || 8080;
var express = require('express');
var request = require('request');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){

  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});