function generateBorderBox(input){

  let arrRow = [];

  for(var i = 0; i < input; i++){
    let tmp = '';
    for(var j = 0; j < input; j++){
      if ( i == 0){
        tmp += 'I'
      } else if (i == input -1){
        tmp += 'I';
      } else if(i == 2){
        if (j === 1 || j === input-2){
          tmp += ' ';
        } else {
          tmp += 'I';
        }
      } else if(i == input - 3){
        if (j === 1 || j === input-2){
          tmp += ' ';
        } else {
          tmp += 'I';
        }
      } else {
        if (j == 0 || j == input-1){
          tmp += 'I';
        } else {
          tmp += ' ';
        }
      }



    }
    arrRow.push(tmp);
  }
  return arrRow;
}

console.log(generateBorderBox(13));
