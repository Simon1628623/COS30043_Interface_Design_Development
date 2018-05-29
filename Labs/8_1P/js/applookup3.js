var app = angular.module('myApp', []);
app.controller('myCtrl',
function($scope, $http){
	$http.get("data/units2.json")
	.then(
		function(response){
			$scope.units = response.data;
		},
		function(response){
			//error handling rountine
			$scope.units = "Something went wrong";
		});
});
