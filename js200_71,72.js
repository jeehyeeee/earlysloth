// 71_문자열 길이 구하기(length)
// 문자열.length

// 72_문자열로 변환하기(toString)

const arr = ['short', 'long sentence. it is not appropriate'];

arr.forEach(str => {
    if(str.length < 10) console.log(str);
});  // short , 10보다 작은 길이일 때만 출력

// 72_문자열로 변환하기(toString)

const num = 5;
const bool = true;
const str = "문자열 값";
const arr1 = [1, 2, 3];
const obj = {a: 15};

console.log(num.toString()) // 5
console.log(bool.toString()) // true
console.log(str.toString()) // 문자열 값
console.log(arr1.toString()) // 1,2,3
console.log(obj.toString()) // object object 객체자료형

num.__proto__.toString = () => {
    return 'toString 덮어쓰기'
};
console.log(num.toString());