// 94_배열 요속 특정조건을 만족하는지 확인하기(some)
// 콜백함수의 리턴값이 참을 반환할 때 까지만 배열 순환, 참 반환 시 다음 요소 처리안함

const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];

const isHyunAHere = arr.some(el => el.name == '현아');
const olderThanSix = arr.some(el => el.age > 6);

console.log(isHyunAHere);
console.log(olderThanSix);