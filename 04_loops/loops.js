
var repeat = function(str, num){
	var string = ""
	for (var i=1; i<=num; i++){
		string += str;  
	}
	return string;
};

var sum = function(arr){
	result = 0; 
	for (var i=0; i<arr.length; i++){
		result += arr[i];
	}
	return result; 
};

var gridGenerator = function(num){
	grid = "";
//loop through the grid and continue adding a character if the length is not == num**2
	//if the grid.length is even, add a #, if odd add " "
//loop through result until .length. for each character divisible by the num, add a \n after
	// for (var i=0; i<Math.pow(num, 2); i++){
	// 	if(i % 2 === 0){
	// 		grid += '#';
	// 	}
	// 	else if(i % 3 == 0){
	// 		grid += " ";
	// 	}
	// 	else if (grid.length%num == 0){
	// 	    grid += "\n";
	// 	}
	// }
	return grid;
}; 

//i = 0
// 0 % 2 == 0 which continues to grid += #
//loops through grid which == "#" and if j==0






















































// function repeat(string, num) {
// 	var result = "";
// 	for (i=1; i<=num; i++) {
// 		result += string;
// 	}
// 	return result;
// }

// function sum(arr) {
// 	var result = 0;
// 	for (i=0; i<arr.length; i++) {
// 		result += arr[i];
// 	}
// 	return result
// }

// function gridGenerator(num) {
// 	var grid = "";
// 	for(i=1; i<=num; i++) {
// 		for (j=1; j<=num; j++) {
// 			if ((i+j)%2 == 0) {
// 				grid += "#"
// 			}
// 			else {
// 				grid += " "
// 			}
// 		}
// 		grid += "\n"
// 	}
// 	return grid
// }

// function largestTriplet(num) {
// 	for (k=num; k>0; k--) {
// 		for (i=0; i<k; i++) {
// 			for (j=0; j<k; j++) {
// 				if (Math.pow(i,2) + Math.pow(j,2) == Math.pow(k,2)) {
// 					return [i,j,k]
// 				}
// 			}
// 		}
// 	}
// }

// function join(arr, letters) {
// 	var str = "";
// 		if (letters!=undefined) {
// 			for (i=0; i<arr.length-1; i++) {
// 				arr[i]+=letters
// 			}
// 		}
// 		for (i=0; i<arr.length; i++) {
// 			str += arr[i];
// 		}
// 	return str
// }

// function sort_obj(obj) {
//   var sortedObject = {};
//   var keys = Object.keys(obj);
//   keys.sort();
//   for (var i = 0; i < keys.length; i++) {
//     key = keys[i];
//     value = obj[key];
//     sortedObject[key] = value;
//   }
//   return sortedObject;
// }

// function paramify(obj) {
// 	var str = ""
// 	var counter = Object.keys(obj).length-1;
// 	var newobj = sort_obj(obj);
// 	for (var key in newobj) {
// 		if (obj.hasOwnProperty(key)) {
// 			str += key + "=" + newobj[key]}
// 		if (counter > 0) {
// 			str += "&";
// 			counter --
// 		}
// 	}
// 	return str
// }
