app.controller('mainCtrl', ['$scope', '$location', function($scope, $location){
    $scope.getClass = function (path) {
    if ($location.path().substr(0, path.length) === path) {
      return 'active';
    } else {
      return '';
    }
  }
  $scope.template ='angular/templates/links.html'
  console.log($location.url())
}])

app.controller('firstCtrl', ['$scope', '$location', function($scope, $location) {
}])
