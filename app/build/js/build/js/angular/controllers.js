app.controller("mainCtrl",["$scope","$location",function(t,o){t.getClass=function(t){return o.path().substr(0,t.length)===t?"active":""},t.addClass=function(t){return console.log(t),o.path().substr(0,t.length)===t?"potato":""}}]),app.controller("firstCtrl",["$scope","$location",function(t,o){}]);