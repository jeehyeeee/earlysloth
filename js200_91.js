// 91_배열 순환하기(forEach)
// Array.forEach(callback function)

const arr = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2}
];
arr.forEach((el) => {
   console.log(el.name);
 })
// arr1.forEach((item, index) => {
//     console.log()
// })