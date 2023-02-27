// 43_스코프체인
// 실행 컨텍스트(Exucution Context), 렉시컬 환경(Lexical Environment)
// 실행 컨텍스트 -> 코드가 실행되기 전에 필요한 정보를 갖고있음. 실행 가능한 코드가 실행될 때 생성됨
// 렉시컬 스코프란 함수를 호출한 곳이 아닌 선언한 곳을 기준으로 스코프를 결정하는 원칙이다.


let person = 'harin';
function print() {
    let person2 = 'jay';

    function innerPrint() {
        console.log(person)
        console.log(person2)
}
innerPrint();
console.log('print finished')
}
print();
console.log('finished')

var x = 1; // global

function first() {
  var x = 10;
  second();
}

function second() {
  console.log(x);
}

first(); // ?
second(); // ?