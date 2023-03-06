interface Observer {
	update(vacancies: string[]): void
}

interface Observed {
	subscribe(observer: Observer): void,
	unsubscribe(observer: Observer): void,
	notifyObservers(): void
}

class Subscriber implements Observer {
	constructor(private name: string) { }

	getName(): string {
		return this.name;
	}

	update(vacancies: string[]) {
		console.log(`Hi ${this.name}\n We have some changes in vacancies:\n ${vacancies}\n=======`);
	}
}

class MyTelegram {
	constructor(private name: string) { }

	getName(): string {
		return this.name;
	}
	setName(name: string) {
		this.name = name;
	}
	getMess(): string {
		return '3434';
	}
}

class MyTelegramFirst extends MyTelegram implements Observer {
	update(vacancies: string[]): void {
		console.log(`Hi ${this.getName()}\n We have some changes in vacancies:\n ${vacancies}\n=======`);
	}
}

class MyTelegramSecond implements Observer {
	constructor(
		private telegram: MyTelegram
	) { }

	update(vacancies: string[]): void {
		console.log(`Hi ${this.telegram.getName()}\n We have some changes in vacancies:\n ${vacancies}\n=======`);
	}
}




class JobSite implements Observed {
	private subscribers: Observer[] = [];
	private vacancies: string[] = [];

	addVacancy(vacancy: string): void {
		this.vacancies.push(vacancy);
		this.notifyObservers();
	}

	removeVacancy(vacancy: string): void {
		let indexVacancy = this.vacancies.indexOf(vacancy);

		this.vacancies.splice(indexVacancy, 1);
		this.notifyObservers();
	}

	subscribe(observer: Observer): void {
		this.subscribers.push(observer);
	}

	unsubscribe(observer: Observer): void {
		let indexVacancy = this.subscribers.indexOf(observer);

		this.subscribers.splice(indexVacancy, 1);
	}

	notifyObservers(): void {
		for (let observer of this.subscribers) {
			observer.update(this.vacancies);
		}
	}
}


const vacancyDevSite = new JobSite();
const telegramFirst = new MyTelegramFirst('First');
const telegramSecond = new MyTelegramSecond(new MyTelegram('Second'));



const ivan = new Subscriber('Ivan');
const alex = new Subscriber('Alex');
const john = new Subscriber('John');

vacancyDevSite.subscribe(ivan);
vacancyDevSite.subscribe(alex);
vacancyDevSite.subscribe(john);
vacancyDevSite.subscribe(telegramFirst);
vacancyDevSite.subscribe(telegramSecond);

vacancyDevSite.addVacancy('Junior JS Developer');
vacancyDevSite.addVacancy('Senior Java Developer');
vacancyDevSite.addVacancy('Middle Java Developer');
vacancyDevSite.addVacancy('Trainee JS Developer');
vacancyDevSite.addVacancy('Designer');
vacancyDevSite.removeVacancy('Senior Java Developer');