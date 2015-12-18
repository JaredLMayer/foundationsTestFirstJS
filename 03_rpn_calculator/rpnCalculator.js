var RPNCalculator = function(){
	this.stack = [];
	this.total = 0; 
};

RPNCalculator.prototype.push = function(num){
	this.stack.push(num);
};

RPNCalculator.prototype.pop = function(){
	return this.stack.pop(); 
};

RPNCalculator.prototype.value = function(){
	return this.total 
};

RPNCalculator.prototype.plus = function(){
	if(this.stack.length < 2){
		throw "rpnCalculator is empty"
	} else {
		var first = this.stack[this.stack.length-1];
			this.pop();
		var second = this.stack[this.stack.length-1];
			this.pop();
		var sum = first + second
		this.total = sum
		this.push(sum);
	}
};

RPNCalculator.prototype.minus = function(){
	if(this.stack.length < 2){
		throw "rpnCalculator is empty"
	} else {
		var first = this.stack[this.stack.length-1];
			this.pop();
		var second = this.stack[this.stack.length-1];
			this.pop();
		var diff = second-first;
		this.total = diff;
		this.push(diff);
	}
};

RPNCalculator.prototype.divide = function(){
	if(this.stack.length < 2){
		throw "rpnCalculator is empty"
	} else {
		var first = this.stack[this.stack.length-1];
			this.pop();
		var second = this.stack[this.stack.length-1];
			this.pop();
		var diff = second/first;
		this.total = diff;
		this.push(diff);
	}
};

RPNCalculator.prototype.times = function(){
	if(this.stack.length < 2){
		throw "rpnCalculator is empty"
	} else {
		var first = this.stack[this.stack.length-1];
			this.pop();
		var second = this.stack[this.stack.length-1];
			this.pop();
		var prod = second*first;
		this.total = prod;
		this.push(prod);
	}
};



























// var RPNCalculator = function(){
// 	this.total = 0;
// 	this.stack = [];
// };

// RPNCalculator.prototype.push = function(num){
// 	this.stack.push(num)
// };

// RPNCalculator.prototype.pop = function(){
// 	this.stack.pop()
// };

// RPNCalculator.prototype.value = function(){
// 	return this.total
// };

// RPNCalculator.prototype.plus = function(){
// 	if(this.stack.length < 2){
// 		throw "rpnCalculator is empty"
// 	}
// 	else{
// 		var l = this.stack.length
// 		first = this.stack[l-1]
// 		second = this.stack[l-2]
// 		this.pop();
// 		this.pop();
// 		var sum = first + second
// 		this.total = sum
// 		this.push(sum)
// 	};
// };

// RPNCalculator.prototype.minus = function(){
// 	if(this.stack.length < 2){
// 		throw "rpnCalculator is empty"
// 	}
// 	else{
// 		var l = this.stack.length
// 		first = this.stack[l-1]
// 		second = this.stack[l-2]
// 		this.pop();
// 		this.pop();
// 		var diff = second - first
// 		this.total = diff
// 		this.push(diff)
// 	};
// };

// RPNCalculator.prototype.divide = function(){
// 	if(this.stack.length < 2){
// 		throw "rpnCalculator is empty"
// 	}
// 	else{
// 		var l = this.stack.length 
// 		first = this.stack[l-1]
// 		second = this.stack[l-2]
// 		this.pop();
// 		this.pop();
// 		var div = second/first
// 		this.total = div
// 		this.push(div)
// 	}
// }

// RPNCalculator.prototype.times = function() {
// 	if (this.stack.length<2) {
// 		throw "rpnCalculator is empty"
// 	}
// 	else {
// 	    var l = this.stack.length;
// 		var first = this.stack[l-1];
// 		var second = this.stack[l-2];
// 		this.pop();
// 		this.pop();
// 		var product = first * second;
// 		this.total = product
// 		this.push(product);
// 	}
// }

































// // var RPNCalculator = function() {
// // 	this.total = 0;
// // 	this.stack = [];
// // }

// // RPNCalculator.prototype.push = function(num) {
// // 	this.stack.push(num);
// // }

// // RPNCalculator.prototype.pop = function() {
// // 	this.stack.pop()
// // }

// // RPNCalculator.prototype.value = function() {
// // 	return this.total
// // }

// // RPNCalculator.prototype.plus = function() {
// // 	if (this.stack.length < 2) {
// // 		throw "rpnCalculator is empty"
// // 	}
// // 	else {
// // 	    var l = this.stack.length;
// // 		var first = this.stack[l-1];
// // 		var second = this.stack[l-2];
// // 		this.pop();
// // 		this.pop();
// // 		var sum = first + second;
// // 		this.total = sum;
// // 		this.push(sum);
// // 	}
// // }

// // RPNCalculator.prototype.minus = function() {
// // 	if (this.stack.length<2) {
// // 		throw "rpnCalculator is empty"
// // 	}
// // 	else {
// // 	    var l = this.stack.length;
// // 		var first = this.stack[l-1];
// // 		var second = this.stack[l-2];
// // 		this.pop();
// // 		this.pop();
// // 		var diff = second - first;
// // 		this.total = diff;
// // 		this.push(diff)
// // 	}
// // }

// // RPNCalculator.prototype.times = function() {
// // 	if (this.stack.length<2) {
// // 		throw "rpnCalculator is empty"
// // 	}
// // 	else {
// // 	    var l = this.stack.length;
// // 		var first = this.stack[l-1];
// // 		var second = this.stack[l-2];
// // 		this.pop();
// // 		this.pop();
// // 		var product = first * second;
// // 		this.total = product
// // 		this.push(product);
// // 	}
// // }

// // RPNCalculator.prototype.divide = function() {
// // 	if (this.stack.length < 2) {
// // 		throw "rpnCalculator is empty"
// // 	}
// // 	else {
// // 	    var l = this.stack.length;
// // 		var first = this.stack[l-1];
// // 		var second = this.stack[l-2];
// // 		this.pop();
// // 		this.pop();
// // 		this.total = second/first;
// // 		this.push(this.total);
// // 	}
// // }