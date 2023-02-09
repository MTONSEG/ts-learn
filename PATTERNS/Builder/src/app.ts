interface ICar {
	go(): void,
	stop(): void,
	toggleEngine(): void,
	openDoor(door: string): void
}

class Car implements ICar {
	private brand: string;
	private model: string;
	private engine: string;
	private transmission: string;
	private wheels: number;
	private signaling: boolean = false;
	private climateSys: boolean = false;
	private gps: boolean = false;
	private doors: number;
	private runEngine: boolean;

	go(): void {
		for (let i: number = 1; i <= this.wheels; i++) {
			console.log(`Коллесо ${i} крутится вперед`)
		}
	}
	stop(): void {
		for (let i: number = 1; i <= this.wheels; i++) {
			console.log(`Коллесо ${i} остановилось`)
		}
	}
	toggleEngine(): void {
		if (this.runEngine) {
			this.runEngine = false;
		} else {
			this.runEngine = true;
		}
	}
	openDoor(door: string): void {
		console.log(`Открыть ${door} `);
	}

	setBrand(brand:string): void {
		this.brand = brand;
	}
	setModel(model:string): void {
		this.model = model;
	}
	setEngine(engine: string): void {
		this.engine = engine;
	}
	setTransmission(gearbox: string): void {
		this.transmission = gearbox;
	}
	setWheels(num: number): void {
		this.wheels = num;
	}
	setSignal(value: boolean): void {
		this.signaling  = value;
	}
	setClimateSys(value: boolean) {
		this.climateSys = value;
	}
	setGps(value: boolean) {
		this.gps = value;
	}
	setDoors(num: number): void {
		this.doors = num;
	}
}

interface ICarBuilder {
	setEngine(engine: string): void,
	setTransmission(gearbox: string): void,
	setWheels(num: number): void,
	setSignal(): void,
	setClimateSystem(): void,
	setGPS(): void,
	setDoors(num: number): void,
	build(): Car
}

class CarBuilder implements ICarBuilder {
	private product: Car;

	constructor() {
		this.product = new Car();
	}

	setBrand(brand: string): this {
		this.product.setBrand(brand);
		return this;
	}

	setModel(model: string): this {
		this.product.setModel(model);
		return this;
	}

	setEngine(engine: string): this {
		this.product.setEngine(engine);
		return this;
	}

	setTransmission(gearbox: string): this {
		this.product.setTransmission(gearbox);
		return this;
	}

	setWheels(num: number): this {
		this.product.setWheels(num);
		return this;
	}

	setSignal(): this {
		this.product.setSignal(true);
		return this;
	}

	setClimateSystem(): this {
		this.product.setClimateSys(true);
		return this;
	}

	setGPS(): this {
		this.product.setGps(true);
		return this;
	}

	setDoors(num: number): this {
		this.product.setDoors(num);
		return this;
	}

	build(): Car {
		return this.product;
	}
}


const hondaCivic = new CarBuilder()
	.setBrand('Honda')
	.setModel('Civic')
	.setEngine('2.0 MPI')
	.setWheels(4)
	.setDoors(4)
	.setSignal()
	.setClimateSystem()
	.setGPS()
	.build();








