var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'characterVersionFactory',
  'BookService',
  function ($scope, mainCharacter, characterVersionFactory, BookService) {
    $scope.myFirstName = 'Ser Kevin of Haus Whyte';
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
    $scope.books = BookService.getBooks();
  }
]);