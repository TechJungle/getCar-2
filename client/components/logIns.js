angular.module('get-car')

.component('logIns', {
	controller: function ($scope, $http){
	  $scope.submit = function(){
      
      $scope.user = {user : $scope.username , password : $scope.password};
        console.log($scope.user + "========")
      $http.post("/logIn", $scope.user).then(function(data){
        console.log(data + "======+++++++++++++=")
        window.location = "../../index.html"
    })
  }
	},
	templateUrl: `
    client/templates/logIns.html
	`
})