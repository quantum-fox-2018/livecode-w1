/*
PSEUDOCODE
1. LOOP sebanyak num untuk buat kolom
2. LOOP sebanyak num untuk buat kolom sebanyak baris
*/

function generateBorderBox(num) {
    let mid = Math.ceil(num/2);
    // console.log(mid);

    let arrBoard = [];
    for (let i = 0; i < num; i++) {
        arrInner = [];
        for (let j = 0; j < num; j++) {
            if (i == 0 || i == num-1) {
                arrInner.push('I');
            } else if (i == 0+1 || i == num-1-1) {
                if (j == 0 || j == num-1) {
                    arrInner.push('I');
                } else {
                    arrInner.push(' ');
                }
            } else if (i == 0+1+1 || i == num-1-1-1) {
                if (j == 0+1 || j == num-1-1) {
                    arrInner.push(' ');
                } else {
                    arrInner.push('I');
                }
            } else if (i == mid-1) {
                if (j == 0 || j == 0+2 || j == num-1 || j == num-1-2) {
                    arrInner.push('I');
                } else if (j == mid-1) {
                    arrInner.push('*');
                } else {
                    arrInner.push(' ');
                }
            } else {
                if (j == 0 || j == 0+2 || j == num-1 || j == num-1-2) {
                    arrInner.push('I');
                } else {
                    arrInner.push(' ');
                }
            }
        }
        arrBoard.push(arrInner.join(''));
    }

    return arrBoard.join('\n');

}

console.log('=================9====================');
console.log(generateBorderBox(9));
console.log('=================13====================');
console.log(generateBorderBox(13));
console.log('=================23====================');
console.log(generateBorderBox(23));