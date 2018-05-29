var app = angular.module("myApp", []);
app.controller("myCtrl", ['$scope',function($scope){	
	$scope.nMax = 100;
	$scope.nMin = 0;
	$scope.play = true;
	$scope.strG = ['Start Guessing'];
	$scope.aNum = Math.floor(Math.random() * $scope.nMax) + $scope.nMin;
	
	$scope.newGame = function(){
		$scope.aNum = Math.floor(Math.random() * $scope.nMax) + $scope.nMin;
		$scope.strG = ['Start Guessing'];
		$scope.play = true;
	};
	$scope.guess = function(gNum){
		if($scope.play){
			if(gNum == $scope.aNum){
				$scope.strG.push(gNum + ' is correct');
				$scope.play = false;
			}
			else if(gNum > $scope.aNum){
				$scope.strG.push(gNum + ' is too high');
			}
			else if(gNum < $scope.aNum){
				$scope.strG.push(gNum + ' is too low');
			}
			else {
				$scope.strG.push('please enter a valid number between '+ $scope.nMin + ' and ' + $scope.nMax);
			}
		} else {
			$scope.strG.push('game over please start a new game..');
		}
	
	};
	$scope.giveUp = function(){
		if($scope.play){
					$scope.strG.push('the number was... ' + $scope.aNum);
		$scope.play = false;
		}else {
			$scope.strG.push('game over please start a new game..');
		}
	}
}]);