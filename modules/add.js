var http = require("http");

var module = angular.module("add",[]);
module.controller("addCtr",function($scope){
  var add = function(){
    //collect data from user in one obj
    var car = {type : $scope.type , color : $scope.color , price : $scope.color};
    //send the obj to the server
  http.open("POST", "serverURL" , true)
  }

})
