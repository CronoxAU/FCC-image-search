var express = require('express');
var app = express();
var port = process.argv[2] || process.env.PORT;
var mongo = require('mongodb').MongoClient;
var path = require("path");
var DBurl = process.env.MONGOLAB_URI;
var appURL = 'https://fcc-short-url.herokuapp.com/';
