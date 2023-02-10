class MazdaCar {
    constructor(model) {
        this.brand = 'Mazda';
        this.color = 'white';
        this.gps = false;
        this.model = model;
    }
    getFullName() {
        return `${this.brand} ${this.model}`;
    }
    setColor(color) {
        this.color = color;
    }
    setGps() {
        this.gps = true;
    }
    clone() {
        let copy = Object.create(this);
        copy.brand = this.brand;
        copy.model = this.model;
        copy.color = this.color;
        copy.gps = this.gps;
        return copy;
    }
}
const mazda3 = new MazdaCar('3');
const mazda6 = new MazdaCar('6');
const mazda3WithGps = mazda3.clone();
const mazda6Black = mazda6.clone();
mazda3WithGps.setGps();
mazda6Black.setColor('black');
console.log(mazda3WithGps.getFullName());
//# sourceMappingURL=app.js.map