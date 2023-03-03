class Engine {
    constructor(type) {
        this.type = type;
        this.getType = () => this.type;
    }
    start() {
        console.log('Engine started...');
    }
    stop() {
        console.log('Engine stopped..');
    }
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
class Mazda6 {
    constructor() {
        this.setBrand = (brand) => { this.brand = brand; };
        this.getBrand = () => this.brand;
        this.setModel = (model) => { this.model = model; };
        this.getModel = () => this.model;
        this.getEngine = () => {
            if (this.engine)
                return this.engine.getType();
            return 'In process...';
        };
        this.move = () => { this.engine.start(); };
    }
    build() {
        this.setBrand('Mazda');
        this.setModel('6');
        this.setEngine();
    }
}
class DieselMazda6 extends Mazda6 {
    setEngine() {
        this.engine = new DieselEngine();
    }
    setTransmission() {
        this.transmission = 'Robot';
    }
}
class GasolineMazda6 extends Mazda6 {
    setEngine() {
        this.engine = new GasolineEngine();
    }
    setTransmission() {
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
//# sourceMappingURL=app.js.map