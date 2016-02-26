var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'characterVersionFactory',
  'BookService',
  'Movies',
  function ($scope, mainCharacter, characterVersionFactory, BookService, Movies) {
    $scope.myFirstName = 'Ser Kevin of Haus Whyte';
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
    $scope.books = BookService.getBooks();
    $scope.BookService = BookService;
    $scope.movies = [];
    Movies.get().then(function (res) {
      $scope.movies = res.data;
    });
  }
]);