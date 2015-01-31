var Evento = require('../modelo/evento');

// -------- EVENTOS -------- //

// Obtiene todos los objetos Evento de la base de datos
exports.getEvento = function (req, res){
	Evento.find(
		function(err, eventos) {
			if (err) res.send(err);
			res.json(eventos); // devuelve todos los las Eventos en JSON
		}
	);
}

// Guarda un objeto Evento en la base de datos
exports.setEvento = function(req, res) {
		// Creo el objeto Evento
		var insert = {
			titulo:req.body.titulo,
			ponente: req.body.ponente,
			lugar:req.body.lugar,
			tipo: req.body.tipo,
			fecha:req.body.fecha,
			hora:req.body.hora,
			estado:req.body.estado,
			ingenieria: req.body.ingenieria,
			id_congreso:"ING2014", //aca debe cambiarse segun sea el congreso
			asistencia:req.body.asistencia
		};
		Evento
			.find({},{'id_evento':1})
			.sort({'id_evento':-1})
			.limit(1)
			.exec(function(err, evento){
				if(err) throw err;

				if(evento != undefined){
					insert.id_evento = parseInt(evento[0].id_evento) + 1;
				}else{
					insert.id_evento = 1;
				}

				Evento.create(insert, function(err, evento) {
					if (err) res.send(err);

					// Obtine y devuelve todos los eventos tras crear uno de ellos
					Evento.find(function(err, evento) {
						if (err)
							res.send(err)
						res.json(evento);
					});
				});
			});
}

// Modificamos un objeto Evento de la base de datos
exports.updateEvento = function(req, res){
	Evento.update( {_id : req.params.evento_id},
					{$set:{titulo:req.body.titulo,ponente: req.body.ponente, lugar: req.body.lugar, tipo:req.body.tipo, fecha:req.body.fecha, hora:req.body.hora, estado:req.body.estado, ingenieria: req.body.ingenieria,asistencia:req.body.asistencia}},
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
