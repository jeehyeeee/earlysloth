// 74_특정 위치의 문자 반환하기(charAt)
// charAt()는 숫자형 인자를 받음, 괄호 안의 값은 문자열에서 인덱스를 가리키고 해당 위치의 문자를 반환

const str = 'Good afternoon, Good evening and Good night!' + '- The Truman Show, 1998';

console.log(str.charAt(0)); // G
console.log(str.charAt(5)); // a
console.log(str.charAt(14)); // ,
console.log(str.charAt(str.length)); // 69
console.log(str.charAt(500)); // 유효하지 않으면 빈 값 출력