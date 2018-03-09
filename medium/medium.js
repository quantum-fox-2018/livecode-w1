function generateBorderBox(input){
  let board = [];
  let mid = Math.floor(input/2);
  for(let i=0; i<input; i++){
    let line = '';
    if(i==0 || i==input-1){
      for(let j=0; j<input; j++){
        line += 'I'
      }
    } else  if(i==2 || i==input-3){
      for(let j=0; j<input; j++){
        if(j==0 || j==input-1 || (j>=2 && j<=input-3)){
          line += 'I';
        } else {
          line += ' ';
        }
      }
    } else if(i>2 && i<input-3){
      for(let j=0; j<input; j++){
        if(j==0 || j==input-1 || j==2 || j==input-3){
          line += 'I';
        } else if(i==mid && j==mid){
          line += '*';
        } else {
          line += ' ';
        }
      }
    } else {
      for(let j=0; j<input; j++){
        if(j==0 || j==input-1){
          line += 'I';
        } else {
          line += ' ';
        }
      }
    }
    board.push(line);
  }
  console.log(board);
}

generateBorderBox(9);
generateBorderBox(13);
generateBorderBox(23);
