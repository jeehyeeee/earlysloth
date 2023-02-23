// 28_객체이해하기1
// 함수 객체 안에 적힌 this는 그 함수를 메소드로 가지고 있는 객체를 가르킴

let family = {
    'address' : 'Seoul',
    members: {},
    addFamily: function(age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        };
        // addFamliy라는 함수를 객체로 받고 age, name, role을 매개변수로 받음
        // this. 라는 키워드로 부모인 family의 객체인 members 속성으로 접근하고 role이라는 변수할당 ? family.members[role] 
        // members에 role에 들어가는 값을 받음
    },
     getHeadcount: function() {
        return Object.keys(this.members).length;
    }
};
family.addFamily(30, 'chloe', 'aunt')

/*
members = {
    aunt: {
        age: 30,
        name: "chloe"
    }
}
*/
family.addFamily(3, 'lyn', 'niece')
family.addFamily(10, 'dangdangi', 'dog')
//console.log(family.getHeadcount());  // 3
console.log(family);


// 변수 family 에 members, addFamily(함수) 객체 대입, addFamliy 함수 실행 시 this. 키워드로 famliy 에 접근함
// getHeadcount에 함수리터럴 대입
// Object.keys() 메소드는 주어진 객체의(this.members) 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다. 키 값을 배열로 나열
// 공백이나 한글과 같이 식별자에 허용되지 않는 문자가 들어간 속성 이름을 정의할 때는 반드시 문자열 표기(따옴표)를 사용해야 한다.



