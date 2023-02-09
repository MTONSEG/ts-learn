class Car {
    constructor() {
        this.signaling = false;
        this.climateSys = false;
        this.gps = false;
    }
    go() {
        for (let i = 1; i <= this.wheels; i++) {
            console.log(`Коллесо ${i} крутится вперед`);
        }
    }
    stop() {
        for (let i = 1; i <= this.wheels; i++) {
            console.log(`Коллесо ${i} остановилось`);
        }
    }
    toggleEngine() {
        if (this.runEngine) {
            this.runEngine = false;
        }
        else {
            this.runEngine = true;
        }
    }
    openDoor(door) {
        console.log(`Открыть ${door} `);
    }
    setBrand(brand) {
        this.brand = brand;
    }
    setModel(model) {
        this.model = model;
    }
    setEngine(engine) {
        this.engine = engine;
    }
    setTransmission(gearbox) {
        this.transmission = gearbox;
    }
    setWheels(num) {
        this.wheels = num;
    }
    setSignal(value) {
        this.signaling = value;
    }
    setClimateSys(value) {
        this.climateSys = value;
    }
    setGps(value) {
        this.gps = value;
    }
    setDoors(num) {
        this.doors = num;
    }
}
class CarBuilder {
    constructor() {
        this.product = new Car();
    }
    setBrand(brand) {
        this.product.setBrand(brand);
        return this;
    }
    setModel(model) {
        this.product.setModel(model);
        return this;
    }
    setEngine(engine) {
        this.product.setEngine(engine);
        return this;
    }
    setTransmission(gearbox) {
        this.product.setTransmission(gearbox);
        return this;
    }
    setWheels(num) {
        this.product.setWheels(num);
        return this;
    }
    setSignal() {
        this.product.setSignal(true);
        return this;
    }
    setClimateSystem() {
        this.product.setClimateSys(true);
        return this;
    }
    setGPS() {
        this.product.setGps(true);
        return this;
    }
    setDoors(num) {
        this.product.setDoors(num);
        return this;
    }
    build() {
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
console.log(hondaCivic);
//# sourceMappingURL=app.js.map