let stringData = ['Audi', 'Volvo', 'Mercedes', 'Honda', 'Genesis', 'Hyundai', 'Mazda', 'BMW'];
let employees = [
    {
        name: 'Ivan',
        age: 32,
        salary: 300
    },
    {
        name: 'John',
        age: 22,
        salary: 230
    },
    {
        name: 'Abram',
        age: 45,
        salary: 1467
    },
    {
        name: 'Silver',
        age: 35,
        salary: 467
    }
];
let upBtn = 'up';
let downBtn = 'down';
class BaseSort {
    execute(data, btn) {
        for (let i = 0; i < data.length; i++) {
            for (let k = 0; k < data.length - 1; k++) {
                let currentEl = data[k];
                let nextEl = data[k + 1];
                if (btn === 'down') {
                    if (currentEl < nextEl) {
                        let current = data[k];
                        data[k] = data[k + 1];
                        data[k + 1] = current;
                    }
                }
                else {
                    if (currentEl > nextEl) {
                        let current = data[k];
                        data[k] = data[k + 1];
                        data[k + 1] = current;
                    }
                }
            }
        }
    }
}
class EmployeeSort {
    execute(data, btn) {
        for (let i = 0; i < data.length; i++) {
            for (let k = 0; k < data.length - 1; k++) {
                let currentObjRank = data[k];
                let nextObjRank = data[k + 1];
                if (btn === 'down') {
                    if (currentObjRank.name < nextObjRank.name) {
                        let current = data[k];
                        data[k] = data[k + 1];
                        data[k + 1] = current;
                    }
                }
                else {
                    if (currentObjRank.name > nextObjRank.name) {
                        let current = data[k];
                        data[k] = data[k + 1];
                        data[k + 1] = current;
                    }
                }
            }
        }
    }
}
class Sort {
    constructor() {
        this.setSort = (sort) => { this.sort = sort; };
    }
    execute(data, btn) {
        this.sort.execute(data, btn);
    }
}
const sort = new Sort();
sort.setSort(new BaseSort());
sort.execute(stringData, downBtn);
console.log(stringData);
sort.setSort(new EmployeeSort());
sort.execute(employees, upBtn);
console.log(employees);
//# sourceMappingURL=app.js.map