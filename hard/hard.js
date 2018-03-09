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
          if(i<=input[j-1]){
            line += ' III ';
          } else {
            line += '     ';
          }
        }
      }
    }
    board.push(line);
  }
  console.log(board.join('\n'));
}

generateBarChart([3, 6, 4, 7, 2]);
console.log('');
generateBarChart([9, 8, 7, 0, 1, 2, 3]);
console.log('');
generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);
