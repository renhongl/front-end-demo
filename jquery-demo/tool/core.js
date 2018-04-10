(function($, window, undefined) {
  $.extend({
    //打印日志
    log: (() =>{
      let i = 0;
      let color;
      return (data, topic, end) => {
        if(i === 0) {
          color = $.randomColor({a: 1});
        }
        if (!end) {
          console.log(`%c ${topic} before: ${data}`, `color: ${color}`);
          console.time(topic);
          i++;
          return;
        }
        console.log(`%c ${topic} after: ${data}`, `color: ${color}`);
        console.timeEnd(topic);
        i = 0;
      }
    })(),

    //冒泡排序
    bubbleSort(arr) {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    },

    //快速排序
    quickSort(arr) {
      let from = 0;
      let size = arr.length - 1;
      sort(from, size);
      function sort(from, size) {
        if (size - from > 1) {
          if (from < size) {
            let i = from;
            let j = size;
            let flag = arr[from];
            while (i < j) {
              for (; j > i; j--) {
                if (arr[j] < flag) {
                  let temp = arr[j];
                  arr[j] = arr[i];
                  arr[i] = temp;
                  break;
                }
              }
              for (; i < j; i++) {
                if (arr[i] > flag) {
                  let temp2 = arr[i];
                  arr[i] = arr[j];
                  arr[j] = temp2;
                  break;
                }
              }
            }
            sort(0, from);
            sort(from + 1, size);
          }
        }
      }
      return arr;
    },

    //判断回文，使用正则表达式与递归方法，兼容浏览器。
    palindrome(str) {
      let trimReg = /[^a-zA-Z0-9_]/g;
      let trimStr = str.replace(trimReg, "");
      let ispalindrome = parse(trimStr);
      function parse(str) {
        if (str.length === 0) {
          return true;
        }
        if (str[0] !== str[str.length - 1]) {
          return false;
        }
        return parse(str.slice(1, str.length - 1));
      }
      return ispalindrome;
    },

    //随机颜色
    randomColor({a = 0} = {}) {
      let rRandom = Math.round(Math.random() * 256);
      let gRandom = Math.round(Math.random() * 256);
      let bRandom = Math.round(Math.random() * 256);
      let aRandom = a || Math.round(Math.random() * 11)/10;
      return `rgba(${rRandom}, ${gRandom}, ${bRandom}, ${aRandom})`;
    },

    //二分查找
    binarySearch(arr, target) {
      function search(min, max) {
        let middle = Math.floor((min + max) / 2);
        if (target === arr[middle]) {
          return middle;
        }else if (target > arr[middle]) {
          return search(middle + 1, max);
        }else {
          return search(min, middle);
        }
      }
      let min = 0;
      let max = arr.length - 1;
      let index = search(min, max);
      return index;
    }

  });
})(jQuery, window);
