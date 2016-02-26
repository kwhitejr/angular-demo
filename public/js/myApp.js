angular.module('myApp', ['ngRoute', 'ngAnimate']);

var myApp = angular.module('myApp');

myApp
  .config(function ($routeProvider, MoviesProvider) {
    MoviesProvider.setEndpoint('/api');


    $routeProvider
      .when('/', {
        templateUrl: '/templates/intro.html',
        controller: 'MyController'
      })
      .when('/books', {
        templateUrl: 'templates/books.html',
        controller: 'MyController'
      })
      .when('/movies', {
        templateUrl: 'templates/movies.html',
        controller: 'MyController'
      })
      .when('/404', {
        templateUrl: '/templates/404.html'
      })
      .otherwise('/404');

  })
  .run([
    '$rootScope',
    'APP_VERSION',
    function ($rootScope, APP_VERSION) {
      // Start Application
      console.log("Pyuuy pyuu");
      $rootScope.version = APP_VERSION;
    }
  ]);

// myApp.controller('MyController', ['$scope', function ($scope) {
//   $scope.myFirstName = 'Ser Kevin of Haus Whyte';
//   $scope.myModel = "Ready Player One";
// }]);