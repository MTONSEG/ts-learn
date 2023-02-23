class Payment {
    constructor() {
        this.setName = (name) => { this.name = name; };
        this.setBalance = (balance) => { this.balance = balance; };
        this.canPay = (check) => this.balance >= check;
    }
    pay(check) {
        if (this.canPay(check)) {
            console.log('Success');
        }
        else if (this.nextPay != null) {
            this.nextPay.pay(check);
        }
        else {
            console.log('Payment failed');
        }
    }
    setPayer(payer) {
        this.nextPay = payer;
        return payer;
    }
}
class Visa extends Payment {
    constructor() {
        super();
        this.setName('Visa');
        this.setBalance(100);
    }
}
class Paypal extends Payment {
    constructor() {
        super();
        this.setName('PayPal');
        this.setBalance(100);
    }
}
class Mastercard extends Payment {
    constructor() {
        super();
        this.setName('MasterCard');
        this.setBalance(200);
    }
}
let paypal = new Paypal();
let visa = new Visa();
let mastercard = new Mastercard();
paypal.setPayer(visa).setPayer(mastercard);
console.log(paypal.pay(200));
//# sourceMappingURL=app.js.map