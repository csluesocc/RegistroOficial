var Participante = require('./modelo/participante'),
	Evento = require('./modelo/evento');

// -------- Participantes -------- //

// Obtiene todos los objetos Participante de la base de datos
exports.getParticipante = function (req, res){
	Participante.find(
		function(err, participante) {
			if (err) 
				res.send(err)
					res.json(participante); // devuelve todas los paticipantes en JSON
				}
			);
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

// -------- EVENTOS -------- //

// Obtiene todos los objetos Evento de la base de datos
exports.getEvento = function (req, res){
	Evento.find(
		function(err, evento) {
			if (err)
				res.send(err)
					res.json(evento); // devuelve todos los las Eventos en JSON
				}
			);
}

// Guarda un objeto Evento en la base de datos
exports.setEvento = function(req, res) {

		// Creo el objeto Evento
		Evento.create(
			{nombreEvento : req.body.nombreEvento,ponente: req.body.ponente,lugar:req.body.lugar, tipo: req.body.tipo, fecha:req.body.fecha, hora:req.body.hora, estado:req.body.estado},
			function(err, evento) {
				if (err)
					res.send(err);

				// Obtine y devuelve todos los eventos tras crear uno de ellos
				Evento.find(function(err, evento) {
				 	if (err)
				 		res.send(err)
				 	res.json(evento);
				});
			});

	}

// Modificamos un objeto Evento de la base de datos
exports.updateEvento = function(req, res){
	Evento.update( {_id : req.params.evento_id},
					{$set:{nombreEvento: req.body.nombreEvento,	ponente: req.body.ponente, lugar: req.body.lugar, tipo:req.body.tipo, fecha:req.body.fecha, hora:req.body.hora, estado:req.body.estado}},
					function(err, evento) {
						if (err)
							res.send(err);

				// Obtine y devuelve todos los eventos tras crear uno de ellos
				Evento.find(function(err, evento) {
				 	if (err)
				 		res.send(err)
				 	res.json(evento);
				});
			});
	}

// Elimino un objeto Evento de la base de Datos
exports.removeEvento = function(req, res) {
	Evento.remove({_id : req.params.evento_id}, function(err, evento) {
		if (err)
			res.send(err);

			// Obtine y devuelve todos los eventos tras borrar uno de ellos
			Evento.find(function(err, evento) {
				if (err)
					res.send(err)
				res.json(evento);
			});
		});
}
