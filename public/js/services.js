var myApp = angular.module('myApp');

myApp.service('BookService', BookService);

function BookService () {
  var books = [
    { author: "KYABIN", title: "Doby Mick"},
    { author: "KYABIN", title: "Halvin & Cobbes"},
    { author: "KYABIN", title: "Parry Hotter"}
  ];

  this.getBooks = function () {
    return books;
  };

  this.getBook = function (index) {
    if (index < 0 || index >= books.length) {
      return null;
    }
    return books[index];
  };
}