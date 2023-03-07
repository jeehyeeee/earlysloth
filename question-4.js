const date = ["얼리슬로스_20230202","얼리슬로스_20230101","얼리슬로스_20230102","얼리슬로스_20230103","얼리슬로스_20230105","얼리슬로스_20230307"]
const movie = ["명량","극한직업","신과함께","국제시장","어벤져스","겨울왕국2"]
// 두 배열을 활용해서 아래처럼 나오게 함수를 만들어주세요.
//1.
//[ '명량_20230202', '극한직업_20230101', '신과함께_20230102', '국제시장_20230103', '어벤져스_20230105', '겨울왕국2_20230307' ]
//이렇게 리턴시켜주세요.


// for (let i = 0; i < date.length; i++) {
//     let result = movie[i] + date[i].slice(5)
//     console.log(result)
//     newArr.push(result)
// }
//movie[i] -> movie의 i번째 배열
// console.log(newArr)

const newArr = date.map((item, index) => {
    return movie[index] + item.slice(5)
})
//newArr.push()
console.log(newArr)

// 첫번째 인자 배열안에 있는 값(요소) item
// 두번째 index 몇번쨰 순서 
// item, index 고정되어있음 -> 걍 외우기

date.forEach((item, index) => {
    console.log(movie[index] + item.slice(5))
})

// map은 자동으로 새 배열을 만들기때문에 let newArray = [] 이런거 선언안해도됨
// 앞에 const로 선언해주고 바로 만들면됨





//2.
//'명량_20230202'
//'극한직업_20230101'
//'신과함께_20230102'
//'국제시장_20230103'
//'어벤져스_20230105'
//'겨울왕국2_20230307'
//



//위 처럼나오게 console.log를 찍어주세요.