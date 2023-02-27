// 함수 호이스팅

hello();
function hello() {
    console.log("안녕하세요");
}

hello2();
let hello2 = function() {
    console.log("안녕하세요");
}
// ReferenceError 뜸 -> 호이스팅이 이루어지지않아 hello2가 선언되지않음 , 변수 var 이용 시 TypeError뜸

