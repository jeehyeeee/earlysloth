// 98_배열 요소 일괄 변경하기(map)
// map메소드는 콜백함수의 리턴값에 따라 반환되는 배열 값이 바뀜

const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];
const arr2 = arr.map(el => {
    el.age = el.age + 1;
    return el;
});
const arr3 = arr.map(el => el.name);

console.log(arr2);
console.log(arr3);