var myApp = angular.module('myApp');

myApp.provider('Movies',

  function () {
    this.endpoint = null;
    this.setEndpoint = function (endpoint) {
      this.endpoint = endpoint;
    };
    this.$get = function () {
      // TODO: fix $http not defined.
      // return $http({
      //   method: 'GET',
      //   url: this.endpoint
      // })
      // .then(function (res) {
      //   console.log(response);
      //   return res.data;
      // });
      return [
        {title: "The GodMother", year: "2001"},
        {title: "The Frequalizer", year: "2003"},
        {title: "Peaddool", year: "2005"}
      ];
    };
  }
);