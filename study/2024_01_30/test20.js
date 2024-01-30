// 배열 구조 분해 할당

const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one, two, three);   // 출력: one, two, three


// 선언에서 분리한 할당

let a, b;
[a, b] = [1, 2];
console.log(a, b); 		// 1 2


// 할당값이 undefined일 경우

const [x = 5, y = 7, z = 9] = [1, null];
console.log(x, y, z); 		// 1 null 9

