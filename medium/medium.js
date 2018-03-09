function generateBorderBox(num){
    let middle_num = Math.floor(num/2)
    for(let counter =0; counter<num; counter++){
        let rowStr = '';
        
        //Row 0 & last
        if(counter === 0 || counter === num-1){
            for(let counter2=0; counter2<num; counter2++){
                rowStr+= 'I'
            }
        }//Row 1 & second from last
        else if(counter === 1 || counter === num-2){
            for(let counter2=0; counter2<num; counter2++){
                if(counter2 === 0 || counter2 === num-1){
                    rowStr+= 'I'
                }else{
                    rowStr+= ' '
                }
            }
        }//Row 2 & third from last
        else if(counter === 2 || counter === num -3){
            for(let counter2 =0; counter2<num; counter2++){
                if(counter2 === 0 || counter2 ===num-1){
                    rowStr+= 'I'
                }else if(counter2 === 1 || counter2 === num-2){
                    rowStr+= ' '
                }else{
                    rowStr+= 'I'
                }
            }
        }//The rest
        else{
            for(let counter2 = 0; counter2<num; counter2++){
                if(counter2 === 0 || counter2 ===num-1){
                    rowStr+= 'I'
                }else if(counter2 === 2 || counter2 === num-3){
                    rowStr += 'I'
                }else if(counter === middle_num && counter2 === middle_num){
                    rowStr += '*'
                }else{
                    rowStr += ' '
                }
            }
        }
        console.log(rowStr);
    }
}

generateBorderBox(9);

generateBorderBox(23);