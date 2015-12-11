var concat_string = function(){
	var arr=[];

	for(var i=0; i < arguments.length; i++){
		arr.push(arguments[i]);
	}

	return arr.join("");
};

var yourFunctionRunner = function(){
    var arr=[];

	for(var i=0; i < arguments.length; i++){
		arr.push(arguments[i]());
	}

	return arr.join("");
};

var makeAdder = function(num) {
    var total = num;

    var adderOf2function = function(num2) {
        total += num2;

        return total;

    }
    return adderOf2function;
};

var once = function(function2) {
    var counter = 1;

    var newFunction = function() {
        if (counter > 0) {
            function2();
            counter--;
        }
    }

    return newFunction;
}

var createObjectWithTwoClosures = function() {
    var object = {};
    var total = 0;

    object.oneIncrementer = function() {
        total += 1;
    }
    object.tensIncrementer = function() {
        total += 10;
    }
    object.getValue = function() {
        return total;
    }

    return object;
};