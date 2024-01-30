// 보통은 익명 함수로 사용하나, 함수 표현식처럼 변수에 할당하여 사용 가능'
const sum = ( a, b ) => a + b;


// 함수 인자가 없거나 2개 이상일 경우 그리고 가변 인자를 사용할 경우 괄호가 필요
() => console.log('empty call');
(a, b, c) => a + b + c;
(...rest) => rest.reduce((a, b) => a + b, 0); 	// addAll


// 함수 본문이 2줄 이상인겨우 {}로 감싸야함
(iterator, needles) => {
	for (let o of needles) {
		if (iterator.indexOf(o) === -1) return false;
	}
	return true;
}


// {}로 감싼 경우 값을 반환하려면 본문 줄 수에 상관없이 return keyword를 사용해야 합니다.
const f = x => { return x };
// f(3) -> 3;

const f2 = x => { x };
// f2(3) -> undefined;

