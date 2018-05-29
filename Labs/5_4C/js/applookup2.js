var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider,$locationProvider){
	$locationProvider.hashPrefix('');
	$routeProvider.
	when("/info/:infoID", {
		templateUrl: 'lookup2template.html',
		controller: 'infoCtrl'
	});
});
app.controller('infoCtrl',function($scope, $routeParams) {
//<your code which may include creating new model in $scope from the parameter variable passed via route>
	$scope.viewInfoID = $routeParams.infoID;
});