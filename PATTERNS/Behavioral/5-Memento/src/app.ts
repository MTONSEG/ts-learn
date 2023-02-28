class Project {
	private code: string;
	private version: string;
	private date: Date;

	setState(code: string, version: string): void {
		this.code = code;
		this.version = version;
		this.date = new Date();
	}

	getState(): string {
		let result = this.code + '\n------' +
			'\nversion: ' + this.version +
			'\ndate: ' + this.date + '\n';

		console.log(result);
		return result;
	}

	saveState = (): Memento => new Memento(this.code, this.version, this.date);

	restoreState = (memento: Memento): void => {
		this.code = memento.getCode();
		this.version = memento.getVersion();
		this.date = memento.getDate();
	}
}

class Memento {
	constructor(
		private code: string,
		private version: string,
		private date: Date
	) { }

	getCode = (): string => this.code;

	getVersion = (): string => this.version;

	getDate = (): Date => this.date;
}

class Github {
	private memento: Memento;

	setMemento = (memento: Memento): void => { this.memento = memento };

	getMemento = (): Memento => this.memento;
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