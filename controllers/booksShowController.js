angular
  .module('bookApp')
  .controller('booksShowController', booksShowController);

booksShowController.$inject = ['$http', '$routeParams'];

function booksShowController ($http, $routeParams) {
  var vm = this;
  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.book = json.data.books;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  
}
