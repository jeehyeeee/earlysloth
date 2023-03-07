// 배열함수를 이용해서 다음 배열에서 index 가 짝수인 것만 골라서 곱해봅시다. 1부터 곱해 나갑시다.
// ex) [1,2,3,4,5] 1 * 1 * 3 * 5 = 15
// ex) [2,7,3,7] 1 * 2 * 3 = 6

//reduce, 0도 짝수
// 첫번째는 누적되는 수 -> acc
// 두번째는 배열의 현재 요소 -> cur
// 세번째는 현재 인덱스 -> index
// 네번째는 호출한 배열 -> array


const solution1 = (arr) => {
    return arr.reduce((acc, cur, i) => {  // 화살표함수여도 중괄호있으면 무조건 리턴적기
        if (i % 2 === 0) {
            return acc * cur
        }
        return acc   // acc가 누적값이기 때문에 리턴하기
    }, 1)
}
console.log(solution1([2, 7, 3, 7, 3, 4, 5, 6, 7, 4, 3, 3, 2]))


// const arr = [1, 3, 4, 5, 6, 7]
// const result = arr.reduce((acc, el) => {
//     return acc + el
// }, 0)
// console.log(result)

//solution([1,2,3,4,5]) -> 15
//solution([2,7,3,7]) -> 6

//----------------------------------------------------------------------------------------------------------------
//아래 engineers에서 lang이 javascript인 사람을 필터해서 age가 많은 순에서 적은 순으로 정렬하세요.
const engineers = [
    { id: 1, lang: "java", age: 23 },
    { id: 2, lang: "javascript", age: 31 },
    { id: 3, lang: "python", age: 15 },
    { id: 4, lang: "java", age: 44 },
    { id: 5, lang: "java", age: 47, },
    { id: 6, lang: "javascript", age: 35 },
    { id: 7, lang: "python", age: 21 },
    { id: 8, lang: "java", age: 29 },
];

const solution2 = (engineers) => {
    const idAge = "age";
    return engineers.sort((el, i) => {
        return i[idAge] - el[idAge]  // 내림차순
    }).filter(engineers => engineers.lang === "javascript")

};
console.log(solution2(engineers))

//solution2(engineers) 
//   [
//     { id: 6, lang: 'javascript', age: 35 },
//     { id: 2, lang: 'javascript', age: 31 }
//   ]
//----------------------------------------------------------------------------------------------------------------

//아래 credit은 000원이 생략되어 있습니다. 
// credit에 접근해서 ,000 을 추가해서 [ '30,000', '70,000', '120,000' ] 이렇게 return해주세요
const example = {
    id: 1,
    name: 'john',
    credit: {
        bank: 30,
        tel: 70,
        homeService: 120
    }
}
const solution3 = (example) => {
    // 크레딧에 접근 ,밸류값들을 뽑아낸다 3070120, ",000" 붙인다 맵
    const newExample = Object.values(example.credit).map(item => item + ",000")
    return newExample;
}
console.log(solution3(example))
//solution3(example) [ '30,000', '70,000', '120,000' ]


