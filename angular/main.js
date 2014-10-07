angular.module('mainApp',
		[
			'chieffancypants.loadingBar',
			'ngAnimate',
			'ngRoute',
			'eventosApp',
			'participantesApp',
			'congresoApp',
			'mainServiceApp'
		]
)
.run(['$route', function($route)  {
  $route.reload();
}])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.
  		when('/eventos', {
        	templateUrl: 'views/eventos.html',
        	controller: 'congresoCtrl'
      	}).
      	when('/participantes', {
        	templateUrl: 'views/participantes.html',
        	controller: 'participantesCtrl'
		}).
		/*when('/patrocinadores', {
			templateUrl: 'views/patrocinadores.html',
			controller: 'PhoneDetailCtrl'
		}).*/
      	otherwise({
        	redirectTo: '/eventos'
      	});
}])
.controller('tabsCtrl', ['$scope', '$location', 'mainService', function($scope, $location, mainService){
	$scope.$watch(function(){	
		return $location.path();
	}, function(n, o){
		$scope.tabsFalse();
		switch(n){
			case '/eventos':
				$scope.tabEvento = true;
				break;
			case '/participantes':
				$scope.tabParticipante = true;
				break;
			default:
				$scope.tabEvento = true;
		}
	}, true);

	$scope.tabsFalse = function(){
		$scope.tabEvento = false;
		$scope.tabParticipante = false;
		$scope.tabAsistencia = false;
		$scope.tabCongreso = false;
	};
}]);
