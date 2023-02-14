class NissanLeaf {
    useChademo() {
        console.log('Car is charging via CHAdeMO');
    }
}
class TeslaModelS {
    useCss() {
        console.log('Car is charging via CCS');
    }
}
class ChademoToCCSAdapter {
    constructor(charger) {
        this.adapter = charger;
    }
    useCss() {
        this.adapter.useChademo();
    }
}
class FileHosting {
    upload(file) {
        return `Upload file: ${file}`;
    }
    download(file) {
        return `Download file: ${file}`;
    }
    getFile(file) {
        return `Show file: ${file}`;
    }
}
class NEWFileHosting {
    addFile(file) {
        return `Upload file: ${file}`;
    }
    loadFile(file) {
        return `Download file: ${file}`;
    }
    showFile(file) {
        return `Show file: ${file}`;
    }
}
class HostingAdapter extends NEWFileHosting {
    constructor(adapter) {
        super();
        this.adapter = adapter;
    }
    addFile(file) {
        let adapted = this.adapter.upload(file);
        return `${adapted} via New Interface =)`;
    }
    loadFile(file) {
        let adapted = this.adapter.download(file);
        return `${adapted} via New Interface =)`;
    }
    showFile(file) {
        let adapted = this.adapter.getFile(file);
        return `${adapted} via New Interface =)`;
    }
}
const hosting = new FileHosting();
console.log(hosting.upload('Picture'));
const adapter = new HostingAdapter(hosting);
console.log(adapter.addFile('Video'));
//# sourceMappingURL=app.js.map