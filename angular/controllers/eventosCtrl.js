angular.module('eventosApp', ['mainServiceApp'])

.controller('eventosCtrl', ['$scope', '$http', 'mainService', function($scope, $http, mainService){
	$scope.newEvento = {};
	$scope.eventos = {};
	$scope.selected = false;
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
}]);