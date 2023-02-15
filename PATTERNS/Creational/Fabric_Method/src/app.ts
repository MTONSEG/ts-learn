interface ICar {
	clickPowerButton(): void,
	moveTransmissionSelector(item: string): void,
}

abstract class BmwFactory {
	abstract createCar(model: string): ICar;
}

class BmwElectricCarsCreator extends BmwFactory {

	createCar(model: string): ICar {
		let regex = new RegExp('[i|I][3|8]', 'g');

		if (regex.test(model)) {
			return new BmwElectric(model);
		} else {
			console.log('This model is not electric');
		}
	}

}

class BmwFuelCarsCreator extends BmwFactory {

	createCar(model: string): ICar {
		let regex = new RegExp('[x|X][1-7]', 'g');

		if (regex.test(model)) {
			return new BmwFuel(model);
		} else {
			console.log('This model is not electric');
		}
	}

}

class BmwCar implements ICar {
	private brand: string = 'BMW';
	private model: string;
	private engineRunning: boolean = false;

	constructor(model: string) {
		this.model = model;
	}

	clickPowerButton(): void {

	}
	moveTransmissionSelector(item: string): void {
		console.log(`Enabled ${item}`);
	}
}

class BmwElectric extends BmwCar {
	private engineType: string = 'electric';
}

class BmwFuel extends BmwCar {
	private engineType: string = 'fuel';
}

const bmwElectroFactory = new BmwElectricCarsCreator();
const bmwFuelFactory = new BmwFuelCarsCreator();

let x2 = bmwElectroFactory.createCar('i3');
let x5 = bmwFuelFactory.createCar('x5');

console.log(x5);

console.log(x2);

