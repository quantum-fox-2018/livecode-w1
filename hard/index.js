/*
input: array of numbers
process: 
1. find max row
2. find max col
3. LOOP and PUSH array
output: array that are joined together
*/

function generateBarChart(arrNum) {
    // console.log(arrNum);
    // console.log(typeof(arrNum[0])) // number

    let arrLength = arrNum.length;
    // console.log(arrLength); // 5
    let maxRow = Math.max(...arrNum);
    // console.log(maxRow); // 7
    let index = 0

    let arrBar = [];

    let arrRow = [];
    for(let i = 0; i < 27; i++) {
        if (i == 0) {
            arrRow.push(0);
        } else if (i == 1) {
            arrRow.push('|');
        } else if (i == 3 ||i == 3+5||i == 3+5+5||i == 3+5+5+5||i == 3+5+5+5+5) {
            arrRow.push('(')
        } else if (i == 5 || i == 5+5|| i == 5+5+5|| i == 5+5+5+5|| i == 5+5+5+5+5) {
            arrRow.push(')')
        } else if (i == 4 || i == 4+5|| i == 4+5+5|| i == 4+5+5+5|| i == 4+5+5+5+5) {            
            arrRow.push(arrNum[index]);
            index++;
        } else {
            arrRow.push('-')
        }
    }

    return arrRow.join('')



}

console.log(generateBarChart([3, 6, 4, 7, 2]));