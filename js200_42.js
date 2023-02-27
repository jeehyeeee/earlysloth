// const로 상수선언

const URL = 'http://js.com';
URL = 'http://js.com';

if(true) {
    const URL2 = 'http://js.com';
}
cosnt.log(URL2);
// TypeError: Assignment to constant variable.
// if문 안에서 const로 정의된 URL2 변수는 블록 밖에서 접근할 경우 에러발생

const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);  // jay 30

CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);  //jay2 31
CONST_USER = {name: 'bbo'};  // 재할당만은 불가, 새로운 객체로 할당은 못하고 객체 내부의 상태만 변경가능하기때문에 TypeError 뜸


// const 변수의 타입이 객체인 경우, 객체에 대한 참조를 변경하지 못한다는 것을 의미합니다. 
// 하지만 이 때 객체의 프로퍼티는 보호되지 않습니다. 즉 재할당은 불가능하지만 할당된 객체의 내용(프로퍼티의 추가,삭제,값의 변경)은 변경할 수 있다는 뜻입니다.

// 42-self
const peroson = {name: 'jane', age: 33}
console.log(peroson.name)  // jane

peroson.name = 'david';
console.log(peroson.name)  // david (객체 내용만 변경)

peroson = {name: 'daniel'};  // 재할당 불가