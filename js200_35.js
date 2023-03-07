/// 35_예외처리하기
// throw / try-catch-finally
// throw => 개발자가 의도한 에러, 코드에서 잘못될 가능성을 예상하고 발생시키는 에러
// try-catch-finally => try 블록 안에서 발생된 에러를 잡아냄, catch 블록으로 제어권을 넘김, finally 에러 발생 여부와 상관없이 실행되는 블록
// try 블록에서 발생된 에러 정보는 catch 문의 변수로 전달됨

// throw 문
function checkNumber(val) {
    if(typeof val !== 'number') throw '유효하지 않은 값 입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}
checkNumber(100);
checkNumber('Wrong type');
console.log('완료'); 


// try - catch - finally 문
function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값 입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}
try {
    checkNumber(100);
    checkNumber('Wrong type');
} catch (e) {
    console.log(`에러가 발생했습니다 >>> ${e}`);
} finally {
    console.log('완료');
}