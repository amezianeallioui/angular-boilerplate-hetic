(function(){
  'use strict';

  angular.module('demo')
    .controller('MoviesListController', function($scope) {

      $scope.limit = 10;

      // Nom du prochain film
      $scope.newMovie = 'Dikkenek';

      // Liste des films
      $scope.movies = ['fight Club', 'Ali G', 'Cloud Atlas'];

      // Ajoute un film à la liste existante
      $scope.addMovie = function() {

        // On vérifie la longueur de la valeur
        if ($scope.newMovie.length >= 3) {

          // Ajoute à la liste de films
          $scope.movies.push($scope.newMovie);

          // On réinitialise la valeur de newMovie
          $scope.newMovie = '';
        }



      };

    });


}());
