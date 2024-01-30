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


// Array.prototype.every
// 배열을 순회하며 callback의 결과값이 모두 true인 경우 true, 그렇지 않을 경우 false를 반환합니다.
const array5 = [1, 2, 3, 4, 5];
console.log(array5.every(n => n > 0));	 // true
console.log(array5.every(n => n > 4));	 // fasle


// Array.prototype.some
// 배열을 순회하며 callback의 결과값이 하나라도 true가 있을 경우 true, 그렇지 않을 경우 false를 반환합니다.
const array6 = [1, 2, 3, 4, 5];
console.log(array6.some(n => n > 100));   // false
console.log(array6.some(n => n > 4)); 	  // ture


// Array.prototype.sort
// 배열을 정렬해서 새로운 배열을 반한합니다. 이 때 비교함수를 callback으로 넣어서 정렬 결과를 조정할 수 있습니다.
const array7 = [100, 6, 89, 34, 0, 1];
console.log(array7.sort()); 		
// (6) [0, 1, 100, 34, 6, 89] // Unicode 포인트 순서에 따라 문자열처럼 처리
console.log(array7.sort((a, b) => a - b));
// (6) [0, 1, 6, 34, 89, 100]
console.log(array7.sort((a, b) => b - a));
// (6) [100, 89, 34, 6, 1, 0]



