interface IChademoCharger {
	useChademo(): void;
}

interface ICCSCharger {
	useCss(): void;
}

class NissanLeaf implements IChademoCharger {
	useChademo(): void {
		console.log('Car is charging via CHAdeMO');
	}
}

class TeslaModelS implements ICCSCharger {
	useCss(): void {
		console.log('Car is charging via CCS');
	}
}


class ChademoToCCSAdapter implements ICCSCharger {

	private adapter: IChademoCharger;

	constructor(charger: IChademoCharger) {
		this.adapter = charger;
	}

	useCss(): void {
		this.adapter.useChademo();
	}
}


/*
2
*/

interface IFileHosting {
	upload(file: string): string,
	download(file: string): string,
	getFile(file: string): string,
}

class FileHosting implements IFileHosting {
	upload(file: string): string {
		return `Upload file: ${file}`;
	}
	download(file: string): string {
		return `Download file: ${file}`;
	}
	getFile(file: string): string {
		return `Show file: ${file}`;
	}
}

class NEWFileHosting {
	addFile(file: string): string {
		return `Upload file: ${file}`;
	}
	loadFile(file: string): string {
		return `Download file: ${file}`;
	}
	showFile(file: string): string {
		return `Show file: ${file}`;
	}
}

class HostingAdapter extends NEWFileHosting {
	private adapter: FileHosting

	constructor(adapter: FileHosting) {
		super();

		this.adapter = adapter;
	}

	addFile(file: string): string {
		let adapted = this.adapter.upload(file);
		return `${adapted} via New Interface =)`;
	}
	loadFile(file: string): string {
		let adapted = this.adapter.download(file);
		return `${adapted} via New Interface =)`;
	}
	showFile(file: string): string {
		let adapted = this.adapter.getFile(file);
		return `${adapted} via New Interface =)`;
	}
}

const hosting = new FileHosting();

console.log(hosting.upload('Picture'));

const adapter = new HostingAdapter(hosting);

console.log(adapter.addFile('Video'))
