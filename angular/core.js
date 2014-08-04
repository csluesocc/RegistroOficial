angular.module('MainApp', [])


function mainController($scope, $http) {
	$scope.newPersona = {};
	$scope.personas = {};
	$scope.newEvento = {};
	$scope.eventos = {};
	$scope.selected = false;

	// --------- PERSONAS --------- //
	// Obtenemos todos los datos de la base de datos
	$http.get('/api/persona').success(function(data) {
		$scope.personas = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a una persona
	$scope.registrarPersona = function() {
		$http.post('/api/persona', $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarPersona = function(newPersona) {
		$http.put('/api/persona/' + $scope.newPersona._id, $scope.newPersona)
		.success(function(data) {
				$scope.newPersona = {}; // Borramos los datos del formulario
				$scope.personas = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarPersona = function(newPersona) {
		$http.delete('/api/persona/' + $scope.newPersona._id)
		.success(function(data) {
			$scope.newPersona = {};
			$scope.personas = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectPerson = function(persona) {
		$scope.newPersona = persona;
		$scope.selected = true;
		console.log($scope.newPersona, $scope.selected);
	};

	//Agregue funcion para resetear el formulario
	$scope.deselectPerson = function() {
		$scope.newPersona = {};
		$scope.selected = false;
		
	}

		// --------- EVENTOS --------- //
	// Obtenemos todos los datos de la base de datos
	$http.get('/api/evento').success(function(data) {
		$scope.eventos = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	// Función para registrar a una evento
	$scope.registrarEvento = function() {
		$http.post('/api/evento', $scope.newEvento)
		.success(function(data) {
				$scope.newEvento = {}; // Borramos los datos del formulario
				$scope.eventos = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una evento
	$scope.modificarEvento = function(newEvento) {
		$http.put('/api/evento/' + $scope.newEvento._id, $scope.newEvento)
		.success(function(data) {
				$scope.newEvento = {}; // Borramos los datos del formulario
				$scope.eventos = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto evento conocido su id
	$scope.borrarEvento = function(newEvento) {
		$http.delete('/api/evento/' + $scope.newEvento._id)
		.success(function(data) {
			$scope.newEvento = {};
			$scope.eventos = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectEvent = function(evento) {
		$scope.newEvento = evento;
		$scope.selected = true;
		console.log($scope.newEvento, $scope.selected);
	};

	//Agregue funcion para resetear el formulario
	$scope.deselectEvento = function() {
		$scope.newEvento = {};
		$scope.selected = false;
		
	}

}