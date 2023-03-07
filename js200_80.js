// 80_문자열을 특정 구분자에 의해 배열로 나누기(split)
// string.split(separator, limit) -> 문자열을 'separator'로 잘라서 'limit'크기 이하의 배열에 잘라진 문자열을 저장하여 리턴

const capitals = `Prague, Czech Republic
Copenhagen,Denmark
Paris, France
Madrid, Spain
Rome, Italy`

capitals.split('\n').forEach(s => {
    const capital = s.split(',')[0];
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
})