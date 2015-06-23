(function(){

  'use strict';


  var dependencies = [
    'ngResource', 'ngRoute', 'elasticsearch',
    'user.controllers', 'user.services'
  ];

  var app = angular.module('myApp', dependencies, function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  app.config( function( $routeProvider ){   

    $routeProvider.when('/', {
      templateUrl: '/static/partials/view1.html',
      controller: 'ElasticSearchCtrl'
    });   

    $routeProvider.when('/users', {
      templateUrl: '/static/partials/users.html',
      controller: 'UserController'
    });

    $routeProvider.when('/signup', {
      templateUrl: '/static/partials/view2.html'
    });

    $routeProvider.otherwise({
      templateUrl:'/static/partials/404.html'
    });

  }); 

})();
