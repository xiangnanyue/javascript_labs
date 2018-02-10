'use strict'

function Student(prop){
	this.name = prop.name;
	this.age = prop.age;
	this.sub = prop.subject || 'general';
}

// 把 subject 放到prototype里面，（Student{}）, 运行时往prototype中
// 查找， 节省下内存； 方法和属性可以分开写
Student.prototype.subject = function(){
	console.log('his subject is ' + this.sub);
}

module.exports = Student;

var ming = new Student({
	name: 'xiaoming',
    	age: 12
});



// 运行的结果满足： ming.__proto__ = Student{} 
// Student.__proto__ = [Function], Student.prototype = Student {}
// Student.prototype.constructor = [Function: Student]
// 所以称 Student 是 Student  {} 的构造函数
//ming --> Student{} --> {}
//
