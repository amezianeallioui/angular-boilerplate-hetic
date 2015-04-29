(function() {
  'use strict';

  angular.module('demo')
    .filter('camelize', function() {
      return function(str) {

        // On vérifie que c'est une string
        if (typeof str !== 'string') {
          return str;
        }

        return str.substr(0, 1).toUpperCase() + str.substr(1);

      }
    });

}());
