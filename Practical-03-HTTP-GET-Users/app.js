var app = angular.module('usersApp', []);

app.controller('UsersController', function($scope, $http) {
  $scope.users = [];

  $scope.getUsers = function() {
    $http.get('https://jsonplaceholder.typicode.com/users')
      .then(function(response) {
        $scope.users = response.data;
      });
  };

  $scope.getUsers();
});
