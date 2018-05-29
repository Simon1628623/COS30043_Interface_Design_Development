var app = angular.module("myApp", []);
var $password;
app.controller("myFormCtrl", function($scope) 
{
	$scope.user = {};
	$scope.password;
	$scope.show_me = false;
	$scope.wasSubmitted = false;
	$scope.submit = function() 
	{
		$scope.wasSubmitted = true;
	};
});

app.directive('isString', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				var hasNumber = /\d/;
				if(typeof value == 'string' && !hasNumber.test(value)){
					myFormCtrl.$setValidity('isString', true);
				} else{
					myFormCtrl.$setValidity('isString', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('threeChars', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				if(value.length >= 3){
					myFormCtrl.$setValidity('username', true);
				} else{
					myFormCtrl.$setValidity('username', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('passwordDirective', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				//var Format = /$%^&*/;
				$password = value;
				/*if(value.length >= 8 && Format.test(value)){
					myFormCtrl.$setValidity('password', true);
				} else{
					myFormCtrl.$setValidity('password', false);
				}*/
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('passwordTwoDirective', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				if($password == value){
					myFormCtrl.$setValidity('password1', true);
				} else{
					myFormCtrl.$setValidity('password1', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('addressDirective', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				if(value.length < 40){
					myFormCtrl.$setValidity('address', true);
				} else{
					myFormCtrl.$setValidity('address', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('suburbDirective', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				if(value.length < 20){
					myFormCtrl.$setValidity('suburb', true);
				} else{
					myFormCtrl.$setValidity('suburb', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('postcodeDirective', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				var numbers = /^[0-9]+$/;
				if(value.length == 4 && value.match(numbers)){
					myFormCtrl.$setValidity('postcode', true);
				} else{
					myFormCtrl.$setValidity('postcode', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});

app.directive('phoneDirective', function(){
	return {
		require: 'ngModel',
		link:function(scope,element,attr,myFormCtrl){
			function myValidation(value){
				//validation code here
				//var numbers = /^04[0-9]+$/;
				var numbers = /04[\d]{8}$/g;
				if(value.match(numbers) && value.length == 10){
					myFormCtrl.$setValidity('phone', true);
				} else{
					myFormCtrl.$setValidity('phone', false);
				}
				return value;
			}
		myFormCtrl.$parsers.push(myValidation);
		}
	};
});