var module = angular.module("add",[]);
module.controller("addCtr",['$scope', '$http', function($scope, $http){

  $scope.add = function(){
    //collect data from user in one obj

     $scope.car = {type : $scope.type , color : $scope.color , price : $scope.price};
    //send the car to the server
    $http.post("http://localhost:1994/add" , $scope.car)
    .then(function(){
      console.log("SUCCESS !!")
    }, function(){
        console.log("ERROR !!")
      })
}

}])
