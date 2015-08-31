app.directive('headerNav', ['$location', function($location){
  return {
    templateUrl : 'angular/templates/header.html',
    replace : true
  }
}])
app.directive('footer', function(){
  return {
    templateUrl : 'angular/templates/footer.html'
  }
})
