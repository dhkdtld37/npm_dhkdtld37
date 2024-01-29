const value = 'hello';

function myFunction() {
	const value = 'bye!';
	if (true) {
		const value = 'world';
		console.log('block scope : ');
		console.log(value);
	}
	console.log('function scope : ');
	console.log(value);
}

myFunction();
console.log('global scope : ');
console.log(value);


