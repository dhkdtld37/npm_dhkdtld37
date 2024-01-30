// Summary
// 구조 분해 할당을 통해서 배열 또는 객체의 요소들을 새로운 변수에 손쉽게 할당 가능

const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one, two, three); 		// one two three

const o = {p: 42, q: true};
const {p, q} = o;
console.log(p, q); 			// 42 true


