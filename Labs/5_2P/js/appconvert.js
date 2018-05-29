var app = angular.module("myApp", []);
app.filter ("romannumerals", function(){
	return function(n) {
		var rn = "Not set...";
		var output = [];
		var sNumber = n.toString();

		for (var i = 0, len = sNumber.length; i < len; i += 1) {
			output.push(+sNumber.charAt(i));
		}
		
		if(output.length == 2){
			switch(parseInt(output[0]))
			{
				case 1: rn="X"; break;
				case 2: rn="XX"; break;
				case 3: rn="XXX"; break;
				case 4: rn="XL"; break;
				case 5: rn="L"; break;
				case 6: rn="LX"; break;
				case 7: rn="LXX"; break;
				case 8: rn="LXXX"; break;
				case 9: rn="XC"; break;
				case 0: rn="N/A"; break;
			}
			switch(parseInt(output[1]))
			{
				case 1: rn+="I"; break;
				case 2: rn+="II"; break;
				case 3: rn+="III"; break;
				case 4: rn+="IV"; break;
				case 5: rn+="V"; break;
				case 6: rn+="VI"; break;
				case 7: rn+="VII"; break;
				case 8: rn+="VIII"; break;
				case 9: rn+="IX"; break;
				case 0: rn+=""; break;
			}
		}
		else if(output.length == 1){
			switch(parseInt(output[0]))
			{
				case 1: rn="I"; break;
				case 2: rn="II"; break;
				case 3: rn="III"; break;
				case 4: rn="IV"; break;
				case 5: rn="V"; break;
				case 6: rn="VI"; break;
				case 7: rn="VII"; break;
				case 8: rn="VIII"; break;
				case 9: rn="IX"; break;
				case 0: rn=""; break;
			}
		}
		else{
			rn='Outside Range';
		}		
		return rn;
	};
});
app.controller("myCtrl",function($scope){
	$scope.a = 'a';
});