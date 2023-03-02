// 73_문자열 하나로 합치기(concat)
// -> + 연산자 사용을 권장함, 다른 자료형(숫자)과 문자를 하나의 문자열로 만드는 경우가 많고 성능상 더 빠름

const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good night!';
const str4 =  ' - The Truman Show, 1998';
console.log(str1.concat(str2, str3, str4)); // Good afternoon, Good evening, and Good night! - The Truman Show, 1998