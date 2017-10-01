var home = angular.module('home', []);

	home.controller('homeController', function($scope, $http) {
		$scope.goTo=function(){
			console.log("maram")
			$http.post("/","").then(function(data){
				console.log("success")
			},function(data){
				console.log("error")
			})
		} 			
	});