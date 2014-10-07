angular.module('eventosApp', ['mainServiceApp'])

.controller('eventosCtrl', ['$scope', '$http', 'mainService', '$location',
function($scope, $http, mainService, $location){
	mainService.evento = undefined;	
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
		/*alert("registro");
		console.log($scope.newEvento);*/
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
	$scope.selectEvento = function(evento, accion) {
		if(accion == 'asistencia'){
			alert("Tomar asistencia al evento "+evento.titulo);
		}
		$scope.newEvento = evento;
		$scope.selected = true;
		mainService.evento = {id:evento.id_evento, id_congreso:evento.id_congreso};
	};

	//Agregue funcion para resetear el formulario
	$scope.deselectEvento = function() {
		$scope.newEvento = {};
		$scope.selected = false;

	};

	$scope.irAsistencia = function(id){
		$location.path('#/participantes');
	};

}]);
