// 67_문자열 양 끝의 공백없애기(trim)

const sentences = ['   ABC abc', 'ABC abc     ', `  first
second third
        forth
sentences

`];
const filterSentence = (sentences) => {
        const filtered = [];
        sentences.forEach(s => {
            filtered.push(s.trim());
        });
        return filtered;
}
console.log(filterSentence(sentences));