(function(){
  'use strict';

  angular.module('demo', ['ngRoute', 'restangular', 'ngAnimate'])
    .config(function($routeProvider, $locationProvider, RestangularProvider) {

      // On configure RestangularProvider
      RestangularProvider.setBaseUrl('http://www.urbex-connexion.com:1338/');

      // On définit ici nos routes
      $routeProvider
        .when('/movies', {
          templateUrl: 'partials/movies-list.html',
          controller: 'MoviesListController'
        })
        .when('/movies/:id', {
          templateUrl: 'partials/movies-detail.html',
          controller: 'MoviesDetailController'
        })
        .otherwise('/movies');

      // Permet de travailler sans le '#' dans l'URL
      $locationProvider.html5Mode(true);

    });

}());
