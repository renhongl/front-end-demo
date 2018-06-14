


function range(start, end, step = 1) {
    let ret = [];
    if (start <= step) {
        ret.push(start);
    }
    function create(start, end, step) {
        if (start + step <= end) {
            ret.push(start + step);
            start += step;
            return create(start, end, step);
        } else {
            return ret;
        }
    }
    return create(start, end, step);
}

function sum(arr) {
    let ret = 0;
    function calc(arr) {
        if (arr.length > 0) {
            ret += arr.pop();
            return calc(arr);
        } else {
            return ret;
        }
    }
    return calc(arr);
}

function reverseArray(arr) {
    let ret = [];
    function run(arr) {
        if (arr.length > 0) {
            let last = arr.pop();
            ret.push(last);
            return run(arr);
        } else {
            return ret;
        }
    }
    return run(arr);
}

function reverseArrayInPlace(arr) {
    let temp = [];
    let index = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        temp[index++] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i];
    }
    return arr;
}