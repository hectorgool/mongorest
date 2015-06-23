(function() {
  'use strict';
  var app, dependencies;

  app = void 0;

  dependencies = void 0;

  dependencies = ['ngResource'];

  app = angular.module('myApp.services', dependencies);

  app.factory('ElasticSearchQuery', [
    '$resource', function($resource) {
      return $resource('http://localhost:9000/term', {}, {
        get: {
          method: 'GET',
          cache: false,
          isArray: true
        },
        query: {
          method: 'POST',
          cache: false,
          isArray: false
        }
      });
    }
  ]);

  app.factory('ElasticSearchPost', [
    '$resource', function($resource) {
      return $resource('/term', {}, {
        get: {
          method: 'GET',
          cache: false,
          isArray: false
        },
        save: {
          method: 'POST',
          cache: false,
          isArray: false
        },
        update: {
          method: 'PUT',
          cache: false,
          isArray: false
        },
        "delete": {
          method: 'DELETE',
          cache: false,
          isArray: false
        }
      });
    }
  ]);

}).call(this);

//# sourceMappingURL=ElasticSearchServices.js.map
