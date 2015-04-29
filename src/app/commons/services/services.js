(function() {
  'use strict';

  angular.module('demo')
    .factory('tools', function() {

      // On initialise l'objet public, qui symbolise le service
      var output = {};

      // On définir la fonction
      output.sum = function (a, b) {
        return a + b;
      };

      // On retourne l'objet public
      return output;

    })
    .factory('Movies', function(Restangular) {

      return Restangular.service('movies');
    });
}());
