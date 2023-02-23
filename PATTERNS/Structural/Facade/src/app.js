class Engine {
    turnCrankshaft() {
        console.log('Крутить коленвал');
    }
}
class Gearbox {
    setGear(gear) {
        console.log(`Включить ${gear} передачу`);
    }
}
class FuelPump {
    fuelSupply() {
        console.log('Подача топлива в двигатель');
    }
}
class Car {
    constructor() {
        this.engine = new Engine();
        this.gearbox = new Gearbox();
        this.fuelPump = new FuelPump();
    }
    startCar() {
        this.fuelPump.fuelSupply();
        this.engine.turnCrankshaft();
        this.gearbox.setGear('D');
    }
}
let audi = new Car();
audi.startCar();
//# sourceMappingURL=app.js.map