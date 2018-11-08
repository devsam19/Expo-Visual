var http = require('http');
var express = require('express');
var app = express();

var router = express.Router();
//set path

var path = __dirname + '/views/';

// set view engine
/* Use Handlebars later
var handlebars = require('express3-handlebars').create({defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
*/
// set port 3000

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// set routes

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });

app.get('/', function(req,res){
    res.sendFile(path +  'dashboard.html');
});



app.listen(app.get('port'), function(){
    console.log('Starting express on localhost : ' + app.get('port') + '; Press Ctrl-C to terminate');
});