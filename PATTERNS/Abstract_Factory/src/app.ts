interface ICar {
	go(): void,
	stop(): void,
	openDoor(door: string): void,
	runEngine(): void,
}

interface IRoadster extends ICar {
	toggleRoof(): void,
}

interface ISUV extends ICar {
	toggleAWD(): void,
}

interface IElectro extends ICar {
	showBatteryCharge(): number,
}

class PorscheRoadster implements IRoadster {
	private brand: string = 'Porsche';
	private model: string = 'Cayman';
	private engineType: string = 'gasoline';
	private upRoof: boolean = true;

	go(): void {
		console.log('Start running')
	}

	stop(): void {
		console.log('Stop running')
	}

	runEngine(): void {
		console.log('start engine')
	}

	openDoor(door: string): void {
		console.log(`Open ${door}`);
	}

	toggleRoof(): void {
		if (this.upRoof) {
			this.upRoof = false;
		} else {
			this.upRoof = true;
		}
	}
}

class VolkswagenRoadster implements IRoadster {
	private brand: string = 'Volkswagen';
	private model: string = 'Scirocco';
	private engineType: string = 'hybrid';
	private upRoof: boolean = true;

	go(): void {
		console.log('Start running')
	}

	stop(): void {
		console.log('Stop running')
	}

	runEngine(): void {
		console.log('start engine')
	}

	openDoor(door: string): void {
		console.log(`Open ${door}`);
	}

	toggleRoof(): void {
		if (this.upRoof) {
			this.upRoof = false;
		} else {
			this.upRoof = true;
		}
	}
}


class PorscheSUV implements ISUV {
	private brand: string = 'Porsche';
	private model: string = 'Cayenne';
	private engineType: string = 'diesel';
	private onAWD: boolean = false;

	go(): void {
		console.log('Start running')
	}

	stop(): void {
		console.log('Stop running')
	}

	runEngine(): void {
		console.log('start engine')
	}

	openDoor(door: string): void {
		console.log(`Open ${door}`);
	}

	toggleAWD(): void {
		if (this.onAWD) {
			this.onAWD = false;
		} else {
			this.onAWD = true;
		}
	}
}

class VolkswagenSUV implements ISUV {
	private brand: string = 'Volkswagen';
	private model: string = 'Touareg';
	private engineType: string = 'gasoline';
	private onAWD: boolean = false;

	go(): void {
		console.log('Start running')
	}

	stop(): void {
		console.log('Stop running')
	}

	runEngine(): void {
		console.log('start engine')
	}

	openDoor(door: string): void {
		console.log(`Open ${door}`);
	}

	toggleAWD(): void {
		if (this.onAWD) {
			this.onAWD = false;
		} else {
			this.onAWD = true;
		}
	}
}

class PorscheElectro implements IElectro {
	private brand: string = 'Porsche';
	private model: string = 'Taycan';
	private engineType: string = 'electric';
	private battery: number = 90;

	go(): void {
		console.log('Start running')
	}

	stop(): void {
		console.log('Stop running')
	}

	runEngine(): void {
		console.log('start engine')
	}

	openDoor(door: string): void {
		console.log(`Open ${door}`);
	}

	showBatteryCharge(): number {
		return this.battery;
	}
}

class VolkswagenElectro implements IElectro {
	private brand: string = 'Volkswagen';
	private model: string = 'ID2';
	private engineType: string = 'electric';
	private battery: number = 67;

	go(): void {
		console.log('Start running')
	}

	stop(): void {
		console.log('Stop running')
	}

	runEngine(): void {
		console.log('start engine')
	}

	openDoor(door: string): void {
		console.log(`Open ${door}`);
	}

	showBatteryCharge(): number {
		return this.battery;
	}
}


interface VAGGroup {
	createRoadster(): IRoadster,
	createSUV(): ISUV,
	createElectro(): IElectro,
}

class PorscheFactory implements VAGGroup {

	createRoadster(): IRoadster {
		return new PorscheRoadster();
	}
	createSUV(): ISUV {
		return new PorscheSUV();
	}
	createElectro(): IElectro {
		return new PorscheElectro();
	}

}

class VolkswagenFactory implements VAGGroup {

	createRoadster(): IRoadster {
		return new VolkswagenRoadster();
	}
	createSUV(): ISUV {
		return new VolkswagenSUV();
	}
	createElectro(): IElectro {
		return new VolkswagenElectro();
	}

}


const factoryPorsche = new PorscheFactory();
const factoryVolkswagen = new VolkswagenFactory();

let roadster = factoryPorsche.createRoadster();

