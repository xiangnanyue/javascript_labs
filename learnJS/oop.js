'use strict'

var student = {
	name: 'xiangnan',
	age: 23
};

// 必须给x赋值，识别类型后才能指向
var x = {
	subject: 'econ'
};

// 用prototype来控制objet的指向 
x.__proto__ = student;
x.age = 12;
x.name = 'xiaoming';

console.log(x);

// 用object.create() 来创造新的对象

function econStudent(){
	var es = Object.create(student);
	es.subject = 'econ';
	return es;
}

var y = econStudent();
console.log(y); // 但是只打印了subject
console.log(y.age); // 23
console.log(y.__proto__ === student); // true


