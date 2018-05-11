/**
 * 定义一些通用工具
 */

class Tool{
    constructor() {

    }

    /**
     * 用于实现Object深复制
     * 
     * @param {any} target 需要获得新属性的对象
     * @param {any} source 新属性的来源对象
     * @returns 
     * 
     * @memberOf Tool
     */
    deepCopy(target, source) {
        if(typeof target !== 'object' || typeof source !== 'object') {
            return target;
        }
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