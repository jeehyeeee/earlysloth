// 79_배열 요소를 분할/변환하기(from)
// Array.from(배열로 변환될 값, ? 반환될 배열 내부 요소에 대한 콜백함수) -> 두번째 인자 필수값 아님

const str = '12345678';

const distributeArr = Array.from(str);
console.log(distributeArr);

const modifiedArr = Array.from(distributeArr, el => el * 2);
console.log(modifiedArr);
