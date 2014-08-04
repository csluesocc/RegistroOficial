var Persona = require('./modelo/persona');
var Evento = require('./modelo/evento');
var Controller = require ('./controller');

module.exports = function(app) {

	// -------- PERSONAS -------- //
	// devolver todos las Personas
	app.get('/api/persona', Controller.getPersona);
	// Crear una nueva Persona
	app.post('/api/persona', Controller.setPersona);
	// Modificar los datos de una Persona
	app.put('/api/persona/:persona_id', Controller.updatePersona);
	// Borrar una Persona
	app.delete('/api/persona/:persona_id', Controller.removePersona);

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