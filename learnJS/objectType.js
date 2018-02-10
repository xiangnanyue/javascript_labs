typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'

//不要使用new Number()、new Boolean()、new String()创建包装对象；
console.log('new Number(123) === 123 \n' + new Number(123) === 123);

var now = new Date(2015, 5, 19, 20, 15, 30, 123);
console.log(now);
//第二种创建一个指定日期和时间的方法是解析一个符合ISO 8601格式的字符串：
var d = Date.parse('2015-06-24T19:49:22.875+08:00');
console.log(d);
now = new Date(d);
console.log(now);
//用parseInt()或parseFloat()来转换任意类型到number；

//用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
//
//通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
//
//typeof操作符可以判断出number、boolean、string、function和undefined；
//
//判断Array要使用Array.isArray(arr)；

//判断null请使用myVar === null；

//判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
//
//函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
