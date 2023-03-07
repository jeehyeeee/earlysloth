// 93_배열 순서 반대로나열(reverse)
// 함수 호출 시 원본 배열 변형

const str = 'abcdefghijk';
const arr = str.split(''); // .join -> 배열의 값을 문자열로 변환 // .split -> [ '🍎', ' 🥝', ' 🍌', ' 🍒' ] 문자열을 배열로 변환

arr.reverse();

console.log(arr.join(''));


// {
//     const fruits = ['apple', 'banana', 'orange'];
//     const result = fruits.join();
//     console.log(result);
// }
// {
//     const fruits = '🍎, 🥝, 🍌, 🍒';
//     const result = fruits.split(',');
//     console.log(result);
// }
