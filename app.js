const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');

var app = express();


//logging middleware
app.use(morgan('dev'));
app.use(express.static('public')); 

//body parsing middleware
app.use(bodyParser.urlencoded({ extended: true})); // HTML form submits
app.use(bodyParser.json()); // AJAX Requests

//nunjucks configuration
var env = nunjucks.configure('views', {noCache: true});
app.set('view engine','html')
app.engine('html',nunjucks.render);


app.listen(3000);
