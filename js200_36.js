// arguments 객체
// arguments[0] : 첫 번째 인수 값
// arguments[1] : 두 번쩨 인수 값
// arguments.length : 인수 개수
// arguments.callee : 현재 실행되고 있는 함수의 참조

/*function f(x,y) {
    arguments[1] = 3;
    console.log("x =" + x + ", y = " + y);
}
f(1,2); */

function sum() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    console.log(arguments instanceof Array);
    return total;
}
let sumOf1to3 = sum(1,2,3);
console.log(sumOf1to3);

function testArg() {
    let newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}
testArg('a', 'b');