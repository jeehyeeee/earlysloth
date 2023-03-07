//23_논리연산자 예제
// 불리언 값으로 반환
// AND연산자 &&
// OR연산자 ||
// NOT연산자 !

// AND 논리연산자 &&
console.log(true && true); // t
console.log(true && false); // f
console.log('문장' == '문장' && 5 == 5); // t
console.log(5 == 5 && '다른 문장1' == '다른 문장2'); //f

// OR 연산자 ||
console.log(true || true); // t
console.log(false || false); // f
console.log('문장' == '문장' || 5 == 10); // t

// NOT 연산자 !
console.log(!true); // f
console.log(!false); // t
console.log(!5); // f
console.log(!'문장'); // f
console.log(!!5); // t not+not = false+false -> true
console.log(!!'문장'); // t