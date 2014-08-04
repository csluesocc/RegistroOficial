var mongoose = require('mongoose');

module.exports = mongoose.model('Evento', {
	nombreEvento: String,
    ponente: String,
	lugar: String,
	tipo: String,
	fecha: String,
	hora: String,
	estado: String
});