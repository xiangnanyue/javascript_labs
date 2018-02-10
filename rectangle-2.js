'use strict'

module.exports = function(b, l, callback){
//在内部由一个try 和 catch 构成
try{
	if (b < 0 || l < 0){
		throw new Error("a and b cannot be negative");	
	}
	else {
		//callback的第二个attribut 是一个返回的结构体，结构体的成员是两个函数
		// return 可以不写
		callback(null, {
			perimeter: function(){
				return 2*(b + l);
			},
			area: function(){
				return b*l;
			}
		});
	}
}
catch(error){
	return callback(error, null);
}

}