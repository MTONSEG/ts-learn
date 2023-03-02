abstract class Status {
	constructor(private message: string) { };

	getMess = (): void => { console.log(this.message) };
	setMess = (message: string) => { this.message = message };

	abstract next(order: Order): void;
}

class WaitingForPay extends Status {
	constructor() {
		super('Waiting for Payment');
	}

	next(order: Order): void {
		order.setStatus(new Shipping());
		order.getStatus();
	}
}

class Shipping extends Status {
	constructor() {
		super('Order shipping');
	}

	next(order: Order): void {
		order.setStatus(new Delivered());
		order.getStatus();
	}
}

class Delivered extends Status {
	constructor() {
		super('Delivered');
	}

	next(order: Order): void {
		console.log('Order complete!');
	}
}

class Canceled extends Status {
	constructor() {
		super('Canceled');
	}

	next(order: Order): void {
		console.log('This order is canceled');
	}
}


class Order {
	constructor(private status: Status) { }

	setStatus(status: Status): void {
		this.status = status;
	}

	getStatus(): void {
		this.status.getMess();
	}

	changeStatus() {
		this.status.next(this);
	}

	cancelOrder() {
		if (this.status instanceof WaitingForPay) {
			this.setStatus(new Canceled());
			this.getStatus();
		} else {
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