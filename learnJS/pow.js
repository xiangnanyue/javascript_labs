'use strict'

function pow(n){
	return function(x){
		return Math.pow(n, x);
	}
}

var pow = pow(2);
console.log(pow(3));
