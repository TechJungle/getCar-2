var SignUpApp = angular.module('SignUpApp', []);

	SignUpApp.controller("signUpController",  function($scope, $http){
	
		$scope.addUser=function(){
			$scope.newUse = {
				name: $scope.newUser.name,
				password: $scope.newUser.password,
				numberPhon: parseInt($scope.newUser.numberPhon),
				email: $scope.newUser.email
			};

			$scope.newUser.name = "";
			$scope.newUser.password = "";
			$scope.newUser.numberPhon = "";
			$scope.newUser.email = "";

			$http.post("/signUp", $scope.newUse).then(function(data){
				console.log("success post")
			}, function(data){
				console.log("error??")
			}) 
		}
	})
