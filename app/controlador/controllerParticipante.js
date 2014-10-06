var Participante = require('../modelo/participante'),
	Asistencia = require('../modelo/asistencia');

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

//Nota: uso este mismo metodo para buscar y paginar para no escribir mas codigo
exports.getParticipantes = function (req, res){
	var limit = 10, //numero de elementos por pagina
		pageNum = (req.body.page!=undefined)?req.body.page-1:0, //numero de pagina a mostrar
		like = (req.body.like!=undefined)?req.body.like:false, //parametro de busqueda
		query = {}; //query

	if(like){
		//criterios de busqueda
		query = {
			"$or":[
					{'nombres':new RegExp(like.toUpperCase())},
					{'apellidos':new RegExp(like.toUpperCase())},
					{'id_participante':new RegExp('^'+like.toUpperCase())},
					{"email":new RegExp('^'+like.toUpperCase())},
					{"carrera":new RegExp('^'+like.toUpperCase())}
				]
		}
	}

	Participante
		.find(query)
		.limit(limit) //maximo numero a devolver
		.skip(limit*pageNum) //saltar las paginas
		.exec(function(err, participante){
			if(err) throw err;

			if(pageNum==0 || like){
				Participante.count(query, function(err, count){
					if(err) throw err;

					res.json({participantes:participante, count:count, limit:limit});
				});
			}else{
				res.json({participantes:participante});
			}


		});
}

// Guarda un objeto Participante en base de datos
exports.setParticipante = function(req, res) {

		// Creo el objeto Participante
		Participante.create(
			{id_participante: req.body.id_participante, apellidos: req.body.apellidos, nombres: req.body.nombres, carrera: req.body.carrera, email: req.body.email, telefono: req.body.telefono, tipo_participante: req.body.tipo_participante, institucion: req.body.institucion, folder: req.bdy.folder},
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
					{$set:{id_participante: req.body.id_participante, apellidos: req.body.apellidos, nombres: req.body.nombres, carrera: req.body.carrera, email: req.body.email, telefono: req.body.telefono, tipo_participante: req.body.tipo_participante, institucion: req.body.institucion, folder: req.bdy.folder}},
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

exports.tomarAsistencia = function(req, res){
	var id_participante = req.body.id_participante,
		id_evento = req.body.id_evento,
		id_congreso = req.body.id_congreso;

	Asistencia.update(
		{'id_participante':id_participante, 'id_congreso':id_congreso},
		{'$addToSet':{'eventos':id_evento}},
		{'upsert':true},
		function(err, count){
			if(err) throw err;
			console.dir("Modificados", count);
			res.json({'msj':'Asistencia tomada a '+id_participante});
		}
	);
}
