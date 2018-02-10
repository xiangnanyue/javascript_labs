'use strict'

function* fib(max) {
	    var
	           t,
	            a = 0,
	            b = 1,
	            n = 1;
	        while (n < max) {
		        yield a;
		        t = a + b;
		        a = b;
		        b = t;
		        n ++;
			}
		    return a;
}

var f = fib(10);
console.log(f);
console.log(f.next());
console.log(f.next());
// 已经打印出f.next {0, 1} 下一个元素从 1 开始
for(var i of f){
	console.log(i);
}
