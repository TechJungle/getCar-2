var module = angular.module("log",[])

module.controller("loginCtrl",['$scope','$http', function($scope, $http){
	
	$scope.submit = function(){
		$scope.user = {user:$scope.username , password:$scope.password}
		$http.post("/template/logIn", $scope.user).then(function(){
			console.log("success")
		}, function(){
			console.log("error")
		})
	}

}]);



