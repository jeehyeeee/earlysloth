// 62_NaN 값 확인하기
// isNaN NaN이면 true 반환, 아니면 false 반환


console.log(Number.isNaN(NaN)); // t
console.log(Number.isNaN(undefined)); // f
console.log(Number.isNaN('Is it Number?'));  // f
console.log(Number.isNaN(0)); // f
console.log(Number.isNaN(null)); // f

console.log(Number.isNaN(-1)); // f
console.log(Number.isNaN(0/0)); // t
console.log(Number.isNaN(new Date())); // f
console.log(Number.isNaN(new Date().toString)); // f
console.log(Number.isNaN('Infinity'));  // f

 function verifyNumber(n) {
    if (Number.isNaN(n) || !n) return 0;
    return n;
}
const num1 = verifyNumber(15); // 15
const num2 = verifyNumber(undefined); // 0
const num3 = verifyNumber(null); // 0
const num4 = verifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);