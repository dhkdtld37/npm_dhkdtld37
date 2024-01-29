var v = 1;
function callSomething(thing = something()) {
	console.log(thing);
}
function something() {
	return v++;
}

// 실행
callSomething(); 	// 1
callSomething(); 	// 2 만약 함수 선언 시 생성된다면 1이어야 함


