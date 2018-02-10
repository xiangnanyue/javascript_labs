'use strict'

function lazy_sum(arry){
	var sum = function(){
		return arry.reduce(function(x, y){
			return x + y;
		});
	}
	return sum;
}

module.exports = lazy_sum;

