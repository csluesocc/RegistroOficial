angular.module('MainApp', [])


function mainController($scope, $http) {
	$scope.newParticipante = {};
	$scope.participantes = {};
	$scope.newEvento = {};
	$scope.eventos = {};
	$scope.newCongreso= {};
    $scope.congresos= {};
	$scope.selected = false;

	// --------- PARTICIPANTES --------- //
	// Obtenemos todos los datos de la base de datos
	$http.get('/api/participante').success(function(data, status) {
		console.log(data, status);
		$scope.participantes = data;
	}).error(function(data, status) {
		console.log('Error: ' + data, status);
	});


	// Función para registrar a una persona
	$scope.registrarParticipante = function() {
		$http.post('/api/participante', $scope.newParticipante)
		.success(function(data) {
				$scope.newParticipante = {}; // Borramos los datos del formulario
				$scope.participantes = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una persona
	$scope.modificarParticipante = function(newParticipante) {
		$http.put('/api/participante/' + $scope.newParticipante._id, $scope.newParticipante)
		.success(function(data) {
				$scope.newParticipante = {}; // Borramos los datos del formulario
				$scope.participantes = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función que borra un objeto persona conocido su id
	$scope.borrarParticipante = function(newParticipante) {
		$http.delete('/api/participante/' + $scope.newParticipante._id)
		.success(function(data) {
			$scope.newParticipante = {};
			$scope.participantes = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectParticipante = function(participante) {
		$scope.newParticipante = participante;
		$scope.selected = true;
		console.log($scope.newParticipante, $scope.selected);
	};

	//Agregue funcion para resetear el formulario
	$scope.deselectParticipante = function() {
		$scope.newParticipante = {};
		$scope.selected = false;
	};

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
	$scope.selectEvento = function(evento) {
		$scope.newEvento = evento;
		$scope.selected = true;
		console.log($scope.newEvento, $scope.selected);
	};

	//Agregue funcion para resetear el formulario
	$scope.deselectEvento = function() {
		$scope.newEvento = {};
		$scope.selected = false;

	};
 

//------ Patrocinadores-------------//

$http.get('/api/congreso').success(function(data) {
		$scope.congresos = data;
	})
	.error(function(data) {
		console.log('Error: ' + data);
	});


	$scope.registrarCongreso = function() {
		$http.post('/api/congreso', $scope.newCongreso)
		.success(function(data) {
				$scope.newCongreso = {}; // Borramos los datos del formulario
				$scope.congresos = data;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para editar los datos de una evento
	$scope.modificarCongreso = function(newCongreso) {
		$http.put('/api/congreso/' + $scope.newCongreso._id, $scope.newCongreso)
		.success(function(data) {
				$scope.newCongreso = {}; // Borramos los datos del formulario
				$scope.congresos = data;
				$scope.selected = false;
			})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};
 //jajaj elimine la opcion de poder borrar datos en esta parte XD
	// Función que borra un objeto evento conocido su id
	$scope.borrarCongreso = function(newCongreso) {
		$http.delete('/api/congreso/' + $scope.newCongreso._id)
		.success(function(data) {
			$scope.newCongreso = {};
			$scope.congresos = data;
			$scope.selected = false;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// Función para coger el objeto seleccionado en la tabla
	$scope.selectCongreso = function(congreso) {
		$scope.newCongreso = congreso;
		$scope.selected = true;
		console.log($scope.newCongreso, $scope.selected);
	};

	//Agregue funcion para resetear el formulario
	$scope.deselectCongreso = function() {
		$scope.newCongreso = {};
		$scope.selected = false;

	};

}

 

