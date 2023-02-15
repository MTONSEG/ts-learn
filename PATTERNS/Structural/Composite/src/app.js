class Equipment {
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
}
class Display extends Equipment {
    constructor() {
        super();
        this.setName('LG 32E342B');
        this.setPrice(350);
    }
}
class Keyboard extends Equipment {
    constructor() {
        super();
        this.setName('Logitech G Pro');
        this.setPrice(200);
    }
}
class Mouse extends Equipment {
    constructor() {
        super();
        this.setName('Logitech MX Master 3S');
        this.setPrice(100);
    }
}
class Motherboard extends Equipment {
    constructor() {
        super();
        this.setName('Asus ROG Crosshair X670E');
        this.setPrice(650);
    }
}
class GraphicCard extends Equipment {
    constructor() {
        super();
        this.setName('Asus PCI-E GeForce RTX3060');
        this.setPrice(480);
    }
}
class RAM extends Equipment {
    constructor() {
        super();
        this.setName('Kingston Fury DDR4 32GB');
        this.setPrice(95);
    }
}
class SSD extends Equipment {
    constructor() {
        super();
        this.setName('Crucial MX500 1TB');
        this.setPrice(83);
    }
}
class CompositeEquipment extends Equipment {
    constructor() {
        super(...arguments);
        this.equipments = [];
    }
    add(equipment) {
        this.equipments.push(equipment);
    }
    remove(equipment) {
        let indexElem = this.equipments.indexOf(equipment);
        this.equipments.splice(indexElem, 1);
    }
    getPrice() {
        return this.equipments
            .map(equipment => equipment.getPrice())
            .reduce((acc, value) => acc + value);
    }
}
class SystemUnit extends CompositeEquipment {
}
class PC extends CompositeEquipment {
}
const display = new Display();
const keyboard = new Keyboard();
const mouse = new Mouse();
const motherboard = new Motherboard();
const graphicCard = new GraphicCard();
const ram = new RAM();
const ssd = new SSD();
const sysUnit = new SystemUnit();
const pc = new PC();
sysUnit.add(motherboard);
sysUnit.add(ram);
sysUnit.add(ssd);
sysUnit.add(graphicCard);
pc.add(display);
pc.add(keyboard);
pc.add(mouse);
pc.add(sysUnit);
console.log(pc.getPrice());
//# sourceMappingURL=app.js.map