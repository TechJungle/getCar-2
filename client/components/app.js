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
			console.log($scope.$ctrl.searchTest)
			console.log(this.searchTest)
			for (var i=0; i<response.data.length; i++){
				$scope.$ctrl.searchTest.push(response.data[i])
			}
		}, 
		function(response){
			console.log(response)
		})
        setTimeout(function(){ console.log(this.searchTest); }, 3000);

	},

	templateUrl: `
	client/templates/app.html
	`
})