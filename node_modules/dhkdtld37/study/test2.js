const value = 'hello!';

function myFunction() {
	const value = 'bye';
	const anotherValue = 'world';
	function functionInside() {
		console.log('functionInside: ');
		console.log(value);
		console.log(anotherValue);
	}
	
	functionInside();
}

myFunction()
console.log('global scope : ');
console.log(value);
console.log(anotherValue);


