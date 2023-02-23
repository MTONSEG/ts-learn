//Database

class Data {
	static users = {};
}

Data.users['max'] = 'qwerty';
Data.users['nick'] = '123456';
Data.users['alex'] = 'qwe123';

// ----- //


interface IAccount {
	enter(login?: string, password?: string): void,
	quit(): void,
}

class Account implements IAccount {
	enter(): void {
		console.log(`Welcome!`);
	}
	quit(): void {
		console.log('We are waiting for you again');
	}
}

class AccountSecurity implements IAccount {
	constructor(private proxy: Account) { }

	enter(login: string, password: string): void {
		login = login.toLowerCase();
	
		if (this.authentication(login, password)) {
			this.proxy.enter();
		} else {
			console.log('Incorrect login or password');
		}
	}
	quit(): void {
		this.proxy.quit();
	}

	private authentication(login: string, password: string): boolean {
		return Data.users[login] === password;
	}
}

let account = new Account();
let proxy = new AccountSecurity(account);

proxy.enter('max', '');
proxy.enter('Max', 'qwerty');




