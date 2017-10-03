angular.module('get-car')

// Sidebar Component
.component('headbar', {
	bindings:{
		loog: "<"
	},

controller : function($scope) {

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
},

	templateUrl: `
    client/templates/headbar.html
	`
})