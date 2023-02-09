class Fruit {
    constructor(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static createGroup(...rest) {
        return rest;
    }
    static sort(arr, rank) {
        for (let i = 0; i < arr.length; i++) {
            for (let k = 0; k < arr.length - 1; k++) {
                let first = arr[k][rank];
                let second = arr[k + 1][rank];
                if (first > second) {
                    let save = arr[k];
                    arr[k] = arr[k + 1];
                    arr[k + 1] = save;
                }
            }
        }
    }
    static mix(...rest) {
        let newName = '';
        let weight = 0;
        let randomNum = Fruit.randomInt(0, rest.length - 1);
        let color = rest[randomNum].getColor();
        for (let item of rest) {
            newName += item.getColor().slice(0, 4).toLowerCase();
            weight += item.getWeight();
        }
        weight = Number((weight / rest.length).toFixed(2));
        newName = newName[0].toUpperCase() + newName.slice(1);
        return new Apple(newName, weight, color);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getWeight() {
        return this.weight;
    }
    setWeight(weight) {
        this.weight = weight;
    }
}
class Apple extends Fruit {
    getFullInfo() {
        let name = this.getName();
        let color = this.getColor();
        return `${name} ${color}`;
    }
}
class Banana extends Fruit {
    getFullInfo() {
        let name = this.getName();
        let color = this.getColor();
        return `${name} ${color}`;
    }
}
class Cherry extends Fruit {
    getFullInfo() {
        let name = this.getName();
        let color = this.getColor();
        return `${name} ${color}`;
    }
}
let apple = new Apple('Apple', 23, 'green');
let banana = new Banana('Banana', 40, 'yellow');
let cherry = new Cherry('Cherry', 10, 'red');
let result = Fruit.mix(apple, cherry);
let groupFruits = Fruit.createGroup(apple, banana, cherry);
Fruit.sort(groupFruits, 'weight');
//# sourceMappingURL=app.js.map