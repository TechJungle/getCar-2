angular.module('get-car')

.component('logIns', {
	controller: function ($scope, $http){
	  $scope.submit = function(){
      
      $scope.user = {user : $scope.username , password : $scope.password};
        console.log($scope.user)
      $http.post("/logIn", $scope.user).then(function(data){
        $scope.$parent.$ctrl.loog = true;
        $scope.$parent.logIn = false;
    })
  }
	},
	templateUrl: `
    client/templates/logIns.html
	`
})