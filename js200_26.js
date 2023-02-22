// 26_자료형변환 예제

console.log("5" + 1); // 51
console.log("5" - 1); // 4
console.log("5" * 1); // 5
console.log("There is" + 5); // There is 5
console.log("Five" * 2); // NaN
console.log('- 연산자를 활용한 자료형 변환'); // - 연산자를 활용한 자료형 변환
let str = 5 + "1"; 
console.log(str); // 51
console.log(typeof str); //string
let num = +str; 
console.log(num); // +로 문자열을 숫자형으로 변환 -> 51 
console.log(typeof num); // number
console.log('- 함수를 활용한 자료형 변환'); // - 함수를 활용한 자료형 변환
str = String(num);          // string 객체에 값을 넣으면 문자형, Number 객체에 값을 넣으면 숫자형으로 변환             
console.log(typeof str); // string

num = Number(str); 
console.log(num); // 51
console.log(typeof num); //number
