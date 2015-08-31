app.controller('mainCtrl', ['$scope', function($scope){

}])
app.controller('firstCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.getClass = function (path) {
    console.log(path)
    console.log($location.path())
  if ($location.path().substr(0, path.length) === path) {
    return 'active';
  } else {
    return '';
  }
}
}])
