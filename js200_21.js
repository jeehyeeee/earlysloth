// 21_산술연산자 예제
// + 덧셈연산자는 문자형에서도 사용 가능함, 두개 이상의 문자열 이어 붙일 수 있음
// 나눗셈, 곱셈, 뺄셈 문자열 사용 불가
// +=, -=, *=, /= 산술등호 연산

let x = 10;
x += 5; // x = x+5 -> 15
x *= 2; // x = x*2 -> 15*2 -> 30 
console.log(x); // 30

let y = 10;
y -= 5; // y = y-5 ->5
y /= 5; // y = y/5 ->1
console.log(y); // 1

console.log(15 % 4); // 3
console.log(3 ** 3); // 27
console.log(+10); // 10
console.log(-10); // -10
let value = 10;
++value; // value = value + 1 -> 11
--value; // value = value - 1 -> 10
console.log(value); // 10