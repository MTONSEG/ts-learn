class AppleCharger {

	useLightning(): void {
		console.log(`Charging Apple Device`);
	}
}

class AndroidCharger {

	useTypeC(): void {
		console.log(`Charging Android Device`);
	}
}

class LightningToTypeCAdapter extends AndroidCharger {
	constructor(private device: AndroidCharger) {
		super();
	}

	useLightning(): void {
		this.device.useTypeC();
	}
}


let appleCharger = new AppleCharger();
let androidCharger = new AndroidCharger();

let adapter = new LightningToTypeCAdapter(androidCharger);

adapter.useLightning();

