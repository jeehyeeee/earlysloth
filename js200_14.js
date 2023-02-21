//14 for in 예제
let store = { snack: 1000, flower: 5000, beverage: 2000 };
for (let item in store) {
    if (!store.hasOwnProperty(item)) {
        //console.log(`이 속성은 없다: ${item}`)
        continue;
    }
    // hasOwnProperty 속성을 이용해서 store 변수 안에 item 정보가 있는지 확인, 없으면 아래 코드 실행 안하고 continue
    // 아래 코드 실행 안하고 그 다음 요소 순회 후 출력
    console.log(item + ' 가격은 ' + store[item] + '원 입니다.')
}
// 14-self 사과 천원, 바나나 천오백원, 체리 이천원

let fruitName = { apple: 1000, banana: 1500, cherry: 2000 };
for (let fruits in fruitName) {
    if (!fruitName.hasOwnProperty(fruits)) continue;
    console.log(fruits + " 가격은 " + fruitName[fruits] + "원 입니다");
}
//hasOwnProperty 객체가 속성이 있는지 불리언 값 반환
//hasOwnProperty 속성 사용해서 ~면 continue, 

// 14-self 박씨의 이름은 ~ 입니다
 let lastName = {park: "jeehye", kim: "kwanghwi", lee: "seyoon"};
for(let firstName in lastName ) {
    if(lastName.hasOwnProperty(firstName)) 
    console.log(firstName + "의 firstname 은" + lastName[firstName] + "입니다")
} 

// 14-self jane의 나이는 ~ 입니다.
let eachAge = {jane: 27, hwi: 31, sliver: 32} ;
for(let age in eachAge) {
    if(!eachAge.hasOwnProperty(age)) continue; //변수명 eachAge에 있는 key값인 age가 있는지 확인
    console.log(age + "는" + eachAge[age] + "살 입니다.");
}

// 14-self a:200, b:300, c: 400
let price = {a:200, b:300, c: 400}
for(key in price) {
    if(price.hasOwnProperty(key));
    console.log(key + "는" + price[key] + "원 입니다.")
}