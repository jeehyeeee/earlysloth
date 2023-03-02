// 82_배열 앞에 요소 추가하기(unshift)
// 87_배열 맨 앞 요소 추출하기(shift)

// unshift
const festa = ['mang']
festa.unshift('chimmy')
festa.unshift('tata')
festa.unshift('cooky')
festa.unshift('koya')
festa.unshift('rj')

festa.forEach(name => {
    console.log(name);
});

// shift  -> 호출과 동시에 원본배열 수정됨!
const arr = [1, 2, 3];
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift());
console.log(arr.shift()); // 반환할 요소 없으므로 undefined 출력