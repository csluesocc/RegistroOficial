// Inicialización
var express  = require('express')
	app = express(),
	mongoose = require('mongoose'),
	port = process.env.PORT || 8080;

// Conexion a la DB
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/aesia_registro');


//Configuracion
app.configure(function() {
	app.use(express.static(__dirname + '/angular'));
	app.use(express.logger('dev'));			// activamos el log en modo 'dev'
	app.use(express.bodyParser());			// Cambia HTML con metodo post
	app.use(express.methodOverride()); 		//Simula delete y put
});

// Cargamos los endpoints
require('./app/routes.js')(app);

// Cogemos el puerto para escuchar
app.listen(port, function(){
	console.log("APP por el puerto " + port);
});
