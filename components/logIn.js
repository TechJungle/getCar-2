var module = angular.module("logIn",[]);

module.controller("logInCtrl",['$scope','$http', function($scope, $http){
	
	$scope.submit = function(){
		$scope.user = {user : $scope.username , password : $scope.password};
		console.log($scope.user)
		$http.post("/logIn", $scope.user).then(function(data){
			console.log("success")
		}, function(data){
			console.log("error")
		})
	}

}]);



