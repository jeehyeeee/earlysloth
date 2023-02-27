// 44_클로저
// 클로저 란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말합니다.


function createCounterClosure() {
    let count = 0;
    return {
        increase: function() {
            count ++;
        },
        getCount: function() {
            return count;
        }
    };
}
const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount());
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount());

