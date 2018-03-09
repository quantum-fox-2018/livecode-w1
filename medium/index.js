function generateBorderBox(val){
    // let dimensi = val;
    let mid = Math.ceil(val/2);
    let bigarr = [];
    for(let i=1; i<=val; i++){
        let arr = [];
        for(let j=1; j<=val; j++){
            if(j == 1 || i == 1 || j == (val) || i == (val)){
                arr.push('I')
            } else if(i == 3 && j != 2 && j != (val-1)){
                arr.push('I')
            } else if(i == (val-2) && j != 2 && j!= (val-1)){
                arr.push('I')
            } else if(j == 3 && i != 2 && i != (val-1)){
                arr.push('I')
            } else if(j == (val-2) && i != 2 && i != (val-1)){
                arr.push('I')
            } else if(j == mid && i == mid){
                arr.push('*')
            } else {
                arr.push(' ')
            }
        }
        bigarr.push(arr.join(''))
    }
    return bigarr.join('\n');
}

console.log(generateBorderBox(9))
console.log('\n')
console.log(generateBorderBox(13))
console.log('\n')
console.log(generateBorderBox(23))