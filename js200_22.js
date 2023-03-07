// 22_비교연산자 예제
// == 동등연산자(자료형이 다르면 강제로 형을 바꾼 후 비교함, 내용이 같으면 true 반환), === 일치연산자(자료형까지 일치해야 true 반환), != 부등연산자( 값이 다른 경우 true 반환), 
//!== 불일치연산자(같은 자료형에서 값의 내용이 다르거나 다른 자료형일 경우 true 반환)

console.log(5 == 5); // t
console.log("5" == 5); // t
console.log(5 == '5'); // t
console.log(5 != 1); // t
console.log(5 != "1"); // t
console.log(5 != "5"); // f -> 값은 같음
console.log(5 === 5); // t
console.log(5 === "5"); // f
console.log(5 !== 10); //t
console.log(5 !== "5"); // t -> 자료형 다름

// >=, <= 관계연산자(한쪽 값이 크거나 동일한 경우 true 반환)
console.log(5 > 3); // t
console.log(5 < 3); // f 
console.log(5 <= 6); // t
console.log(5 >= 5); // t

//대문자가 소문자보다 앞선 순서로 정렬됨, "Z" < "a"
"Italy" > "America"
"Korea" < "korea"