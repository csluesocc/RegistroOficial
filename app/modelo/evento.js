var mongoose = require('mongoose');

module.exports = mongoose.model('eventos', {
	id_evento: Number, //identificador, numero auto incrementable. Nota: discutir sobre esto: http://docs.mongodb.org/manual/tutorial/create-an-auto-incrementing-field/
    titulo: String,
	tipo: String, //por ejemplo: ponencia o taller
	area: String, //por ejemplo: sistemas, civil, etc.
	fecha: Date,
	hora_ini: String, //si se considera neceario... formato: 00:00 pm/am
	hora_fin: String, //si se considera neceario... formato: 00:00 pm/am
	lugar: String,
	observaciones: String, //opcional
	ponentes:[ //array de ponentes, en caso de haber mas de uno
		{
			nombre: String,
			apellido: String,
			telefono: String,
			institucion: String,
		}
	],
	id_congreso: String //identidicador del congreso
});
