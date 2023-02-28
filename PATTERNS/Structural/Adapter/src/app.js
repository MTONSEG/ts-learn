class AppleCharger {
    useLightning() {
        console.log(`Charging Apple Device`);
    }
}
class AndroidCharger {
    useTypeC() {
        console.log(`Charging Android Device`);
    }
}
class LightningToTypeCAdapter extends AndroidCharger {
    constructor(device) {
        super();
        this.device = device;
    }
    useLightning() {
        this.device.useTypeC();
    }
}
let appleCharger = new AppleCharger();
let androidCharger = new AndroidCharger();
let adapter = new LightningToTypeCAdapter(androidCharger);
adapter.useLightning();
//# sourceMappingURL=app.js.map