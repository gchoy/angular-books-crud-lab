angular
  .module('bookApp')
  .controller('booksIndexController',booksIndexController);


booksIndexController.$inject = ['$http'];

function booksIndexController ($http) {
    var vm = this;
    //vm.newBook = {};
    //vm.newBook = {
    //name: 'Viva Hate',
    //artistName: 'Morrissey'
    //};
    vm.books =[];
    //vm.songs=[];


$http({
 method: 'GET',
 url: 'https://super-crud.herokuapp.com/books'
}).then(function successCallback(response) {
  console.log(response);
  vm.books = response.data.books;
}, function errorCallback(response) {
 console.log('There was an error getting the data', response);
});

vm.createBook = function () {
      $http({
        method: 'POST',
        url: 'https://super-crud.herokuapp.com/books',
        data: vm.newBook
      }).then(function successCallback(response) {
        vm.books.push(response.data);
      }, function errorCallback(response) {
        console.log('There was an error posting the data', response);
      });
  }
  vm.deleteBook = function(book){
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + book._id
    }).then(function successCallback(json) {
      var index = vm.books.indexOf(book);
      console.log("index is:" + index);
      vm.books.splice(index,1)
    }, function errorCallback(reponse) {
      console.log('There was an error deleting')
  });
  }

  vm.editBook = function (book) {
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/books'+book._id,
        data: book
      }).then(function successCallback(json) {

      }, function errorCallback(response) {
        console.log('There was an error editing the data', response);
      });
    }


}
