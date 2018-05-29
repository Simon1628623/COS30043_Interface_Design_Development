var app = angular.module("myApp", []);
app.controller("myCtrl",function($scope){
	$scope.statuses = [];
	
	$scope.post = function(s){
		$scope.statuses.push(s);
	};
	$scope.delete = function(s){
		var index = $scope.statuses.indexOf(s);
		$scope.statuses.splice(index, 1);
	};
	
});