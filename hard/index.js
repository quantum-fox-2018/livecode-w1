
function generateBarChart(data){
    let maxValue = data[0];
    for(let i=0; i<data.length; i++){
        if(maxValue < data[i]){
            maxValue = data[i];
        }
    }
    let bigChart = [];
    for(let i=0; i<data.length; i++){
        let arr = [];
        for(let j=0; j<maxValue; j++){
            if(j < data[i]){
                arr.push('III')
            } else {
                arr.push('   ')
            }
        }
        bigChart.push(arr)
    }
    // return bigChart;
    console.log(bigChart)
}

function rotate(data){
    let kol = data[0].length;
    let baris = data.length;

    console.log(kol)
    console.log(baris)
    
    let bigArrRotate = [];
    for(let i=0; i<kol; i++){
        let arrRotate = [];
        for(let j=0; j<baris; j++){
            arrRotate.push(data[j][i])
        }
        // console.log(data[i])
        bigArrRotate.push(arrRotate)
    }
    return bigArrRotate
}

let input = [3,6,4,7,2];
let input2 = [9, 8, 7, 0, 1, 2, 3];
let input3 = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(generateBarChart(input))
console.log(generateBarChart(input2))
console.log(generateBarChart(input3))
// generateBarChart([3,6,4,7,2]))

let board = generateBarChart(input);
let board2 = generateBarChart(input2);
let board3 = generateBarChart(input3);


let rotate1 = rotate(board)
let rotate2 = rotate(board2)
let rotate3 = rotate(board3)

console.log(rotate1)
console.log(rotate2)
console.log(rotate3)