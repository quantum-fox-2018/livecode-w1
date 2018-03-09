function generateBorderBox(num) {
    let board = []

    for(let row=0; row<num; row++) {
        let text = ''
        for(let col=0; col<num; col++) {
            if(row == Math.floor(num/2) && col == Math.floor(num/2)) {
                text += '*'
            } else if((row == 0 || row == num-1)) {
                text += 'I'
            } else if((col == 0 || col == num-1)) {
                text += 'I'
            } else if((row == 2 || row == num-3) && (col > 1 && col < num -2)) {
                text += 'I'
            } else if((col == 2 || col == num-3) && (row > 1 && row < num -2)) {
                text += 'I'

            } else {
                text += ' '
            }
        }
        board.push(text)
    }

    return console.log(board)
}



generateBorderBox(9);
/*
IIIIIIIII
I       I
I IIIII I
I I   I I
I I * I I
I I   I I
I IIIII I
I       I
IIIIIIIII
*/
