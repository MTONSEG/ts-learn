class Car {
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

	setBrand(brand: string): void {
		this.brand = brand;
	}
	setModel(model: string): void {
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
		this.signaling = value;
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
	setBrand(brand: string): this,
	setModel(model: string): this,
	setEngine(engine: string): this,
	setTransmission(gearbox: string): this,
	setWheels(num: number): this,
	setSignal(): this,
	setClimateSystem(): this,
	setGPS(): this,
	setDoors(num: number): this,
	build():Car
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


class HondaManager {
	private builder: ICarBuilder;

	constructor(builder: ICarBuilder) {
		this.builder = builder;
	}

	buildHondaCivic(): Car {
		return this.builder
			.setBrand('Honda')
			.setModel('Civic')
			.setEngine('2.0 MPI')
			.setTransmission('CVT')
			.setDoors(4)
			.setWheels(4)
			.setClimateSystem()
			.build();
	}

	buildHondaAccord(): Car {
		return this.builder
			.setBrand('Honda')
			.setModel('Accord')
			.setEngine('2.0 Turbocharged')
			.setTransmission('CVT')
			.setDoors(4)
			.setWheels(4)
			.setClimateSystem()
			.setGPS()
			.build();
	}
}

class MazdaManager {
	private builder: ICarBuilder;

	constructor(builder: ICarBuilder) {
		this.builder = builder;
	}

	buildMazda3(): Car {
		return this.builder
			.setBrand('Mazda')
			.setModel('3')
			.setEngine('2.0 SkyActive')
			.setTransmission('Aisin')
			.setDoors(2)
			.setWheels(4)
			.setClimateSystem()
			.build();
	}

	buildMazda6(): Car {
		return this.builder
			.setBrand('Mazda')
			.setModel('6')
			.setEngine('2.5 SkyActive')
			.setTransmission('Aisin')
			.setDoors(4)
			.setWheels(4)
			.setClimateSystem()
			.setGPS()
			.build();
	}
}

const carBuilder = new CarBuilder();
const hondaCivic = new HondaManager(carBuilder);
const mazdaManager = new MazdaManager(carBuilder);

let civic = hondaCivic.buildHondaAccord();
let mazda3 = mazdaManager.buildMazda3();

console.log(civic);
console.log(mazda3);


