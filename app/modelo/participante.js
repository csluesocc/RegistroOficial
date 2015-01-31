var mongoose = require('mongoose'),
	esquema = mongoose.Schema;


var esquemaParticipante = new esquema({
	id_participante: String, //si es estudiante su carnet, si es docente algo que lo identifique
    nombres: String,
	apellidos: String,
	carrera: String,
	email: String,
	telefono: String,
	tipo_participante: String, //estudiante, docente u otro que se considere necesario
	institucion: String,
    folder:String

});

//mongoosePages.anchor(esquemaParticipante); // makes the findPaginated() method available

module.exports = mongoose.model('participantes', esquemaParticipante);
