(function(){
  'use strict';

  angular.module('demo')
    .controller('MoviesDetailController', function($scope, $routeParams, Movies) {
      console.log('in MoviesDetailController');

      // On envoie à la vue la valeur de :movie dans l'URL
      $scope.movie = $routeParams.id;

      Movies.one($routeParams.id).get()
        .then(function successCallback(response) {

          $scope.movie = response;

        }, function errorCallback(response) {
          console.log('error', response);

        })


    });

}());
