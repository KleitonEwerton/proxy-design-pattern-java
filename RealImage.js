import { Image } from "./Image";

export class RealImage extends Image {
    constructor(filename) {
        super();
        this.filename = filename;
        this.loadImageFromDisk();
    }

    loadImageFromDisk() {
        console.log('Loading image: ' + this.filename);
    }

    display() {
        console.log('Displaying image: ' + this.filename);
    }
}