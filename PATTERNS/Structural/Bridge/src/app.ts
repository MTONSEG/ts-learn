interface IDevice {
	isOn(): void,
	setChannel(num: number): void,
	getChannel(): void,
	changeChannel(num: number): void,
	upVolume(): void,
	downVolume(): void,
	voiceSearch?(speak: string): void,
}

class TV implements IDevice {
	private powerOn: boolean = false;
	private channel: number = 0;
	private volume: number = 0;

	isOn(): void {
		if (this.powerOn) {
			this.powerOn = false;
		} else {
			this.powerOn = true;
		}
	}

	setChannel(num: number): void {
		if (num >= 0) this.channel = num;
	}

	changeChannel(num: number): void {
		this.channel += num;

		if (this.channel <= 0) this.channel = 0;
	}

	getChannel(): number {
		return this.channel;
	}

	upVolume(): void {
		this.volume--;

		if (this.volume <= 0) this.volume = 0;
	}

	downVolume(): void {
		this.volume++;

		if (this.volume >= 100) this.volume = 100;
	}
}


class SamsungTV extends TV { }

class LGTV extends TV {

	voiceSearch(speak: string): void {
		console.log(`Search in Google: ${speak}`)
	}

}


class Remote {
	protected device: IDevice;

	constructor(device: IDevice) {
		this.device = device;
	}

	togglePowerBtn(): void {
		this.device.isOn();
	}

	setChannel(num: number): void {
		this.device.setChannel(num);
	}

	upChannel(): void {
		this.device.changeChannel(1);
	}

	downChannel(): void {
		this.device.changeChannel(-1);
	}

	upVolume(): void {
		this.device.upVolume();
	}

	downVolume(): void {
		this.device.downVolume();
	}
}

class MagicRemote extends Remote {

	voiceOver(speak: string): void {
		this.device.voiceSearch(speak);
	}
}

const samsung = new SamsungTV();
const lg = new LGTV();

let remote = new Remote(samsung);
let magicRemote = new MagicRemote(lg);

samsung.getChannel();
lg.getChannel();

remote.upChannel();
magicRemote.setChannel(43);

magicRemote.togglePowerBtn();
magicRemote.voiceOver('Hello!');