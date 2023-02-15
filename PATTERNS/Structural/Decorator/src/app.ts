interface IDataSource {
	write(data: string): void,
	read(index: number): string;
}

class DataSource implements IDataSource {
	private storage: string[] = [];

	write(data: string): void {
		this.storage.push(data);
	}

	read(index: number): string {
		let storage = this.storage[index];

		if (storage == undefined) console.log(`Enter an index from 0 to ${storage.length - 1}`);

		return this.storage[index];
	}
}

let source = new DataSource();
source.write('Hello');
source.write('world');


class WordDecorator implements IDataSource {
	protected component: IDataSource;

	constructor(component: IDataSource) {
		this.component = component;
	}

	write(data: string): void {
		this.component.write(data);
	}

	read(index: number): string {
		return this.component.read(index);
	}
}

class BigWord extends WordDecorator {
	write(data: string): void {
		let result = data.toUpperCase();

		this.component.write(result);
	}
}

class ReverseWords extends WordDecorator {
	write(data: string): void {
		let result = data.split(' ').reverse().join(' ');

		this.component.write(result);
	}
}

let bigWord = new BigWord(source);
let reverseWords = new ReverseWords(source);

bigWord.write('hello');
reverseWords.write('this is a magic');

source.read(3);
