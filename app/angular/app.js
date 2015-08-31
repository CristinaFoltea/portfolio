var app = angular.module('myApp', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}])
