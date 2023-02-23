// 34_함수이해하기
// function 함수이름(매개변수) { 
//    함수실행부(코드블럭)
// }

// 함수표현식
let greeting_expression = function(name) {
    console.log('Hi, ' + name);
}
// 함수선언문
function greeting_declartion(name) {
    console.log('Hi, ' + name);
}
greeting_declartion('Chloe');
greeting_expression('Chloe');