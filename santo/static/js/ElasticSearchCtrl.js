(function() {
  'use strict';
  var app, dependencies;

  dependencies = ['ngResource', 'myApp.services'];

  app = angular.module('elasticsearch', dependencies);

  app.controller('ElasticSearchCtrl', [
    '$scope', 'ElasticSearchQuery', '$location', function($scope, ElasticSearchQuery, $location) {
      $scope.onKeyUpSendTerm = function() {
        $scope.jsonTerm = {
          query: {
            term: {
              'colonia.autocomplete': $('#term').val()
            }
          },
          facets: {
            colonia: {
              terms: {
                field: 'colonia'
              }
            }
          }
        };
        ElasticSearchQuery.save({}, $scope.jsonTerm, (function(response) {
          console.log('Success:' + JSON.stringify(response));
          $scope.jsonResponse = response;
        }), function(errorResponse) {
          console.log('Error:' + JSON.stringify(errorResponse));
        });
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=ElasticSearchCtrl.js.map
