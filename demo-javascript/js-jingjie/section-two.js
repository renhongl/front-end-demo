






// for (let line = '#'; line.length < 7; line+= '#') {
//     console.log(line);
// }

// let output = '';
// for (let i = 1; i <= 100; i++) {
//     if(i % 3 === 0) {
//         output += 'Fizz';
//     } else if (i % 5 === 0) {
//         output += 'Buzz';
//     } else {
//         output += i;
//     }
// }
// console.log(output);


let size = 8;
let output = '';
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        let current = ' ';
        if (j === 0 || j === size -1 || i === 0 || i === size -1) {
            current = '#';
        }
        if (j === size -1) {
            current += '\n';
        }
        output += current;
    }
}
console.log(output);

