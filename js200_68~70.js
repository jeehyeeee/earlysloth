// 68_문자열 자르기(slice)
// '문자열'.slice(시작 인덱스, 종료 인덱스)

// 69_문자열 자르기(substring)
// '문자열'.substring(시작 인덱스, 종료 인덱스)

// 70_문자열 자르기(substr)
// '문자열'.substr(시작 인덱스, 길이)


const sentence = 'The sun will shine on us again';
console.log(sentence.slice(13))  // shine on us again
console.log(sentence.slice(13, 24)) // shine on us
console.log(sentence.slice(0)) // The sun will shine on us again
console.log(sentence.slice(0, -23))  // The sun // 음수는 인덱스를 문자열의 뒤에서부터 시작, 0은 첫번째문자, -23은 뒤에서부터 23번째 문자 
console.log(sentence.slice(50))
console.log(sentence.slice(7, 2))

const sentence1 = 'This will be the end of Wakanda';
console.log(sentence1.substring(13))  // the end of Wakanda
console.log(sentence1.substring(13, 20))  // the end
console.log(sentence1.substring(0))  // This will be the end of Wakanda
console.log(sentence1.substring(0, -20)) // 음수는 정상적으로 수행불가
console.log(sentence1.substring(50)) // 빈값
console.log(sentence1.substring(20, 13)) // the end // -> (13, 20)으로 교환하여 수행함 

const sentence2 = 'Wakanda Forever!!';
console.log(sentence2.substr(8)) // Forever!!
console.log(sentence2.substr(8, 7)) // Forever
console.log(sentence2.substr(0)) // Wakanda Forever!!
console.log(sentence2.substr(-10)) // Forever!!
console.log(sentence2.substr(0, -3))  // 두번째 인자에 음수를 넣으면 정상적으로 수행불가
console.log(sentence2.substr(30))
console.log(sentence2.substr(0, 30)) // Wakanda Forever!!