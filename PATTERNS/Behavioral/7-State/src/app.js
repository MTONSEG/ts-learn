class Status {
    constructor(message) {
        this.message = message;
        this.getMess = () => { console.log(this.message); };
        this.setMess = (message) => { this.message = message; };
    }
    ;
}
class WaitingForPay extends Status {
    constructor() {
        super('Waiting for Payment');
    }
    next(order) {
        order.setStatus(new Shipping());
        order.getStatus();
    }
}
class Shipping extends Status {
    constructor() {
        super('Order shipping');
    }
    next(order) {
        order.setStatus(new Delivered());
        order.getStatus();
    }
}
class Delivered extends Status {
    constructor() {
        super('Delivered');
    }
    next(order) {
        console.log('Order complete!');
    }
}
class Canceled extends Status {
    constructor() {
        super('Canceled');
    }
    next(order) {
        console.log('This order is canceled');
    }
}
class Order {
    constructor(status) {
        this.status = status;
    }
    setStatus(status) {
        this.status = status;
    }
    getStatus() {
        this.status.getMess();
    }
    changeStatus() {
        this.status.next(this);
    }
    cancelOrder() {
        if (this.status instanceof WaitingForPay) {
            this.setStatus(new Canceled());
            this.getStatus();
        }
        else {
            console.log('You cannot cancel this order');
        }
    }
}
let order = new Order(new WaitingForPay());
order.getStatus();
order.changeStatus();
order.cancelOrder();
order.changeStatus();
order.changeStatus();
//# sourceMappingURL=app.js.map