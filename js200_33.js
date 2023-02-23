// 33_symbol
// symbol은 자기 자신을 제외한 그 어떤 값과도 다른 유일무이한 값이다.
// symbol() -> 호출할 때마다 새로운 값을 만듬

/*
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 == sym2);  // false
*/ 

const symbol = Symbol();
const hello = Symbol('hello');

console.log(Number(3) === Number(3));
console.log(Symbol('symbol') === Symbol('symbol'));
console.log(Symbol() === Symbol());
console.log(typeof Symbol());

const nationility = Symbol('nationility');
const user = {
    name: 'jane'
};
user[nationility] = 'korean';
console.log(user[nationility]);

for(let key in user) {
    console.log(key);
}
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));

const symbolProperties = Object.getOwnPropertySymbols(user);
console.log(symbolProperties);
console.log(user[symbolProperties[0]]);