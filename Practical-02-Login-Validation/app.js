var app = angular.module('loginApp', []);

app.controller('LoginController', function($scope) {
  $scope.user = { email: '', password: '' };
  $scope.message = '';

  $scope.login = function() {
    $scope.message = 'Login successful for ' + $scope.user.email;
  };
});
