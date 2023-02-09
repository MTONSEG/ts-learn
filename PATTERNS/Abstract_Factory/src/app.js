class PorscheRoadster {
    constructor() {
        this.brand = 'Porsche';
        this.model = 'Cayman';
        this.engineType = 'gasoline';
        this.upRoof = true;
    }
    go() {
        console.log('Start running');
    }
    stop() {
        console.log('Stop running');
    }
    runEngine() {
        console.log('start engine');
    }
    openDoor(door) {
        console.log(`Open ${door}`);
    }
    toggleRoof() {
        if (this.upRoof) {
            this.upRoof = false;
        }
        else {
            this.upRoof = true;
        }
    }
}
class VolkswagenRoadster {
    constructor() {
        this.brand = 'Volkswagen';
        this.model = 'Scirocco';
        this.engineType = 'hybrid';
        this.upRoof = true;
    }
    go() {
        console.log('Start running');
    }
    stop() {
        console.log('Stop running');
    }
    runEngine() {
        console.log('start engine');
    }
    openDoor(door) {
        console.log(`Open ${door}`);
    }
    toggleRoof() {
        if (this.upRoof) {
            this.upRoof = false;
        }
        else {
            this.upRoof = true;
        }
    }
}
class PorscheSUV {
    constructor() {
        this.brand = 'Porsche';
        this.model = 'Cayenne';
        this.engineType = 'diesel';
        this.onAWD = false;
    }
    go() {
        console.log('Start running');
    }
    stop() {
        console.log('Stop running');
    }
    runEngine() {
        console.log('start engine');
    }
    openDoor(door) {
        console.log(`Open ${door}`);
    }
    toggleAWD() {
        if (this.onAWD) {
            this.onAWD = false;
        }
        else {
            this.onAWD = true;
        }
    }
}
class VolkswagenSUV {
    constructor() {
        this.brand = 'Volkswagen';
        this.model = 'Touareg';
        this.engineType = 'gasoline';
        this.onAWD = false;
    }
    go() {
        console.log('Start running');
    }
    stop() {
        console.log('Stop running');
    }
    runEngine() {
        console.log('start engine');
    }
    openDoor(door) {
        console.log(`Open ${door}`);
    }
    toggleAWD() {
        if (this.onAWD) {
            this.onAWD = false;
        }
        else {
            this.onAWD = true;
        }
    }
}
class PorscheElectro {
    constructor() {
        this.brand = 'Porsche';
        this.model = 'Taycan';
        this.engineType = 'electric';
        this.battery = 90;
    }
    go() {
        console.log('Start running');
    }
    stop() {
        console.log('Stop running');
    }
    runEngine() {
        console.log('start engine');
    }
    openDoor(door) {
        console.log(`Open ${door}`);
    }
    showBatteryCharge() {
        return this.battery;
    }
}
class VolkswagenElectro {
    constructor() {
        this.brand = 'Volkswagen';
        this.model = 'ID2';
        this.engineType = 'electric';
        this.battery = 67;
    }
    go() {
        console.log('Start running');
    }
    stop() {
        console.log('Stop running');
    }
    runEngine() {
        console.log('start engine');
    }
    openDoor(door) {
        console.log(`Open ${door}`);
    }
    showBatteryCharge() {
        return this.battery;
    }
}
class PorscheFactory {
    createRoadster() {
        return new PorscheRoadster();
    }
    createSUV() {
        return new PorscheSUV();
    }
    createElectro() {
        return new PorscheElectro();
    }
}
class VolkswagenFactory {
    createRoadster() {
        return new VolkswagenRoadster();
    }
    createSUV() {
        return new VolkswagenSUV();
    }
    createElectro() {
        return new VolkswagenElectro();
    }
}
const factoryPorsche = new PorscheFactory();
const factoryVolkswagen = new VolkswagenFactory();
let roadster = factoryPorsche.createRoadster();
console.log(roadster);
//# sourceMappingURL=app.js.map