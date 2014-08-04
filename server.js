// Inicialización
var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose');			// mongoose para mongodb
var port  	 = process.env.PORT || 8080;	// Cogemos el puerto 8080

// Conexion a la DB
mongoose.connect('mongodb://localhost:27017/EjemploMEAN');

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
	
