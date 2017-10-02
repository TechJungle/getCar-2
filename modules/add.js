var module = angular.module("add",[]);
module.controller("addCtr",['$scope', '$http', function($scope, $http){
  $scope.add = function(){
  $scope.image = document.getElementById("image").value;
    //collect data from user in one obj
  $scope.car = {type : $scope.type , color : $scope.color , price : $scope.price , image : $scope.image};
     console.log($scope.car)
    //send the car to the server
  $http.post("/add" , $scope.car)
    .then(function(data){
      console.log("SUCCESS !!")
    }, function(data){
        console.log("ERROR !!")
      })
}
}])
