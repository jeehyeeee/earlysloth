// 60_표준내장객체

const str = new String('javaScript');
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);
console.log(Date.parse('2019-01-01'));  // parse() 메서드는 날짜와 시간 문자열을 구문 분석하여 1970년 1월 1일 00시 00분 00초 UTC를 기준으로 경과 한 밀리초를 반환합니다.
console.log(JSON.parse('{}'));   // JSON.parse() 메서드는 JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.

// JSON.parse('{}');              // {}
// JSON.parse('true');            // true
// JSON.parse('"foo"');           // "foo"
// JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
// JSON.parse('null');            // null

const str1 = 'javaScript';  
const str2 = new String('javaScript');  
console.log(typeof str1);   // string
console.log(typeof str2);   // object

console.log(str1 === 'javaScript');     // t
console.log(str2 === new String('javaScript'));    // f

console.log(str1.valueOf());  // javaScript
console.log(str2.valueOf());  // javaScript