angular.module('congresoApp', ['mainServiceApp'])

.controller('congresoCtrl', ['$scope', '$http', 'mainService', function($scope, $http, mainService){
	$scope.newCongreso= {};
    $scope.congresos= {};    
    $scope.selected = false
    
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

	//Seleccionar Congreso
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
}]);