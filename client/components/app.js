angular.module('get-car')

// Sidebar Component
.component('app', {
	controller: function($scope, $http){
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