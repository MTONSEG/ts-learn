class UI {
    getMessage(msg) {
        let message = document.querySelector('.field__mess');
        message.textContent = msg;
    }
    setMiss(location) {
        let cell = document.getElementById(location);
        cell.classList.add('miss');
        this.getMessage('Miss =(');
    }
    setHit(location) {
        let cell = document.getElementById(location);
        cell.classList.add('hit');
        this.getMessage('WOW!!! You HIT');
    }
}
class Model {
    constructor(view) {
        this.view = view;
        this.ships = ['1', '2', '3', '10'];
        this.amountHit = 0;
    }
    fire(cell) {
        let isHit = this.ships.includes(cell);
        if (isHit) {
            this.view.setHit(cell);
            this.amountHit++;
            if (this.amountHit == this.ships.length) {
                this.view.getMessage('You Win');
            }
        }
        else {
            this.view.setMiss(cell);
        }
    }
    getShips() {
        return this.ships;
    }
}
class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.amountHits = 0;
    }
    processShoot(shoot) {
        let location = this.parseShoot(shoot);
        if (location) {
            this.model.fire(location);
        }
        else {
            this.view.getMessage('This cell is not defined');
        }
    }
    parseShoot(shoot) {
        let regex = /[aA-dD][0-3]/g;
        if (regex.test(shoot)) {
            let rowTitle = shoot.charAt(0).toLowerCase();
            let columnTitle = Number(shoot.charAt(1));
            let row = document.getElementById(rowTitle);
            let currentItemId = Array.from(row.querySelectorAll('.field__cell'))[columnTitle].getAttribute('id');
            return currentItemId;
        }
        return null;
    }
}
const view = new UI();
const model = new Model(view);
const controller = new Controller(model, view);
const form = document.querySelector('.form');
if (form) {
    let input = form.querySelector('.form__input');
    let btn = form.querySelector('.form__btn');
    btn.addEventListener('click', () => {
        let value = input.value;
        controller.processShoot(value);
    });
}
//# sourceMappingURL=app.js.map