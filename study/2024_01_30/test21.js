// 변수 교환

let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a, b); 	// 3 1


// 일부 변환 값 무시

function f() {
	return [1, 2, 3];
}

const [x, , y] = f();
console.log(x, y); 	// 1 3


// 나머지를 할당하기

const c, d, rest;
[c, d, ...rest] = [10, 20, 30, 40, 50];
console.log(c, d, rest); 	// 10 20 [30, 40, 50] 
