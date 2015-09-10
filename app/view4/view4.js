app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$http', function($scope, $http) {
  $scope.page ="contact"
  $scope.submit = function(){
    $http.post('https://www.googleapis.com/gmail/v1/users/crisswear@gamil.com/messages/send')
  }
}]);
