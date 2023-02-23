// 30_ 단축 속성명
// 단축 속성명은 변수가 미리 준비되어 있는 경우 활용 가능하며, 변수명으로 속성의 키와 값을 한번에 정의할 수 있다. 이는 객체 리터럴 선언 코드를 더 짧고 가독성 있게 만들어 준다. 

let address = 'Seoul';
let members = {};
let addFamily = function(age, name, role) {
    this.members[role] = {age, name};

};
let getHeadcount = function() {
    return Object.keys(this.members).length;
};
let family = {address, members, addFamily, getHeadcount};

family.addFamily(30, 'chloe, aunt')
family.addFamily(3, 'lyn', 'niece')
family.addFamily(10, 'dangdangi', 'dog');

console.log(family.getHeadcount());

// 30-self
let name = "jane";
let age = 27;
let favorite = "food"

let mySelf = function() {
    return this.name;
}
let jh = {name, age, favorite} ;
console.log(jh.favorite);