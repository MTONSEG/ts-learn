interface ICar {
	brand: string,
	model: string,
	startEngine(): void,
	stopEngine(): void,
	go(): void
}

interface IEngine {
	capacity: number,
	power: number,
	fuel: string
}

abstract class Car implements ICar {
	private engine: IEngine

	constructor(
		public brand: string,
		public model: string,
		public numWheels: number,
		private transmission: string,
	) { }

	abstract startEngine(): void;
	abstract stopEngine(): void;
	abstract go(): void;

	setEngine(capacity: number, power: number, fuel: string): void {
		this.engine = {
			capacity: capacity,
			power: power,
			fuel: fuel
		};
	}

	getEngine(): IEngine {
		return this.engine;
	}

	setTransmission(gearbox: string): void {
		this.transmission = gearbox;
	}

	getTransmission(): string {
		return this.transmission;
	}
}

class Toyota extends Car {
	startEngine(): void {
		if ('engine off') {
			console.log('start engine');
		} else {
			throw Error('the engine is already running');
		}
	}

	stopEngine(): void {
		if ('engine active') {
			console.log('turn off the engine');
		} else {
			throw Error('engine not running');
		}
	}

	go(): void {

	}
}

