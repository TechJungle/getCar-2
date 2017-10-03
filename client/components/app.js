angular.module('get-car')

// Sidebar Component
.component('app', {
	controller: function($scope, $http){
	$scope.logIn;
	this.loog = false;
	$scope.change = function(){
		$scope.logIn = true
		$scope.signUp = false
	}
	$scope.signUp
	$scope.changes = function(){
		$scope.signUp = true
		$scope.logIn = false
	}
	$scope.add
	$scope.addd = function(){
		$scope.add = true
	}
	this.searchTest = [];
	console.log(this.searchTest)
	var that = this;
	$http.get('/data')
	.then(
		function(response){
			// $scope.$ctrl.loog = response.data[1]
			$scope.$ctrl.loog = response.data[response.data.length - 1]
			for (var i=0; i<response.data.length - 1; i++){
				$scope.$ctrl.searchTest.push(response.data[i])
			}
		}, 
		function(response){
			console.log(response)
		})
        setTimeout(function(){ console.log($scope.$ctrl.loog); }, 3000);


	},

	templateUrl: `
	client/templates/app.html
	`
})