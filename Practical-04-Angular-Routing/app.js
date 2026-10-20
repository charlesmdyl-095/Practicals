var app = angular.module('routingApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'about.html',
      controller: 'AboutController'
    })
    .when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

app.controller('HomeController', function($scope) {
  $scope.message = 'Welcome to the Home Page!';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'This is the About Page.';
});

app.controller('ContactController', function($scope) {
  $scope.message = 'Contact us at: mca@paruluniversity.ac.in';
});
