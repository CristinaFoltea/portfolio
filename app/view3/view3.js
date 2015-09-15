app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', ['$scope', function($scope) {
  $scope.page ="portfolio"
  $scope.links = [
    {
    href:'https://safe-escarpment-9469.herokuapp.com/',
    src : 'build/img/explore.jpg',
    name :'Explorer'
    },
    {
    href:'http://development.reddit-g8.divshot.io',
    src : 'build/img/reddit.jpg',
    name : 'Reddit Clone'
    },
    {
      href : 'https://protected-shelf-4054.herokuapp.com',
      src : 'build/img/movie.jpg',
      name : 'Movie Rating'
    },
    {
      href : 'https://pacific-ravine-9313.herokuapp.com/',
      src : 'build/img/tic.jpg',
      name : 'Tic Tac Toe'
    }]
}]);
