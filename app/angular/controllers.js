app.controller('mainCtrl', ['$scope', '$location', function($scope, $location){
    $scope.getClass = function (path) {
    if ($location.path().substr(0, path.length) === path) {
      return 'active';
    } else {
      return '';
    }
  }
  $scope.addClass = function(path) {
    console.log(path)
    if ($location.path().substr(0, path.length) === path) {
      return true;
    } else {
      return false;
    }
  }
}])
app.controller('firstCtrl', ['$scope', '$location', function($scope, $location) {
}])
