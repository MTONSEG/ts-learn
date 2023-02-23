//Database
class Data {
}
Data.users = {};
Data.users['max'] = 'qwerty';
Data.users['nick'] = '123456';
Data.users['alex'] = 'qwe123';
class Account {
    enter() {
        console.log(`Welcome!`);
    }
    quit() {
        console.log('We are waiting for you again');
    }
}
class AccountSecurity {
    constructor(proxy) {
        this.proxy = proxy;
    }
    enter(login, password) {
        login = login.toLowerCase();
        if (this.authentication(login, password)) {
            this.proxy.enter();
        }
        else {
            console.log('Incorrect login or password');
        }
    }
    quit() {
        this.proxy.quit();
    }
    authentication(login, password) {
        return Data.users[login] === password;
    }
}
let account = new Account();
let proxy = new AccountSecurity(account);
proxy.enter('max', '');
proxy.enter('Max', 'qwerty');
//# sourceMappingURL=app.js.map