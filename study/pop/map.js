var arr = [1,2,3,4,5,6,7,8,9,10];
var isEven = function ( value ) {
	return value % 2 === 0;
};

var newArr = arr.map( isEven );
console.log( newArr ); 	// false, true, false, true, ... ]
