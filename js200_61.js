// 61_자료형 확인하기 (typeof, instanceof)

const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10, 200, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

console.log(typeof str === 'string'); // t
console.log(typeof strObj === 'object'); // t
console.log(typeof num === 'number'); // t
console.log(typeof numObj === 'object'); // t
console.log(typeof bool === 'boolean'); // t
console.log(typeof boolObj === 'object'); // t
console.log(typeof func === 'function'); // t
console.log(typeof arr === 'object'); // t
console.log(typeof obj === 'object'); // t
console.log(typeof empty === 'object'); // t
console.log(typeof notCalled === 'undefined'); // t

console.log(str instanceof String); // f
console.log(strObj instanceof String); // t
console.log(num instanceof Number); // f
console.log(numObj instanceof Number); // t
console.log(bool instanceof Boolean); // f
console.log(boolObj instanceof Boolean); // t
console.log(arr instanceof Array); // t
console.log(obj instanceof Object); // t
console.log(func instanceof Function); // t
console.log(empty instanceof Object); // t
console.log(notCalled instanceof undefined); // f