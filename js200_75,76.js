// 75_특정 문자열 위치 확인하기(indexOf) , 문자열에서 특정 문자열이 있는지 확인
// 76_특정 문자열 위치 확인하기(lastIndexOf), 뒤에서부터 특정 문자열 일치여부 확인

const str = 'Carpe diem, seize the day';
console.log(`"e"는 ${str.indexOf('e')}번째 인덱스에 있습니다.`)
console.log(`대문자 "C"는 ${str.indexOf('C')}번째 인덱스에 있습니다.`)
console.log(`소문자 "c"는 ${str.indexOf('c')}번째 인덱스에 있습니다.`) // c와 일치하는 문자가 없기 때문에 -1 리턴
console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있습니다.`)

const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if(str.indexOf('e') > -1) count++;
    });
    return count;
}
console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`)

// 76_특정 문자열 위치 확인하기(lastIndexOf), 뒤에서부터 특정 문자열 일치여부 확인

const str1 = 'Carpe diem, seize the day';
console.log(`"e"는 ${str1.lastIndexOf('e')}번째 인덱스에 있습니다.`)  // 20
console.log(`대문자 "C"는 ${str1.lastIndexOf('C')}번째 인덱스에 있습니다.`)
console.log(`소문자 "c"는 ${str1.lastIndexOf('c')}번째 인덱스에 있습니다.`) // c와 일치하는 문자가 없기 때문에 -1 리턴
console.log(`문자열 ", se"는 ${str1.lastIndexOf(', se')} 번째 인덱스에 있습니다.`)