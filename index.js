var http = require('http');
var express = require('express');
var app = express();

// set view engine

var handlebars = require('express3-handlebars').create({defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// set port 3000

app.set('port', process.env.PORT || 3000);

// set routes

app.get('/', function(req,res){
    res.render('home');
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.listen(app.get('port'), function(){
    console.log('Starting express on localhost : ' + app.get('port') + '; Press Ctrl-C to terminate');
});