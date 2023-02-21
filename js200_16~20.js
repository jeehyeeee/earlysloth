//16_숫자형 예제
// Infinity 는 값 그대로 출력함
// NaN 은 결과가 유효하지 않은 값, 숫자가 너무 커서 표현할 수 없는 값 일때 출력됨.
console.log(Infinity); // Infinity 
console.log(1 / Infinity); // 0
console.log(0 / 0); // 0 -> 유효하지 않은 값은 NaN(Not a Number) 출력
console.log(Infinity - Infinity); // NaN
console.log(0 / "말도 안되는 값"); // NaN

//17_문자형 예제
// \n -> 쉽게말하면 줄바꿈(개행)
console.log("I'm in jeju");
console.log("SeWha ocean is wonderful");
console.log(`Have you ever eaten Makgeolli?`)
console.log("This is the first line\n And this is the second")

//18_불린형 예제
console.log(7 > 3);
console.log(7 < 3);

//19_null & undefined 예제
let value1 = null;
console.log(value1); //null
console.log(typeof value1); //null x -> (typeof) object

let value2;
console.log(value2); // undefined 할당된 값 없음.
console.log(typeof value2); // undefined

//20_템플릿 예제

let cart = [
    { name: '옷', price: 2000 },
    { name: '가방', price: 1000 }
];
let numOfItems = `카트에 ${cart.length}개의 아이템이 있습니다`;
let cartTable =
    `<ul>
    <li>품목: ${cart[0].name}, 가격: ${cart[0].price}</li>
    <li>품목: ${cart[1].name}, 가격: ${cart[1].price}</li>
  </ul>`
console.log(numOfItems);
console.log(cartTable);

let personName = 'harin';
let helloString = 'hello' + personName;
let helloTemplateString = `hello${personName}`;
console.log(helloString === helloTemplateString); // True
console.log(typeof helloTemplateString); // string

  // 20-self
  // 띄어쓰기 조심~!
  let personName1 = 'jane';
  let greetingString = 'hello' + personName1;
  let greetingTemplateString = `hello${personName1}`; 
  console.log(greetingString === greetingTemplateString);
  console.log(typeof greetingTemplateString);