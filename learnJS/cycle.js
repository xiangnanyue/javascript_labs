'use strict'

// 练习：闭包 －JS
function cycle(n){
	var list = [];
	for(var i = 0; i < n; i++){
		list.push(function(){    // what happens if function(i){...}
			return i*i;	// then i is taken as input but not
					// the variable of the cycle
		});
	}
	return list;
}

// now we write a funciton that bind the cycle variable to a function
// generated otherwise
function cycle2(n){
	var list = [];
	for(var i = 0; i < n; i++){
		list.push((function(n){
		// generate the funtion where
		// it is executed by input i
			    return function(){
			    	return n*n;
			    };
			})(i));
	}
	return list;
}

var n = 3;
var l = cycle(n);
console.log('n = ' + n);	
for(var i = 0; i<n; i++){
	console.log(l[i]());
}

var l2 = cycle2(n);
for(var i = 0; i<n; i++){
	        console.log(l2[i]());
}

