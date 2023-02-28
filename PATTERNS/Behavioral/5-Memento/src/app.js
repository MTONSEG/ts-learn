class Project {
    constructor() {
        this.saveState = () => new Memento(this.code, this.version, this.date);
        this.restoreState = (memento) => {
            this.code = memento.getState();
            this.version = memento.getVersion();
            this.date = memento.getDate();
        };
    }
    setState(state, version) {
        this.code = state;
        this.version = version;
        this.date = new Date();
    }
    getState() {
        let result = this.code + '\n------' +
            '\nversion: ' + this.version +
            '\ndate: ' + this.date + '\n';
        console.log(result);
        return result;
    }
}
class Memento {
    constructor(code, version, date) {
        this.code = code;
        this.version = version;
        this.date = date;
        this.getState = () => this.code;
        this.getVersion = () => this.version;
        this.getDate = () => this.date;
    }
}
class Github {
    constructor() {
        this.setMemento = (memento) => { this.memento = memento; };
        this.getMemento = () => this.memento;
    }
}
const project = new Project();
const github = new Github();
project.setState('I am a TypeScript Code =)', '1.0.0');
project.getState();
github.setMemento(project.saveState());
project.setState('I am a very bad TypeScript Code =(', '1.0.1');
project.getState();
project.restoreState(github.getMemento());
project.getState();
//# sourceMappingURL=app.js.map