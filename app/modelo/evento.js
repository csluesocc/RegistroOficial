var mongoose = require('mongoose'),
	esquema = mongoose.Schema;

var esquemaEventos = new esquema({
	id_evento: Number, //identificador, numero auto incrementable. Nota: discutir sobre esto: http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/
	titulo:String,
	tipo: String, //por ejemplo: ponencia o taller
	//area: String, //por ejemplo: sistemas, civil, etc.
	fecha: String,
	hora: String, //si se considera neceario... formato: 00:00 pm/am
	lugar: String,
	ingenieria: String, //opcional
	ponente:String,
	id_congreso: String, //identificador del congreso
	asistencia:String // numero de participantes
});

module.exports = mongoose.model('eventos', esquemaEventos);
