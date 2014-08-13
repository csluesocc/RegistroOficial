var Participante = require('../modelo/participante');

var docsPerPage = 15;
// -------- Participantes -------- //

/* Obtiene todos los objetos Participante de la base de datos
exports.getParticipante = function (req, res){
	Participante.find(
		function(err, participante) {
			if (err) 
				res.send(err)
			res.json(participante);		
		}
	);
} */

exports.getParticipantePaginado = function (req, res){
	Participante.findPaginated({}, 
		function (err, participante) {
    		if (err) throw err;
    		//console.log(participante);
    		res.json(participante);		
		}, docsPerPage/*, anchorId*/
	); // pagination options go here
}

// Guarda un objeto Participante en base de datos
exports.setParticipante = function(req, res) {

		// Creo el objeto Participante
		Participante.create(
			{id_participante: req.body.id_participante, apellidos: req.body.apellidos, nombres: req.body.nombres, carrera: req.body.carrera, email: req.body.email, telefono: req.body.telefono, tipo_participante: req.body.tipo_participante, institucion: req.body.institucion},
			function(err, participante) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las Participantes tras crear una de ellas
				Participante.find(function(err, participante) {
				 	if (err)
				 		res.send(err)
				 	res.json(participante);
				});
			});

	}

// Modificamos un objeto Participante de la base de datos
exports.updateParticipante = function(req, res){
	Participante.update( {_id : req.params.id_participante},
					{$set:{id_participante: req.body.id_participante, apellidos: req.body.apellidos, nombres: req.body.nombres, carrera: req.body.carrera, email: req.body.email, telefono: req.body.telefono, tipo_participante: req.body.tipo_participante, institucion: req.body.institucion}},
					function(err, participante) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las Participantes tras crear una de ellas
				Participante.find(function(err, participante) {
				 	if (err)
				 		res.send(err)
				 	res.json(participante);
				});
			});
	}

// Elimino un objeto Participante de la base de Datos
exports.removeParticipante = function(req, res) {
	Participante.remove({_id : req.params.id_participante}, function(err, participante) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas las Participantes tras borrar una de ellas
			Participante.find(function(err, participante) {
				if (err)
					res.send(err)
				res.json(participante);
			});
		});
}