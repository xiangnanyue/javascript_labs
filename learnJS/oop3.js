'use strict'

var Student = require('./oop2')

//创建一个子类的构造函数
// prop 是age和name数据

function EconStudent(prop){
	// 后面运行 subject() 函数还是显示 general， 说明虽然下面改变了sub的值
	// 但是对Student没有影响
	Student.call(this, prop);
	this.sub = 'econ';
}

//构造原型链
// 1 构造空函数
function F(){
}

//下列3应该在2前面，开始写反了，得不到继承的结果
// 3  改变F的prototype指向
F.prototype = Student.prototype;
// 2
EconStudent.prototype = new F();
//F.prototype = Student.prototype;
// 4 改变Constructor
EconStudent.prototype.constructor = EconStudent;

// 如果紧接在Econ 构造函数后面不行，因为指向发生了改变
EconStudent.prototype.master = function(){
	        console.log(this.name + ' master ' + this.sub);
}


var xiaoming = new EconStudent({
	name: 'xiaoming',
    	age: 18
});

xiaoming.subject();
console.log(xiaoming.age);
console.log(xiaoming.name);
xiaoming.master();
console.log(xiaoming.__proto__);
console.log(xiaoming.__proto__.__proto__);
console.log(xiaoming.__proto__.constructor);
console.log(EconStudent.prototype);
console.log(xiaoming instanceof EconStudent);
console.log(xiaoming instanceof Student);
console.log(xiaoming.__proto__ === EconStudent.prototype);
console.log(xiaoming.__proto__.__proto__ === Student.prototype);
console.log('EconStudent.prototype = ' + EconStudent.prototype);
