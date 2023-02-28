class Subscriber {
    constructor(name) {
        this.name = name;
    }
    update(vacancies) {
        console.log(`Hi ${this.name}\n We have some changes in vacancies:\n ${vacancies}\n=======`);
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
    addObserver(observer) {
        this.subscribers.push(observer);
    }
    removeObserver(observer) {
        let indexVacancy = this.subscribers.indexOf(observer);
        this.subscribers.splice(indexVacancy, 1);
    }
    notifyObservers() {
        for (let subscriber of this.subscribers) {
            subscriber.update(this.vacancies);
        }
    }
}
const vacancyDevSite = new JobSite();
const ivan = new Subscriber('Ivan');
const alex = new Subscriber('Alex');
const john = new Subscriber('John');
vacancyDevSite.addObserver(ivan);
vacancyDevSite.addObserver(alex);
vacancyDevSite.addObserver(john);
vacancyDevSite.addVacancy('Junior JS Developer');
vacancyDevSite.addVacancy('Senior Java Developer');
vacancyDevSite.addVacancy('Middle Java Developer');
vacancyDevSite.addVacancy('Trainee JS Developer');
vacancyDevSite.removeVacancy('Senior Java Developer');
//# sourceMappingURL=app.js.map