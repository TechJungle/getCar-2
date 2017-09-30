var module = angular.module("home",[]);
module.controller("homeCtr",function($scope){
  $scope.addToCard = function(){
    $scope.name = "Doaa";
  }
})
