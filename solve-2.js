'use strict'

var rec = require('./rectangle-2');
// 可以引入多个 require

var arg = require('yargs')
		.usage('Usage : node $0 --l = [num] --b = [num]')
		.demand(['l', 'b'])
		.argv;

//定义函数
function solveRect(b, l){
	console.log("with b = " + b + ", and l = " + l);
	console.log("the result of perimeter is " );
	// 执行 rec， 利用返回值
	
	rec(b, l, function(e, rectangle){
		if (e) console.log(e);
		else {
		// 在作为attribut的perimeter做函数时要加上（）
		console.log("the perimeter and the area are " + rectangle.perimeter() + " " + rectangle.area());
		}
	});
};

solveRect(arg.b, arg.l);