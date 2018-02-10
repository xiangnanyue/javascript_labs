'use strict'

// x cannot ever be visited...
function counter(init){
	// initial value is either 0 or a value given
	var x = init | 0;
	return function(){
		x += 1;
		return x;
	};
}

var f = counter(1);
f();
f();
