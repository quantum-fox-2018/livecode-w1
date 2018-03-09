function generateBorderBox(num){
  let center = Math.floor(num/2)
  for(let i=0; i<num; i++){
    let result=''
    for(let j=0; j<num; j++){
      if(i===0){
        result+='I'
      }else if(j===0){
        result+='I'
      }else if(j===num-1){
        result+='I'
      }else if(i===num-1){
        result+='I'
      }else if(j===2 && i !== 1 && i!== num-2){
        result+='I'
      }else if(j===num-3 && i !== 1 && i!== num-2){
        result+='I'
      }else if(i===2 && j!== 1 && j!== num-2){
        result+='I'
      }else if(i=== num-3 && j!== 1 && j!== num-2){
        result+='I'
      }else if(i == center && j == center){
        result = result+'*'
      }else{
        result+=' '
      }
    }
    console.log(result);
  }
}

generateBorderBox(9);


generateBorderBox(13);


generateBorderBox(23);
``
