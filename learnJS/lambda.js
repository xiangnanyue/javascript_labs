'use strict'

// lambda 运算符
//

var zero = function(f){
	return function(x){
		return x;
	}
};

var one = function(f){
	return function(x){
		return f(x);
	}
}

var two = function(f){
	return function(x){
		return f(f(x));
	}
}

function add(m, n){
	return function(f){
		return function(x){
			// 注意返回的写法
			return m(f)(n(f)(x));
		};
	};
}

var f = function(x){
	return 2*x;
}

var three = add(two, one);
console.log(two(f)(1));
console.log(three(f)(1));


