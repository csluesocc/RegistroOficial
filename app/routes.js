var Participante = require('./modelo/participante'),
	Evento = require('./modelo/evento'),
	ControllerParticipante = require ('./controlador/controllerParticipante'),
	ControllerEvento = require ('./controlador/controllerEvento');

module.exports = function(app) {

	// -------- Participantes -------- //
	// devolver todos las Participantes
	//app.get('/api/participante', ControllerParticipante.getParticipante);
	app.get('/api/participante', ControllerParticipante.getParticipantePaginado);
	// Crear una nueva Participante
	app.post('/api/participante', ControllerParticipante.setParticipante);
	// Modificar los datos de una Participante
	app.put('/api/participante/:id_participante', ControllerParticipante.updateParticipante);
	// Borrar una Participante
	app.delete('/api/participante/:id_participante', ControllerParticipante.removeParticipante);

	// -------- EVENTOS -------- //
	// devolver todos los eventos
	app.get('/api/evento', ControllerEvento.getEvento);
	// Crear un nuevo evento
	app.post('/api/evento', ControllerEvento.setEvento);
	// Modificar los datos de un evento
	app.put('/api/evento/:evento_id', ControllerEvento.updateEvento);
	// Borrar un evento
	app.delete('/api/evento/:evento_id', ControllerEvento.removeEvento);

	// -------- PAGINACION -------- //
	// devolver todos los eventos

	// -------- APLICATION -------- //
	app.get('*', function(req, res) {
		res.sendfile('./angular/index.html'); // Carga única de la vista
	});
};
