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
    name :'Explorer',
    disc : 'Discover travel destinations based on budget'
    },
    {
    href:'http://development.reddit-g8.divshot.io',
    src : 'build/img/reddit.jpg',
    name : 'Reddit Clone',
    disc : "one day app with AngularJs"
    },
    {
      href : 'https://protected-shelf-4054.herokuapp.com',
      src : 'build/img/movie.jpg',
      name : 'Movie Rating',
      disc : "Full Crud by hand Homework assesment"
    },
    {
      href : 'http://development.g8-teashopping.divshot.io',
      src : 'build/img/tea.png',
      name : 'Tea Store',
      disc : "AngularJs homework assesment"
    },
    {
      href : 'https://pacific-ravine-9313.herokuapp.com/',
      src : 'build/img/tic.jpg',
      name : 'Tic Tac Toe',
      disc : "First exposure to JavaScript"
    }]
}]);
