(function(){


  'use strict';

  var app = angular.module('user.controllers', []);
  
  app.controller('UserController', ['$scope', 'UserFactory', 


    function ($scope, UserFactory) {

      $scope.users = null;

      UserFactory.query( function( jsonArray ){
        console.log( jsonArray );
        $scope.users = jsonArray;
      });   
      
    }
    
  ]);


})();