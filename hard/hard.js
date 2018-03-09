function generateBarChart(input){
  let max = 0;
  for(let i=0; i<input.length; i++){
    if(input[i]>=max){
      max = input[i];
    }
  }
  let board = [];
  for(let i=max; i>=0; i--){
    let line = '';
    if(i==0){
      for(let j=0; j<=input.length; j++){
        if(j==0){
          line += i + '|';
        } else {
          line += `-(${input[j-1]})-`;
        }
      }
    } else {
      for(let j=0; j<=input.length; j++){
        if(j==0){
          line += i + '|';
        } else {
          line += ' III ';
        }
      }
    }
    board.push(line);
  }
  console.log(board);
}

generateBarChart([3, 6, 4, 7, 2])
