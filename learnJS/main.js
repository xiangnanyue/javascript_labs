'use strict'

var lazySum = require('./lazySum');

var a = [1,2,3,4,5];
var sum = lazySum(a);

console.log(sum);
console.log(sum())
