var module = angular.module("home",[]);
module.controller("homeCtr",["$scope","$http",function($scope,$http){
  $scope.addToCard = function(){
    $http.post("/","")
      .then(function(data){
        console.log("SUCCESS !!")
      }, function(data){
          console.log("ERROR !!")
        })
  }
}])
