//Redo for practice 2nd time around 
function createCalculator() {
	var calculator = {};
	calculator.total = 0
	calculator.value = function() {
		return this.total
	};
	calculator.add = function(num) {
		this.total += num 
	};	
	calculator.subtract = function(num) {
		this.total -= num 
	};
	return calculator
};






































// First time around 
// function createCalculator() {
// 	var calculator = {};
// 	calculator.total = 0
// 	calculator.value = function() {
// 		return this.total
// 	};
// 	calculator.add = function(num) {
// 		this.total += num;
// 	};
// 	calculator.subtract = function(num) {
// 		this.total -= num;
// 	};
// 	return calculator
// };

