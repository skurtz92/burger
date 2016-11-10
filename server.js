var express = require('express'); // setting up server file and reqiring express pkg
var bodyParser = require('body-parser'); //require body-parser
var methodOverride = require('method-override'); // require method-override

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public')); //what is dirname?

// parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);
app.use('/update', routes); //what do these mean?
app.use('/create', routes);

var port = 4000;
app.listen(port);

console.log(module.exports)