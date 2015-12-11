//Redo for practice 
function setPropertiesOnObjLiteral(obj) {
	// object = {};
	obj.x = 7;
	obj['y'] = 8;
	obj.onePlus = function(num) {
		num += 1
	return num 
	};
};

function setPropertiesOnArrayObj(arr) {
	arr.hello = function() {
		return "Hello!"
	};
	arr['full'] = "stack";
	arr[0] = 5;
	arr.twoTimes = function(num) {
		num *= 2
		return num
	};
};

function setPropertiesOnFunctionObj(obj) {
	obj.year = 2015;
	obj.divideByTwo = function(num) {
		num /= 2
		return num
	};
	obj.prototype.helloWorld = function() {
		return "Hello World"
	};

};












//First time around 

// function setPropertiesOnObjLiteral(obj){
// 	obj.x = 7;
// 	obj.y = 8;
// 	obj.onePlus = function(num) {
// 		num += 1
// 		return num
// 	};
// };

// function setPropertiesOnArrayObj(arr){
// 	arr.hello = function(){
// 		return "Hello!"
// 	};
// 	arr['full'] = "stack";
// 	arr[0] = 5
// 	arr.twoTimes = function(number){
// 		return number*2
// 	};
// };

// function setPropertiesOnFunctionObj(functionObject){
// 	functionObject.year = 2015;
// 	functionObject.divideByTwo = function(num){
// 		return num/2
// 	};
// 	functionObject.prototype.helloWorld = function(){
// 		return "Hello World"
// 	};
// 	return "I am a function object, all functions are objects! Functions can have their own properties too!";
// };