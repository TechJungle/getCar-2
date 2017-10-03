angular.module('get-car')

// Sidebar Component
.component('headbar', {
	bindings:{
		loog: "<"
	},

controller : function($scope, $http) {

	console.log(this.loog + "========")
	
	$scope.log = function () {
		$scope.$parent.change()
	}

	$scope.sign = function () {
		$scope.$parent.changes()

		console.log($scope.$parent.signUp)
	}
	$scope.reset = function() {
		$scope.$parent.signUp = null
		$scope.$parent.logIn = null
		$scope.$parent.add = null
	}
	$scope.add = function () {
		$scope.$parent.addd()
	}
	this.out = function(){
			$http.get('/logout').then(function(data){
				window.location = "../../index.html"
			})
		}
},

	templateUrl: `
    client/templates/headbar.html
	`
})