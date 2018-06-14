


function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return this.isEven(n - 2);
    }
}

function countChar(str, char) {
    let count = 0;
    const countFn = (str, char) => {
        if(str.length > 1){
            if (str.charAt(str.length - 1) === char) {
                count++;
            } 
            return countFn(str.slice(0, str.length - 1), char);
        } else {
            if (str === char) {
                count++;
            }
            return count;
        }
    }
    return countFn(str, char);
}

function trim(str) {
    let retStr = '';
    let emptyReg = /\s/;
    const trimStart = (str) => {
        const firstChar = str.charAt(0);
        if (emptyReg.test(firstChar)) {
            str = str.slice(1);
            return trimStart(str);
        }
        return trimEnd(str);
    }
    const trimEnd = (str) => {
        const lastChar = str.charAt(str.length - 1);
        if (emptyReg.test(lastChar)) {
            str = str.slice(0, str.length - 1);
            return trimEnd(str);
        }
        return str;
    }
    return trimStart(str);
}
