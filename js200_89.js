// 89_배열 인덱스로 특정 요소 수정하기(splice)
// Array.splice(시작 인덱스, 삭제할 요소의 개수, 추가될 요소들 ...)

const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(4, 1)
console.log(fruits);
fruits.splice(4, 0, 'grape')
console.log(fruits);
fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon')
console.log(fruits);