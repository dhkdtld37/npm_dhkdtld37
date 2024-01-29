class Food {
	constructor(name) {
		this.name = name;
		this.brands = [];
	}

	addBrand(brand) {
		this.brands.push(brand)
	}

	print() {
		console.log(`${this.name}을/를 파는 음식점들;`)
		console.log(this.brands.join(', '));
	}
}



const pizza = new Food ('피자');
const chicken = new Food ('치킨');

pizza.addBrand('피자헛');
pizza.addBrand('도미노 피자');
chicken.addBrand('BHC');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();


