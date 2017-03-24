console.log("app.js loaded");
angular
  .module('bookApp', ['ngRoute'])
  .config(config)
  //.controller('booksIndexController', booksIndexController)
  //.controller('booksShowController', booksIndexController);



function config( $routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../templates/books-index.html',
          controller: 'booksIndexController',
          controllerAs: 'booksIndexCtrl'
        })

       .when('/books/:id', {
        templateUrl: '../templates/books-show.html',
        controller: 'booksShowController',
        controllerAs: 'booksShowCtrl'
      });

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
