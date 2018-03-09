function generateBorderBox(input){
    let result = []
    let mid = Math.floor(input/2)

    for(let i=0; i<input; i++){
        let inside = []
        for(let j=0; j<input; j++){
            
            if(i == 0 || i == input-1 || j == 0 || j == input-1){
                inside.push('I')
            }
            else if(i == 2 && j > 1 && j < input-2){
                inside.push('I')
            }
            else if(i == input-3 && j > 1 && j < input-2){
                inside.push('I')
            }
            else if(j == 2 && i > 2 && i < input-2){
                inside.push('I')
            }
            else if(j == input-3 && i > 2 && i < input-2){
                inside.push('I')
            }
            else if(i == mid && j == mid){
                inside.push('*')
            }
            else{
                inside.push(' ')
            }
        }
        result.push(inside.join(''))
    }
    console.log(result)
}


generateBorderBox(9);
generateBorderBox(13);
generateBorderBox(23);