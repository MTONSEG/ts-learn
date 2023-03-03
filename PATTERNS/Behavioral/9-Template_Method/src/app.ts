class Engine {
	constructor(private type: string) { }

	start(): void {
		console.log('Engine started...')
	}
	stop(): void {
		console.log('Engine stopped..')
	}

	getType = (): string => this.type;
}

class GasolineEngine extends Engine {
	constructor() {
		super('Gasoline');
	}
}

class DieselEngine extends Engine {
	constructor() {
		super('Diesel');
	}
}

abstract class Mazda6 {
	private brand: string;
	private model: string;
	protected engine: Engine;
	protected transmission: string;

	build(): void {
		this.setBrand('Mazda');
		this.setModel('6');
		this.setEngine();
	}

	move = (): void => { this.engine.start() };

	getBrand = (): string => this.brand;

	getModel = (): string => this.model;

	getEngine = (): string => {
		if (this.engine) return this.engine.getType();

		return 'In process...';
	};


	protected setBrand = (brand: string): void => { this.brand = brand };
	protected setModel = (model: string): void => { this.model = model };

	protected abstract setEngine(): void;
	protected abstract setTransmission(): void;
}

class DieselMazda6 extends Mazda6 {
	protected setEngine(): void {
		this.engine = new DieselEngine();
	}
	protected setTransmission(): void {
		this.transmission = 'Robot';
	}
}

class GasolineMazda6 extends Mazda6 {
	protected setEngine(): void {
		this.engine = new GasolineEngine();
	}
	protected setTransmission(): void {
		this.transmission = 'CVT';
	}
}


const dieselMazda = new DieselMazda6();
const gasolineMazda = new GasolineMazda6();

console.log(dieselMazda.getBrand(), dieselMazda.getModel(), dieselMazda.getEngine());
console.log(gasolineMazda.getBrand(), gasolineMazda.getModel(), gasolineMazda.getEngine());

dieselMazda.build();
gasolineMazda.build();

console.log(dieselMazda.getBrand(), dieselMazda.getModel(), dieselMazda.getEngine());
console.log(gasolineMazda.getBrand(), gasolineMazda.getModel(), gasolineMazda.getEngine());

