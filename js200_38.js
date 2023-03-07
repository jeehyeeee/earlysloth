// 38_함수 나머지 매개변수 이해하기
// 나머지 매개변수는 배열. 한개를 받더라도 배열처리됨


function sum(...args) {
    let total = 0;
    for(let i = 0; i < args.length; i++) {
        total += args[i];
    }
    console.log(args.indexOf(1));
    return total;
}
console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
    let total = a + b;
    for(let i = 0; i < others.length; i++) {
        total += others[i];
    }
    return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));

// 38-self
function sum(...args) {
    console.log(args);
}

sum(1)
sum(1,2)
sum(1,2,3)
sum(1,2,3,4)