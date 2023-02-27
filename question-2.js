/*
슬로스는 과일 가게를 운영하고 있습니다. 
슬로스의 과일 가게에는 바나나, 사과, 자두가 있고 각 과일의 가격은 1500원, 1000원, 1200원입니다.
슬로스를 도와 과일 이름을 입력하면, 해당 과일이 가게에 있는지 없는지, 있다면 가격을 알려주는 함수 solution을 완성해주세요.

입력 예시 1) 
"귤"

출력 예시 1)
귤 상품이 없습니다.

입력 예시 2) 
"바나나"

출력 예시 2)
바나나 상품은 1500원 입니다.
*/

const solution = str => {
    const fruits = {'바나나': 1500, '자두': 1200} 
    if(fruits[str]){
        return `${str} 상품은 ${fruits[str]}원입니다.`
    } else {
        return str + " 상품이 없습니다."
    }
    
} 

console.log(solution('바나나')) // 바나나 상품은 1500원입니다.
console.log(solution('자두')) // 바나나 상품은 1200원입니다.
console.log(solution('귤')) // 귤 상품이 없습니다.
console.log(solution('망고')) // 망고 상품이 없습니다.