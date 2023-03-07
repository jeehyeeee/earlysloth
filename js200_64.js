// 64_배열 자료형 확인하기 (isArray)
// Array.isArray

function callRoll(students) {
    if(!Array.isArray(students)) return;   // students가 배열이 아니면 return

    students.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}
const students = ['Jun', 'Ali', 'Murry', "Toby"];
callRoll(students)

// for -> forEach 바꾸기!
const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}

// 이후
items.forEach(function(item){
  copy.push(item);
});