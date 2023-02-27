// 39_스코프
// 유효범위, 변수와 매개변수가 어디까지 유효한지 나타냄
// 함수 안에서 밖에 있는 변수 접근가능, 밖에서 안으로 접근 불가

let a = 10;
console.log(a);

function print() {
    let b =  20;
    if(true) {
        let c = 30;
    }
    console.log(c);
}
print();
console.log(b);

// 변수 var로 선언 시에는 console.log(c); --> 출력됨
// let 선언 시 출력안됨, 변수 var 쓰면 헷갈릴 수 있으니 쓰지말기

// 렉시컬 스코프(=정적스코프), 다이나믹 스코프
// 자바스크립트는 대표적인 렉시컬 스코프임

let x = "global"; 
function print1() {
    console.log(x);
}
function print2() {
    let y = "local";
    print1();
}
print1();
print2();