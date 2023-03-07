// 31_속성계산명
// 대괄호 안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 생성할 수 있다. 여기서도 JavaScript의 특징이 두드러지는 동적 할당 방식이 나온다.

let obj = {};
for(let i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

let profile = 'chloe:30' ;
let person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);

