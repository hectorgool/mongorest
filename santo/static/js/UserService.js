(function(){


	'use strict';
 
	var app = angular.module('user.services', []);

	app.factory('UserFactory', function ($resource) {
		return $resource('api/users/', {
			query: { method: 'GET', isArray: true },
			save: { method: 'POST', isArray: true } 
		})
	});		


})();