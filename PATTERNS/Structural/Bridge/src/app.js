class TV {
    constructor() {
        this.powerOn = false;
        this.channel = 0;
        this.volume = 0;
    }
    isOn() {
        if (this.powerOn) {
            this.powerOn = false;
        }
        else {
            this.powerOn = true;
        }
    }
    setChannel(num) {
        if (num >= 0)
            this.channel = num;
    }
    changeChannel(num) {
        this.channel += num;
        if (this.channel <= 0)
            this.channel = 0;
    }
    getChannel() {
        return this.channel;
    }
    upVolume() {
        this.volume--;
        if (this.volume <= 0)
            this.volume = 0;
    }
    downVolume() {
        this.volume++;
        if (this.volume >= 100)
            this.volume = 100;
    }
}
class SamsungTV extends TV {
}
class LGTV extends TV {
    voiceSearch(speak) {
        console.log(`Search in Google: ${speak}`);
    }
}
class Remote {
    constructor(device) {
        this.device = device;
    }
    togglePowerBtn() {
        this.device.isOn();
    }
    setChannel(num) {
        this.device.setChannel(num);
    }
    upChannel() {
        this.device.changeChannel(1);
    }
    downChannel() {
        this.device.changeChannel(-1);
    }
    upVolume() {
        this.device.upVolume();
    }
    downVolume() {
        this.device.downVolume();
    }
}
class MagicRemote extends Remote {
    voiceOver(speak) {
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
//# sourceMappingURL=app.js.map