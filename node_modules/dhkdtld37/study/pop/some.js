var arr = [1,2,3,4,5,6,7,8,9,10];
var isEven = function(value) {
	// value가 2의 배수이면 true를 반환
	return value % 2 === 0;
};

console.log(arr.some(isEven)); // true
			       // 하나라도 true면 true를 return
