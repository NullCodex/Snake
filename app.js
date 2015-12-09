require('newrelic');

var app = require('express')();
var port = process.env.PORT || 8080;
var express = require('express');
var request = require('request');
var path = require('path');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/main', function(req, res){

  res.sendFile(path.join(__dirname, 'views', 'main.html'));
});