

//Example 1
export class RenderDom{
    constructor() {

    }

    createDom() {
        throw new Error('Must need implement createDom function');
    }

    configStyle() {
        throw new Error('Must need implement configStyle function');
    }

    appendToParent() {
        throw new Error('Must need implement appendToParent function');
    }
}



export class RenderDiv extends RenderDom {
    constructor() {
        super();
    }

    createDom() {
        console.log('div created');
    }
}


//Example 2
export const renderDom = function(obj) {
    let createDom = obj.createDom || function() {
        throw new Error('Must need implement createDom function');
    }
    let configStyle = obj.configStyle || function() {
        throw new Error('Must need implement configStyle function');
    }
    let appendToParent = obj.appendToParent || function() {
        throw new Error('Must need implement appendToParent function');
    }
    let F = function() {};
    F.prototype.createDom = createDom;
    F.prototype.configStyle = configStyle;
    F.prototype.appendToParent = appendToParent;

    return F;
}















