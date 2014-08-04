var Persona = require('./modelo/persona');
var Evento = require('./modelo/evento');

// -------- PERSONAS -------- //

// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
	Persona.find(
		function(err, persona) {
			if (err)
				res.send(err)
					res.json(persona); // devuelve todas las Personas en JSON		
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

		// Creo el objeto Persona
		Persona.create(
			{carnet : req.body.carnet,apellido: req.body.apellido,nombre:req.body.nombre, carrera: req.body.carrera}, 
			function(err, persona) {
				if (err)
					res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});

	}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{carnet: req.body.carnet,	apellido: req.body.apellido, nombre: req.body.nombre, carrera:req.body.carrera}}, 
					function(err, persona) {
						if (err)
							res.send(err);

				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}

// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);

			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
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
