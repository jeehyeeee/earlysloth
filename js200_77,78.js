// 77_특정 문자열 포함 여부 확인(includes)
// 문자열.includes(문자열, 인덱스) -> 두번째 인자 인덱스는 필수값 아님, 없으면 기본값 0 인덱스부터 확인

// 78_문자열 대소문자 변환하기(toLowerCase, toUpperCase)

const str = 'Make your lives extraordinary';
console.log(str.includes('Make'));  // t
console.log(str.includes('Make', 1)); // f  -> 인덱스 1부터 확인 시 일치하는 문자열 확인불가

// 78_문자열 대소문자 변환하기(toLowerCase, toUpperCase)

console.log('Find Your Own Voice'.toLowerCase());  // find your own voice
console.log('Find Your Own Voice'.toUpperCase());  // FIND YOUR OWN VOICE

const value = 'Find Your Own Voice';
console.log(value.toLowerCase() === value.toUpperCase());  // f