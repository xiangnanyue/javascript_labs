'use strict'

var f = 
(x, y, ...rest) => {
	var i, sum = x+y;
	for(i = 0; i<rest.length; i++){
		sum += rest[i];
	}
	console.log(sum);
};

f(1,2,3)
