angular.module('get-car')

/*
              ________
             / ______ \
             || _  _ ||
             ||| || |||
             |||_||_|||
             || _  _o|| (o)
             ||| || |||
             |||_||_|||      ^~^  , Loop ?!
             ||______||     ('Y') )
            /__________\    /   \/
    ________|__________|__ (\|||/) _________
           /____________\
           |____________|
*/
.component('logIns', {
	controller: function ($scope, $http){
	  $scope.submit = function(){
      $scope.user = {user : $scope.username , password : $scope.password};
      $http.post("/logIn", $scope.user).then(function(data){
        window.location = "../../index.html"
    });
  };
	},
	templateUrl: `
    client/templates/logIns.html
	`
})