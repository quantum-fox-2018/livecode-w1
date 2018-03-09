//Generate Border Box
function generateBorderBox(num){
  let midPos = (num-1) /2;

  for(let i = 0; i < num; i++){
      let tempBox = [];
      for(let j = 0; j < num; j++){
          if(i === 0 || i=== num - 1){
              tempBox.push('I');
          }else if (i == 1 || i == num - 2) {
              if(j === 0 || j === num -1){
                tempBox.push('I');
              }else {
                tempBox.push(' ');
              }
          }else if (i === 2 || i === num - 3) {
              if(j == 1 || j == num - 2){
                tempBox.push(' ');
              }else{
                tempBox.push('I');
              }
          }else if (i == midPos) {
              if(j == midPos){
                tempBox.push('*');
              }else if (j == 0 || j == 2 || j == num-3 || j == num-1) {
                tempBox.push('I');
              }else{
                tempBox.push(' ');
              }

          }else if (i >= 3 && i <= num - 4) {
              if(j == 0 || j == 2 || j == num-3 || j == num-1){
                tempBox.push('I')
              }else{
                tempBox.push(' ');
              }
          }else{
              tempBox.push(' ');
          }
      }
      console.log(tempBox.join(''));
  }
  console.log('');
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

generateBorderBox(13);
/*
IIIIIIIIIIIII
I           I
I IIIIIIIII I
I I       I I
I I       I I
I I       I I
I I   *   I I
I I       I I
I I       I I
I I       I I
I IIIIIIIII I
I           I
IIIIIIIIIIIII
*/

generateBorderBox(23);
/*
IIIIIIIIIIIIIIIIIIIIIII
I                     I
I IIIIIIIIIIIIIIIIIII I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I        *        I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I IIIIIIIIIIIIIIIIIII I
I                     I
IIIIIIIIIIIIIIIIIIIIIII
*/
