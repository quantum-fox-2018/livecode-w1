function generateBarChart(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>max) {
            max = arr[i]
        }
    }

    mrow = max
    mcol = arr.length

    let board = []
    for(let row=mrow; row>=0; row--) {
        let text = ''
        let isi = []
        for(let col=0; col<arr.length+1; col++) {
            if(col == 0) {
                // text += row
                isi.push(`${row}|`)

            } else if(row <=arr[col-1] && row > 0) {
                // text += ' '
                isi.push('III')

            } else if(row > 0) {
                // text += ' '
                isi.push('   ')
            

            
            } else {
                // text += arr[col-1]
                isi.push(`(${arr[col-1]})`)
            }
        }
        // board.push(text)
        // console.log(isi)
        if(board.length<mrow) {
            board.push(isi.join('  '))    
        } else {
            // if(isi.length )
            board.push(isi.join('--'))
        }
    }

    return console.log(board.join('\n'))
}

console.log('=============================')
generateBarChart([3, 6, 4, 7, 2]);
console.log('=============================')
generateBarChart([9, 8, 7, 0, 1, 2, 3]);
console.log('=============================')
generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);
console.log('=============================')