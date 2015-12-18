var factorialIterative = function(num) {
	var result = 1; 

	for (var i=num; i > 0; i--) {
		 result *= i 
	}
	return result; 
};

var factorial = function(n) {
	if(n==0){
		return 1
	}
	else {
		return n * factorial(n-1);
	}
};

var fib = function(n) {
	if(n==0) {
		return 1;
	}
	else if(n==1) {
		return 1;
	}
	else {
		return fib(n-1) + fib(n-2);
	}
};

var type = function(type) {
	var result = Object.prototype.toString.call(type)
	return result.slice(8, [result.length-1])
};



//Still having issues with the native string conversion spec. Come back to this for sake of time.
var stringify = function(input) {
	if (type(input) == 'Undefined') {
		return 'undefined'
	}
	if (type(input) == 'Null') {
		return 'null'
	}
	if (type(input) == 'Boolean') {
		return input.toString()
	}
	if (type(input) == 'Number') {
		return input.toString()
	}
	if (type(input) == 'String') {
		return '"' + input + '"'
	}
	if (type(input) == 'Function') {
		return input.toString()
	}
	if (type(input) == 'Array') {
		var result = [];
		for (var i in input) {
		    result.push(stringify(input[i]))
		}
		return '[' + result.join(',') + ']'
	}
	if (type(input) == 'Object') {
		var result = [];
		for (var key in input) {
			var val = stringify(input[key])
			result.push('"' + key + '"' + ": " + val)
		}
		return '{' + result.join(',') + '}'
	}
}