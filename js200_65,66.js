// 65_문자열 -> 정수변환(parseInt)
// 66_실수형 숫자변환(parseFloat)

// parseInt(값, 진수(2진수 || 10진수));

console.log(parent('15'))  // 15 (두 번째 인자 없는경우, 기본값인 10진수로 변환)
console.log(parent('15', 10))  // 15 (10진수 변환)
console.log(parent('15', 2))  // 1
console.log(parent(5.15))  // 5
console.log(parent('5.15')) // 5


// parseFloat(값)
// 부동 소수점 숫자로 변환, 숫자, 소수점, 지수, 기호가 아닌 다른 값이 들어오는 경우 생략됨

console.log(parseFloat(5.55))  // 5.55
console.log(parseFloat('5.55'))  // 5.55
console.log(parseFloat('5.55 숫자의 결과값'))  // 5.55