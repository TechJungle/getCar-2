angular.module('get-car')

.component('signUp', {
  controller: function($scope, $http){
    
      $scope.addUser=function(){
        $scope.newUse = {
          name: $scope.newUser.name,
          password: $scope.newUser.password,
          numberPhon: parseInt($scope.newUser.numberPhon),
          email: $scope.newUser.email
        };
  
        $scope.newUser.name = "";
        $scope.newUser.password = "";
        $scope.newUser.numberPhon = "";
        $scope.newUser.email = "";

        $http.post("/signUp", $scope.newUse).then(function(data){
          $scope.$parent.signUp = false;
          $scope.$parent.$ctrl.loog = true;
        }, function(data){
          console.log("error??")
        }) 
      }
    },
	
	templateUrl: `
    client/templates/signUp.html
	`
})