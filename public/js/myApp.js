console.log('hwat pu eomyh');

angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
  .config(function (MoviesProvider) {
    MoviesProvider.setEndpoint('/api');
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