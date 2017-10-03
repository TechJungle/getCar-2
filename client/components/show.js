angular.module('get-car')

// Sidebar Component
.component('show', {
bindings: {
	car: "<"
},

controller:function($scope){
	console.log($scope.$ctrl.car + '===============')
},
	templateUrl: `
	client/templates/show.html
	`
})