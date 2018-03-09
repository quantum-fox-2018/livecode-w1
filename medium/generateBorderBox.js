function generateBorderBox(panjang) {
  var mid = Math.floor(panjang / 2);

  for (var row = 0; row < panjang; row++){
    let borders = '';
    if (row === mid) {
      for (let col = 0; col < panjang; col++){
        if(col === mid) {
          borders += '*'
        } else if(col === 0 || col === panjang-1 || col === 2 || col === panjang-3){
          borders += 'I'
        } else {
           borders += ' ';
        }
      }
      console.log(borders);
    }else if(row === 0 || row === panjang-1) {
      for (let col = 0; col < panjang; col++){
        borders += 'I';
      }
      console.log(borders);
    } else if(row === 1 || row === panjang-2) {
      for (let col = 0; col < panjang; col++){
        (col === 0 || col === panjang-1) ?
        borders += 'I' : borders += ' ';
      }
      console.log(borders);
    } else if(row === 2 || row === panjang-3) {
      for (let col = 0; col < panjang; col++){
        (col === 1 || col === panjang-2) ?
        borders += ' ' : borders += 'I';
      }
      console.log(borders);
    } else {
      for (let col = 0; col < panjang; col++){
        (col === 0 || col === panjang-1 || col === 2 || col === panjang-3) ?
        borders += 'I' : borders += ' ';
      }
      console.log(borders);
    }
  }
}

generateBorderBox(9);
