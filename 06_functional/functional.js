// 06_Functional 

var doubler = function(num) {
	return num*2; 
};

var forEach = function(array, iteratorFunction) {
	for (var i in array) {
		iteratorFunction(array[i]);
	}
};

var map = function(arr, mapFunctionDoubler) {
	var newArr = [];

	forEach(arr, function(num){
		item = mapFunctionDoubler(num);
		newArr.push(item);
	});
	return newArr;
};

var filter = function(arr, filterEvenOddFunction) {
	var newArr = [];

	forEach(arr, function(item){
		if (filterEvenOddFunction(item) == true) {
			newArr.push(item);
		}
	});
	return newArr;
};

var contains = function(arr, num) {
	result = false; 

	forEach(arr, function(item){
		if (item == num || arr[item] == num) {
			result = true;
		}
	});
	return result; 
};

var countWords = function(string) {
	var count = 0; 
	var array = string.split(" ");

	forEach(array, function(item){
		count += 1
	});
	return count;
};

var reduce = function(array, startVal, reducerFunction) {
	var currentVal = startVal;

	for(var i =0; i < array.length; i++) {
		currentVal = reducerFunction(currentVal, array[i]);
	}
	return currentVal;
};

var countWordsInReduce = function(currentVal, wordsArray) {
	return currentVal + countWords(wordsArray); 
};

//REVIEW 
var sum = function(array) {
  var addFunc = function(current, next) {
    return current + next; 
  };
  return reduce(array, 0, addFunc);
};

var every = function(array, everyFunction) {

	for (var i = 0; i < array.length; i++) {
		if(!everyFunction(array[i])) {
			return false;
		}
	}
	return true;  
};

var any = function(array, anyFunction) {
  if (typeof anyFunction === "undefined") {
    anyFunction = function(item) {
      return item;
    }
  }
  return reduce(array, false, function(current, next) {
    var returnResult = current || anyFunction(next);
    return returnResult;
  });
};
