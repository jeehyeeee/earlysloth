// 86_배열 마지막 요소 추출하기(pop)
// 원본 배열도 함께 수정됨!

const arr = [1, 2, 3];
console.log(arr.pop()); // 3
console.log(arr.pop()); // 2
console.log(arr.pop()); // 1
console.log(arr.pop()); // undefined  -> 요소 갯수보다 많이 호출되면 undefined