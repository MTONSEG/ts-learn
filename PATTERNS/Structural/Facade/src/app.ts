class Engine {
	turnCrankshaft(): void {
		console.log('Крутить коленвал');
	}
}

class Gearbox {
	setGear(gear: string): void {
		console.log(`Включить ${gear} передачу`);
	}
}

class FuelPump {
	fuelSupply(): void {
		console.log('Подача топлива в двигатель');
	}
}


class Car {
	private engine: Engine;
	private gearbox: Gearbox;
	private fuelPump: FuelPump;

	constructor() {
		this.engine = new Engine();
		this.gearbox = new Gearbox();
		this.fuelPump = new FuelPump();
	}

	starCar(): void {
		this.fuelPump.fuelSupply();
		this.engine.turnCrankshaft();
		this.gearbox.setGear('D');
	}

}



let audi = new Car();

audi.starCar();