var Congreso = require('../modelo/congreso');


// Obtiene todos los objetos Evento de la base de datos
exports.getCongreso = function (req, res){
	Congreso.find(
		function(err, congreso) {
			if (err)
				res.send(err)
					res.json(congreso); // devuelve todos los las Eventos en JSON
				}
			);
}

// Guarda un objeto patrocinador en la base de datos
exports.setCongreso = function(req, res) {

		// Creo el objeto Evento
		Congreso.create(
			{id_congreso: req.body.id_congreso, fecha:req.body.fecha, patrocinador: req.body.patrocinador,tipo: req.body.tipo, monto:req.body.monto},
			function(err, congreso) {
				if (err)
					res.send(err);

				// Obtine y devuelve todos los eventos tras crear uno de ellos
				Congreso.find(function(err, congreso) {
				 	if (err)
				 		res.send(err)
				 	res.json(congreso);
				});
			});

	}

// Modificamos un objeto Evento de la base de datos
exports.updateCongreso = function(req, res){
	Congreso.update( {_id : req.params.congreso_id},
					{$set:{fecha:req.body.fecha, patrocinador: req.body.patrocinador,tipo: req.body.tipo, monto:req.body.monto}},
					function(err, congreso) {
						if (err)
							res.send(err);

				// Obtine y devuelve todos los eventos tras crear uno de ellos
				Congreso.find(function(err, congreso) {
				 	if (err)
				 		res.send(err)
				 	res.json(congreso);
				});
			});
	}

