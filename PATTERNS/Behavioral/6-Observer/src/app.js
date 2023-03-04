class Subscriber {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    update(vacancies) {
        console.log(`Hi ${this.name}\n We have some changes in vacancies:\n ${vacancies}\n=======`);
    }
}
class MyTelegram {
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getMess() {
        return '3434';
    }
}
class Test {
    constructor(name) {
        this.name = name;
        this.test.setName(name);
    }
    update(vacancies) {
        console.log(`Hi ${this.test.getName()}\n We have some changes in vacancies:\n ${vacancies}\n=======`);
    }
}
class JobSite {
    constructor() {
        this.subscribers = [];
        this.vacancies = [];
    }
    addVacancy(vacancy) {
        this.vacancies.push(vacancy);
        this.notifyObservers();
    }
    removeVacancy(vacancy) {
        let indexVacancy = this.vacancies.indexOf(vacancy);
        this.vacancies.splice(indexVacancy, 1);
        this.notifyObservers();
    }
    subscribe(observer) {
        this.subscribers.push(observer);
    }
    unsubscribe(observer) {
        let indexVacancy = this.subscribers.indexOf(observer);
        this.subscribers.splice(indexVacancy, 1);
    }
    notifyObservers() {
        for (let observer of this.subscribers) {
            observer.update(this.vacancies);
        }
    }
}
const vacancyDevSite = new JobSite();
const ivan = new Subscriber('Ivan');
const alex = new Subscriber('Alex');
const john = new Subscriber('John');
const test = new Test('Test');
vacancyDevSite.subscribe(ivan);
vacancyDevSite.subscribe(alex);
vacancyDevSite.subscribe(john);
// vacancyDevSite.subscribe(test);
vacancyDevSite.addVacancy('Junior JS Developer');
vacancyDevSite.addVacancy('Senior Java Developer');
vacancyDevSite.addVacancy('Middle Java Developer');
vacancyDevSite.addVacancy('Trainee JS Developer');
vacancyDevSite.removeVacancy('Senior Java Developer');
//# sourceMappingURL=app.js.map