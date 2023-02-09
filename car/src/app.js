var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Fruit = /** @class */ (function () {
    function Fruit(name, weight, color) {
        this.name = name;
        this.weight = weight;
        this.color = color;
    }
    Fruit.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    Fruit.createGroup = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return rest;
    };
    // static sort(arr:IFruit[], rank: string): void {
    // 	for (let i: number = 0; i < arr.length; i++) {
    // 		for (let k: number = 0; k < arr.length - 1; k++) {
    // 			let first: number = arr[k][rank];
    // 			let second: number = arr[k + 1][rank];
    // 			if (first > second) {
    // 				let save: IFruit = arr[k];
    // 				arr[k] = arr[k + 1];
    // 				arr[k + 1] = save;
    // 			}
    // 		}
    // 	}
    // }
    Fruit.mix = function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var newName = '';
        var weight = 0;
        var randomNum = Fruit.randomInt(0, rest.length - 1);
        var color = rest[randomNum].color;
        for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
            var item = rest_1[_a];
            newName += item.name.slice(0, 4).toLowerCase();
            weight += item.weight;
        }
        weight = Number((weight / rest.length).toFixed(2));
        newName = newName[0].toUpperCase() + newName.slice(1);
        return {
            name: newName.slice(0, 7),
            weight: weight,
            color: color
        };
    };
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}(Fruit));
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Banana.prototype.getName = function () {
        return this.name;
    };
    return Banana;
}(Fruit));
var Cherry = /** @class */ (function (_super) {
    __extends(Cherry, _super);
    function Cherry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cherry.prototype.getName = function () {
        return this.name;
    };
    return Cherry;
}(Fruit));
var apple = new Apple('Apple', 23, 'green');
var banana = new Banana('Banana', 40, 'yellow');
var cherry = new Cherry('Cherry', 10, 'red');
var result = Fruit.mix(apple, cherry);
var groupFruits = Fruit.createGroup(apple, banana, cherry);
// Fruit.sort(groupFruits, 'name');
