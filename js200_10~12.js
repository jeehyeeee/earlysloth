//10~12_조건문 if, else if, switch

//10_ if 예제

 let result = true;
if(result) console.log('result가 참 입니다.');
if(!result) console.log('실행되지 않습니다.');
if(result) {
    console.log('result의 실행결과')
    console.log('>> 참 입니다.'); 
} 

// 11_ if, elseif, else 예제

let num = 8;
if(num === 1) {
    console.log('num는 1 입니다');
} else if(num === 2) {
    console.log('num는 2 입니다');
} else if(num === 3) {
    console.log('num는 3 입니다');
} else {
    console.log('num는 1,2,3 중 해당되는 것이 없습니다.');
}

// 숫자 1 입력 시 "이것은 1입니다", 그렇지 않으면 "이것은 1이 아닙니다."

let number = 4;
if (number === 1) {
    console.log("이것은 1입니다.")
}
else { 
    console.log("이것은 1이 아닙니다.")
}

// 이름이 jane이면 "hello", sina면 "hi", 둘 다 아니면 "bye"출력

let name1 = "hwi";
if(name1 === "jane") {
    console.log("hello");
} else if(name1 === "sina") {
    console.log("hi");
} else {
    console.log("bye");
}

// 12_switch 예제
let subject = '파이썬';
switch (subject) {
    case 'c언어':
        console.log('초보자를 위한 c++ 200제');
        break;
    case '자바스크립트':
        console.log('초보자를 위한 자바스크립트 200제');
        break;
    case '파이썬':
        console.log('초보자를 위한 파이썬 200제');
        break;
    default:
        console.log('이젠 초보자가 아닙니다.')
        break;
}   
// apple 입력시 스티브잡스 출력
// samsung 입력시 이건희 출력
// hyundai 입력시 정주영 출력
// 셋다 아닐 시 default 박지혜 출력

let companyName = "애플"
switch (companyName) {
    case "apple" :
        console.log("스티브잡스");
        break;
    case "samsung" :
        console.log("이건희");
        break;
    case "hyundai" :
        console.log("정주영");
        break;
    default :
        console.log("박지혜"); 
        break;
}