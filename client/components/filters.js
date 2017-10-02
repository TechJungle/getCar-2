angular.module('get-car')

// Sidebar Component
.component('filters', {
	bindings: {
		searchtt: '<'
	},
	controller: function($scope, $filter, $http,){
		// this.searchTest = []
  //   var request = $http.get('/data'); 
  //   console.log(this)
  //   // getting data from the
  //   var that = this
  //   request.success(function(data) {
  //       that.searchTest = data
  //       console.log(that.searchTest)
  //       console.log(that.searchTest2)
  //   });
  //   request.error(function(data){
  //       console.log('Error: ' + data);
  //   });
  // setTimeout(function(){ console.log(this.bad);}, 5000)
  // setTimeout(function(){ console.log(this.searchtt); }, 5000);
      
  //     $scope.$ctrl.searchTest2=$scope.$ctrl.searchtt;
  //     console.log($scope.$ctrl.searchTest2 + "+++++++++++")
  //     // The type filter
  //     // $scope.$watch('type', function(val){
  //     // 	console.log($scope.$ctrl.searchtt + "===========")
  //     // 	$scope.$ctrl.searchtt = $filter('filter')(
  //     // 		$scope.$ctrl.searchTest2, val)
  //     // 	$scope.$ctrl.searchTest2=$scope.$ctrl.searchtt;
  //     // 	console.log($scope.$parent.$ctrl)
  //     // 	console.log($scope.searchTest2)
  //     // })


  //     // // The color filter
  //     // $scope.$watch('color', function(val){
  //     // 	console.log(val)
  //     // 	$scope.$ctrl.searchtt = $filter('filter')(
  //     // 		$scope.$ctrl.searchTest2, val)
  //     // 	$scope.$ctrl.searchTest2=$scope.$ctrl.searchtt;
  //     // })

  //     // $scope.$watch('price', function(val){
  //     // 	console.log(val)
  //     // 	$scope.searchtt = $filter('filter')(
  //     // 		$scope.searchTest2, val)
  //     // 	$scope.searchTest2=$scope.searchtt;
  //     // })

  //     // $scope.$watch('search', function(val){
  //     // 	console.log(val)
  //     // 	$scope.searchtt = $filter('filter')(
  //     // 		$scope.searchTest2, val)
  //     // 	$scope.searchTest2=$scope.searchtt;
  //     // })
  $scope.rangeMin = 0;
  $scope.rangeMax = 1000000;
$scope.filterRange = function(obj) {
    return obj.price > $scope.rangeMin && obj.price <= $scope.rangeMax;
};
$scope.all = function(){
    $scope.rangeMin = 0;
  $scope.rangeMax = 1000000;
  }

  $scope.min = function(){
    $scope.rangeMin = 0;
  $scope.rangeMax = 5000;
  }
  $scope.mid = function(){
    $scope.rangeMin = 5000;
  $scope.rangeMax = 10000;
  }
  $scope.max = function(){
    $scope.rangeMin = 1000;
  $scope.rangeMax = 1000000;
  }
	},

	templateUrl: `
    client/templates/filters.html
	`
})