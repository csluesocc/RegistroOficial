angular.module('mainApp',
		[
			'chieffancypants.loadingBar',
			'ngAnimate',
			'ngRoute',
			'eventosApp',
			'participantesApp',
			'congresoApp'
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
}]);
