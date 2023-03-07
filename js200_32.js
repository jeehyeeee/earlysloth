//32_비구조화할당 = 구조분해할당

// 객체 비구조화할당
let obj = {a: 1, b: 2, c: 30, d: 44, e: 5}; 
let {a, c} = obj;
console.log(`a >>> ${a}`)
console.log(`c >>> ${c}`)

let {a:newA10, f:newF=5} = obj;
console.log(`newA >>> ${newA}`)
console.log(`newF >>> ${newF}`) 

const animals = {dog, cat, cow} = {
    num1: "dog",
    num2: "cat",
    num3: "cow"
}
console.log(`${animals.num3} 는 동물입니다.`);  // cow 는 동물입니다.

// 배열 비구조화할당

let arr = [1, 2, 30, 44, 5];
let [x, y, ...rest] = arr;
console.log(`0) x >>> ${x}`)
console.log(`0) y >>> ${y}`)
console.log(`0) rest >>> ${rest}`)

let [z=10, f=9] = [1]; // a에 첫번째요소인 1 할당, f에는 해당요소 없어서 기본값인 9가 할당됨
console.log(`1) z >>> ${z}`)
console.log(`1) f >>> ${f}`)

[a, f] = [f, a];
console.log(`2) a >>> ${a}`)
console.log(`2) f >>> ${f}`)

function getArr() {
    return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();
console.log(`3) a >>> ${a}`)
console.log(`3) f >>> ${f}`)

// 32-self
let arr1 = ['사과', '바나나', '망고'];
let [d, h, m] = arr1;
console.log(f); // 바나나