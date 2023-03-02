// 99_배열 내 값 누적(reduce)
// 배열.reduce(누적된값, 현재 요소값, 현재 인덱스, 원본 배열) => {
//     return 누적값으로 반환되는 값
// }, 초기값);

// 100_중첩된 배열을 단일하게 만들기

const numArr = [1, 2, 3, 4, 5]
const result = numArr.reduce((acc, el) => {
    return acc + el
}, 0);
// 0+1, 1+2, 3+3, 6+4, 10+5
console.log(result);

// 100_중첩된 배열을 단일하게 만들기

const arr = [1,[2,3],[4,5,6],['배열', '나열하기'], 'JavaScript'];
const result1 = arr.reduce((acc1, el1) => {
    return acc1.concat(el1);
}, []); // 초기값 빈배열 대입 []
console.log(result1)
