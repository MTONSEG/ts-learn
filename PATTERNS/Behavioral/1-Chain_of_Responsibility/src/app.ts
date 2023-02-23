interface IPayment {
	pay(check: number): void,
	setPayer(payer: IPayment): IPayment
}

abstract class Payment implements IPayment {
	private name: string;
	private balance: number;
	private nextPay: IPayment;

	pay(check: number): void {
		if (this.canPay(check)) {
			console.log('Success');
		} else if (this.nextPay != null) {
			this.nextPay.pay(check);
		} else {
			console.log('Payment failed');
		}
	}

	setPayer(payer: IPayment): IPayment {
		this.nextPay = payer;
		return payer;
	}

	setName = (name: string): void => { this.name = name };
	setBalance = (balance: number): void => { this.balance = balance };
	canPay = (check: number): boolean => this.balance >= check;
}

class Visa extends Payment {
	constructor() {
		super();
		this.setName('Visa');
		this.setBalance(100)
	}
}

class Paypal extends Payment {
	constructor() {
		super();
		this.setName('PayPal');
		this.setBalance(150)
	}
}

class Mastercard extends Payment {
	constructor() {
		super();
		this.setName('MasterCard');
		this.setBalance(200)
	}
}

let paypal = new Paypal();
let visa = new Visa();
let mastercard = new Mastercard();

paypal.setPayer(visa).setPayer(mastercard);

console.log(paypal.pay(200));