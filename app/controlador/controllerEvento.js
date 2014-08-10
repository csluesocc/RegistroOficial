var Evento = require('../modelo/evento');

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
