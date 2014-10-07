angular.module('participantesApp', ['mainServiceApp',])

.controller('participantesCtrl', ['$scope', '$http', 'mainService', '$routeParams',
function($scope, $http, mainService, $routeParams){
	//console.log($routeParams.evento_id);
	if(mainService.evento != undefined){
		$scope.id_evento = mainService.evento.id;
		$scope.id_congreso = mainService.evento.id_congreso;
		//console.log(mainService.evento);
	}

	$scope.newParticipante = {};
	$scope.participantes = {};
	$scope.selected = false;

	/********************************
	 ********* para paginar *********
	 ********************************/
	$scope.count = 0;
	$scope.numPages = 0;
	$scope.elmsPerPage = 0;
	$scope.currentPage = 1;
	/********************************/


	// --------- PARTICIPANTES --------- //
	// Obtenemos todos los datos de la base de datos
	$http.post('/api/participantes').success(function(data, status) {
		//console.log(data, status);
		$scope.participantes = data.participantes;
		$scope.count = data.count;
		$scope.numPages = Math.ceil(data.count/data.limit);
		//console.log($scope.count, $scope.numPages);
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

	/****************************************/
	/********** Tomar asistencia ************/
	$scope.tomarAsistencia = function(participante){
		var params = {
			id_participante:participante.id,
			id_evento:$scope.id_evento,
			id_congreso:$scope.id_congreso
		};
		mainService.post('/api/asistencia', params, function(data, estatus){
			if(data.msj != undefined){
				console.log(data.msj);
				//quitamos al participante de la lista una vez que se le haya tomado asistencia
				var index = $scope.participantes.indexOf(participante);
				if (index > -1) {
					$scope.participantes.splice(index, 1);
				}
			}
			//console.log("asistencia tomada a "+id);
		});
	};
	/******************************************************/
	/*************** Buscar participante ***************/
	$scope.buscarParticipante = function(){
		mainService.post('/api/participantes', {like:$scope.participanteLike}, function(data, estatus){
			$scope.participantes = data.participantes;
			$scope.count = data.count;
			$scope.numPages = Math.ceil(data.count/data.limit);
			$scope.currentPage = 1;
		});
	};

	/******************************************************/
	/*************** funciones para paginar ***************/
	$scope.nextPage = function(){
		if(($scope.currentPage + 1) <= $scope.numPages){
			mainService.post('/api/participantes', {page:($scope.currentPage + 1)}, function(data, estatus){
				$scope.participantes = data.participantes;
				$scope.currentPage+=1;
			});
		}
	};

	$scope.prevPage = function(){
		if(($scope.currentPage - 1) > 0){
			mainService.post('/api/participantes', {page:($scope.currentPage - 1)}, function(data, estatus){
				$scope.participantes = data.participantes;
				$scope.currentPage-=1;
			});
		}
	};

	$scope.goToPage = function(pageNum){
		mainService.post('/api/participantes', {page:pageNum}, function(data, estatus){
			$scope.participantes = data.participantes;
			$scope.currentPage = pageNum;
		});
	};
	/*********************************************************/
}])

.filter('range', function(){
	return function(input, range){
		var range = parseInt(range);
		for(var i=0; i<range; i++)
			input.push(i);

		return input;
	};
});
