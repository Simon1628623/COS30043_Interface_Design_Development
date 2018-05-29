var app = angular.module("myApp", []);
app.directive('ngMenu', function($parse) {
	//<your code, you may either write the object with the return statement, or create an object and return it.>
	var direc = {};
	var linkFunction = function(scope,element,attributes){
		scope.items = scope.$eval(attributes.ngMenu);
	};
	direc.restrict = 'A';
	direc.link = linkFunction;
	direc.template = '<ul data-ng-repeat="item in items"><li>{{item}}</li></ul>';
	return direc;
});