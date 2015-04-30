(function(){
  'use strict';

  angular.module('demo')
    .controller('MoviesDetailController', function($scope, $routeParams, Movies) {

      Movies.one($routeParams.id).get()
        .then(function successCallback(movie) {

          // On envoie à la vue la valeur reçue par le serveur
          $scope.movie = movie;

        }, function errorCallback(response) {
          console.log('error', response);

        });


    });

}());
