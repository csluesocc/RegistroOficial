var Participante = require('./modelo/participante');
var Evento = require('./modelo/evento');
var Controller = require ('./controller');

module.exports = function(app) {

	// -------- Participantes -------- //
	// devolver todos las Participantes
	app.get('/api/participante', Controller.getParticipante);
	// Crear una nueva Participante
	app.post('/api/participante', Controller.setParticipante);
	// Modificar los datos de una Participante
	app.put('/api/participante/:id_participante', Controller.updateParticipante);
	// Borrar una Participante
	app.delete('/api/participante/:id_participante', Controller.removeParticipante);

	// -------- EVENTOS -------- //
	// devolver todos los eventos
	app.get('/api/evento', Controller.getEvento);
	// Crear un nuevo evento
	app.post('/api/evento', Controller.setEvento);
	// Modificar los datos de un evento
	app.put('/api/evento/:evento_id', Controller.updateEvento);
	// Borrar un evento
	app.delete('/api/evento/:evento_id', Controller.removeEvento);

	// -------- APLICATION -------- //
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
