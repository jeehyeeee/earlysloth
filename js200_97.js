// 97_특정조건을 충족하는 요소 찾기(find)

const arr = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 3},
    {name: '혜림', age: 6}
];
const myFreind = arr.find(a => a.age === 30);
console.log(myFreind);

