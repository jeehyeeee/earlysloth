// 13_반복문 for

//13_for 예제
//0부터 시작, 10이하면 9까지 -> 0번째 ~ 9번째
for(i = 0; i < 10; i++) {
    console.log(i + " 번째 반복 문장 입니다.");
}
//13 예제
let hometown1 = [
    { name: '남준', place: '일산', city: '고양' },
    { name: '진', place: '과천' },
    { name: '호석', place: '광주', city: '전라도' },
    { name: '지민', place: '부산', city: '경상도' },

];

for (let i = 0; i < hometown1.length; i++) {
    let h = hometown1[i];
    if (!h || !h.city) {
        // h가 없거나 h의 city가 없을때 (ex. null, undefined, NaN 일 때 -> if문 조건식 안에있을 때) 그 뒤의 문장 실행안함 (continue)
        // || -> 둘 중 하나라도 참 일때 true
        // 진은 city 가 없으므로 그 뒤의 문장 실행안함, 1번째 실행이 진이라서 아예 출력안됨
        // 호석은 실행되어서 break로 빠져나옴(지민은 실행안함)
        continue;
    }

    console.log(i + ' 번째 실행입니다.');
    if (h.name === '호석') {
        console.log(h.name + '의 고향은 ' + h.city + ' ' + h.place + ' 입니다.');
        break;
    }
}

// 13-self
// 1부터 시작, 2의배수 출력
for(i = 1; i <= 10; i++) {
    if(i % 2 == 0){
        console.log(i + " 는 2의 배수입니다.");
    }
}

// 13-self
// 0부터 30까지 홀수만 출력
for(j = 1; j <= 30; j++ ) {
    if(j % 2 == 1 ) {
    console.log(j);
}
}