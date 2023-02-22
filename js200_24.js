// 24_삼항연산자
// 조건문 ? 표현문 : 표현문2
// 조건문이 참이면 '?' 뒤에있는 문장 실행, 거짓이면 ':' 뒤에있는 문장 실행

let condition = 5 > 10; // f
condition ? console.log('Left') : console.log('Right'); // right실행
let result = condition ? (                              // result에 condition 값 대입(f)
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식1"
) : (
    console.log("삼항 연산식의 두 번째 표현식 입니다."),   // 실행
    "표현식2"
);
console.log(result); 
// Right
// 삼항 연산식의 두 번째 표현식 입니다.
// 표현식2