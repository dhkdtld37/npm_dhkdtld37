var arr = [1,2,3,4,5,6,7,8,9,10];
var value = arr.reduce( function ( previousValue, currentValue, index ) {
	return previousValue + currentValue;
});

console.log( value ); // 55


