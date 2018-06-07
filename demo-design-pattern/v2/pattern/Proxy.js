




export class LoadImage{
    setUrl(url, target) {
        target.src = url;
    }
}

export class LoadImageProxy{
    constructor() {
        this.loadImage = new LoadImage();
    }

    setUrl(url, target) {
        this.loadImage.setUrl('./image/p2.gif', target);
        let img = new Image();
        img.onload = () => {
            setTimeout(() => {
                this.loadImage.setUrl(url, target);
            }, 2000);
        }
        img.src = url;
    }
}

export class LoadData{
    constructor() {
        this.data = {
            renhong: {
                name: 'renhongl',
                age: 18
            },
            mogu: {
                name: 'mogu',
                age: 19
            }
        };
    }

    load(name, callback) {
        setTimeout(() => {
            callback(this.data[name]);
        }, 2000);
    }
}

export class LoadDataProxy{
    constructor() {
        this.loadData = new LoadData();
        this.cache = {};
    }

    load(name, callback) {
        if (!this.cache[name]) {
            this.loadData.load(name, (data) => {
                this.cache[name] = data;
                callback(data);
            });
        } else {
            callback(this.cache[name]);
        }
    }
}
















