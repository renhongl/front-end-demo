/**
 * 
 */

class Tool{
    constructor() {

    }

    deepCopy(target, source) {
        for(let key of Object.keys(source)) {
            if(source[key] !== 'object'){
                target[key] = source[key];
            }else {
                this.deepCopy(target[key], source[key]);
            }
        }
        return target;
    }
}

let tool = new Tool();
export default tool;