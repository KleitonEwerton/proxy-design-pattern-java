import java.util.*;
class ProxyImage extends Image {
    constructor(filename) {
        super();
        this.realImage = null;
        this.filename = filename;
    }

    display() {
        if (this.realImage === null) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}