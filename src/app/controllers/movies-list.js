(function(){
  'use strict';

  angular.module('demo')
    .controller('MoviesListController', function($scope, Movies) {

      $scope.limit = 1000;

      Movies.getList()
        .then(function succesCallback(movies) {

          $scope.movies = movies;

        }, function errorCallback(response) {
          console.log(response);

        });

      // Nom du prochain film
      $scope.newMovie = {};

      //// Ajoute un film à la liste existante
      $scope.addMovie = function() {

        // On vérifie la longueur de la valeur
        if ($scope.addMovieForm.$valid) {

          Movies.post($scope.newMovie)
            .then(function successCallback(response) {
              console.log('success', response);

              // Ajoute à la liste de films
              $scope.movies.push(response);

              // On réinitialise la valeur de newMovie
              $scope.newMovie = {};

            }, function errorCallback(response) {
              console.log('error', response);

            });
        }
      };

      // Exemple d'un watcher : chaque fois que la
      // valeur de $scope.movies change, on exécute
      // la fonction
      $scope.$watch(function() {
        return $scope.movies;
      }, function() {
        console.log('$scope.movies changed');

      });

    });


}());
