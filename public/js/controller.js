var myApp = angular.module('myApp');

myApp.controller('MyController', ['$scope', function ($scope) {
  $scope.myFirstName = 'Ser Kevin of Haus Whyte';
  $scope.myModel = "Ready Player One";
}]);