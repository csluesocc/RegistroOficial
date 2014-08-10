var mongoose = require('mongoose');


module.exports = mongoose.model('participantes', {
	id_participante: String, //si es estudiante su carnet, si es docente algo que lo identifique
    nombres: String,
	apellidos: String,
	carrera: String,
	email: String,
	telefono: String,
	tipo_participante: String, //estudiante, docente u otro que se considere necesario
	institucion: String
});
