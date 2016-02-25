var myApp = angular.module('myApp');

myApp.controller('MyController', [
  '$scope',
  'mainCharacter',
  'characterVersionFactory',
  function ($scope, mainCharacter, characterVersionFactory) {
    $scope.myFirstName = 'Ser Kevin of Haus Whyte';
    $scope.myModel = "Ready Player One";
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = characterVersionFactory;
  }
]);