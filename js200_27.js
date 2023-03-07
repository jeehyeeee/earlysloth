// 27_배열

/* const arr1 = [1, 2, 3, 4, 5] ;
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[8]); */

//반복문을 사용해서 arr 모든값에 2를 더해주세요
const arr = [1,2,3,4,5,6]
for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 2
    }
    console.log(arr);

//for(let i = 0; i < arr.length; i++) = for(let i in arr) 