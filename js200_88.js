// 88_배열 특정위치의 요소 추출하기(slice)
// 배열.slice(시작 인덱스, 끝 인덱스) -> 끝 인덱스에 있는 요소는 제외하고 그 이전까지의 요소 추출
// 원본 배열 변경안함

const arr = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr.slice(2, 3)}와 ${arr.slice(4, 5)}입니다.`)
console.log(arr.slice(0, 10));
console.log(arr.slice(3));
console.log(arr.slice(2));