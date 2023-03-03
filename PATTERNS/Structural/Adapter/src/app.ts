interface TypeC {
	useTypeC(): void;
}

interface Lightning {
	useLightning(): void;
}
class AppleCharger implements Lightning {

	useLightning(): void {
		console.log(`Charging Apple Device`);
	}
}

class AndroidCharger implements TypeC {

	useTypeC(): void {
		console.log(`Charging Android Device`);
	}
}

class LightningToTypeCAdapter implements Lightning {
	constructor(private device: TypeC) {}

	useLightning(): void {
		this.device.useTypeC();
	}
}


let appleCharger = new AppleCharger();
let androidCharger = new AndroidCharger();

let adapter = new LightningToTypeCAdapter(androidCharger);

adapter.useLightning();

