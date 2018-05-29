var app = angular.module('myApp', []);

app.filter("offset", function() {
return function(input, start) {
start = parseInt(start, 10);
return input.slice(start);
};
});

app.controller("paginationCtrl", function($scope) {
	$scope.unitsPerPage = 5;
	$scope.currentPage = 0;
	$scope.units = [{"code":"ICT10001", "desc":"Problem Solving with ICT", "cp":12.5, "type":"Core"},
	{"code":"COS10005", "desc":"Web Development", "cp":12.5, "type":"Core"},
	{"code":"INF10003", "desc":"Introduction to Business Information Systems", "cp":12.5, "type":"Core"},
	{"code":"INF10002", "desc":"Database Analysis and Design", "cp":12.5, "type":"Core"},
	{"code":"COS10009", "desc":"Introduction to Programming", "cp":12.5, "type":"Core"},
	{"code":"INF30029", "desc":"Information Technology Project Management", "cp":12.5, "type":"Core"},
	{"code":"ICT30005", "desc":"Professional Issues in Information Technology", "cp":12.5, "type":"Core"},
	{"code":"ICT30001", "desc":"Information Technology Project", "cp":12.5, "type":"Core"},
	{"code":"COS20001", "desc":"User-Centred Design", "cp":12.5, "type":"Software Development"},
	{"code":"TNE10005", "desc":"Network Administration", "cp":12.5, "type":"Software Development"},
	{"code":"COS20016", "desc":"Operating System Configuration", "cp":12.5, "type":"Software Development"},
	{"code":"SWE20001", "desc":"Development Project 1 - Tools and Practices", "cp":12.5, "type":"Software Development"},
	{"code":"COS20007", "desc":"Object Oriented Programming", "cp":12.5, "type":"Software Development"},
	{"code":"COS30015", "desc":"IT Security", "cp":12.5, "type":"Software Development"},
	{"code":"COS30043", "desc":"Interface Design and Development", "cp":12.5, "type":"Software Development"},
	{"code":"COS30017", "desc":"Software Development for Mobile Devices", "cp":12.5, "type":"Software Development"},
	{"code":"INF20012", "desc":"Enterprise Systems", "cp":12.5, "type":"Systems Analysis"},
	{"code":"ACC10007", "desc":"Financial Information for Decision Making", "cp":12.5, "type":"Systems Analysis"},
	{"code":"INF20003", "desc":"Requirements Analysis and Modelling", "cp":12.5, "type":"Systems Analysis"},
	{"code":"ACC20014", "desc":"Management Decision Making", "cp":12.5, "type":"Systems Analysis"},
	{"code":"INF30005", "desc":"Business Process Management", "cp":12.5, "type":"Systems Analysis"},
	{"code":"INF30003", "desc":"Business Information Systems Analysis", "cp":12.5, "type":"Systems Analysis"},
	{"code":"INF30020", "desc":"Information Systems Risk and Security", "cp":12.5, "type":"Systems Analysis"},
	{"code":"INF30001", "desc":"Systems Acquisition & Implementation Management", "cp":12.5, "type":"Systems Analysis"}];

	$scope.range = function() {
		var rangeSize = 5;
		var ret = [];
		var start = $scope.currentPage;
		if (start > $scope.pageCount() - rangeSize) {
		start = $scope.pageCount() - rangeSize + 1;
		}
		for (var i=start; i<start + rangeSize; i++) {
		ret.push(i);
		}
		return ret;
	};

	$scope.prevPage = function() {
		if ($scope.currentPage > 0) {
		$scope.currentPage--;
		}
	};

	$scope.prevPageDisabled = function() {
		return $scope.currentPage === 0 ? "disabled" : "";
	};

	$scope.nextPage = function() {
		if ($scope.currentPage < $scope.pageCount()) {
		$scope.currentPage++;
		}
	};

	$scope.nextPageDisabled = function() {
		return $scope.currentPage === $scope.pageCount() ?
		"disabled" : "";
	};

	$scope.pageCount = function() {
		return Math.ceil($scope.units.length / $scope.unitsPerPage) - 1;
	};

	$scope.setPage = function(n) {
		$scope.currentPage = n;
	};
});