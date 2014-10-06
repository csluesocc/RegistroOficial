angular.module('mainServiceApp', [])

.factory('mainService', ['$http', function($http){
	var service = {
		evento: undefined,

		post:function(url, params, callback){
			$http.post(url, params)
			.success(callback)
			.error(function(d, s){
				console.log('Error:'+d, s);
			});
		},

		get:function(url, params, callback){
			$http.get(url, params)
			.success(callback)
			.error(function(d, s){
				console.log('Error:'+d, s);
			});
		}
	}

	return service;
}]);
