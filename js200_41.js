// let으로 변수선언

if(true) {
    let functionScopeValue = 'global';
    let blockScopeValue = 'local';
}
//console.log(functionScopeValue);
//console.log(blockScopeValue);

// var선언 시 오류없이 잘 찍힘, let으로 선언 시 블록단위의 유효범위를 가지게 되어 if문 블록 밖에서 접근할 경우 ReferenceError 가 발생함

let value = "바깥값";
if(true) {
    console.log(value);
    let value = "안쪽값";
}