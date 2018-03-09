function generateBorderBox(input){
    let result = []

    for(let i=0; i<input; i++){
        let inside = []
        for(let j=0; j<input; j++){
            
            if(i == 0 || i == input-1){
                inside.push('I')
            }
            else if(j == 0 || j == input-1){
                inside.push('I')
            }
            else if(i == 2 || i == input-3){
                inside.push('I')
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
// generateBorderBox(13);
// generateBorderBox(23);