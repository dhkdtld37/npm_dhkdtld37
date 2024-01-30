// Array.prototype.forEach
// 배열을 순회하며 callback을 실행합니다.
// (주의사항 : break로 순회를 멈출 수 없습니다)

const array = [1, 2, 3, 4, 5];
array.forEach(n => console.log(n));
// 1
// 2
// 3
// 4
// 5


// Array.prototype.map
// 배열을 순회하며 callback의 결과값을 새로운 배열로 반환
const array2 = [1, 2, 3, 4, 5];
const r = array2.map(n => n*n);
console.log(r);
// (5) [1, 4, 9, 16, 25]


// Array.prototype.filter
// 배열을 순회하며 callback 결과값이 true인 원소만 담은 새로운 배열을 반환합니다.
const array3 = [1, 2, 3, 4, 5];
const t = array3.filter( n => n % 2);
console.log(t);
// (3) [ 1, 3, 5 ]


// Array.prototype.reduce
// 배열을 순회하며 callback 결과값을 a에 누적합니다.( a : accumulator, b : elements)
const array4 = [1, 2, 3, 4, 5];
const h = array4.reduce((a,b) => a + b, 0 /* in itial value */);;
console.log(h); 	// 15

