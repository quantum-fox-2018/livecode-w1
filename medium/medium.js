function generateBorderBox(num){
  var arrResult=[]

  for (let i = 0; i < num; i++) {
    arrResult.push([])
    for (let j = 0; j < num; j++) {
      if(i===Math.floor(num/2) && j===Math.floor(num/2)){
        arrResult[i].push('*')
      }
      else if(i==0 || i===num-1 || j===0 || j===num-1 || (i===2 && j!==1 && j!==num-2) ||
      (i===num-3 && j!==1 && j!==num-2) || (j===2 && i>1 && i<num-2) || (j===num-3 && i>1 && i<num-2)){
        arrResult[i].push('I')
      }
      else{
        arrResult[i].push(' ')
      }
    }
    arrResult[i]=arrResult[i].join('')
  }
  console.log(arrResult.join('\n'));
}

generateBorderBox(9);
/*
9->5
13->9
23->19
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
// /*
// IIIIIIIIIIIII
// I           I
// I IIIIIIIII I
// I I       I I
// I I       I I
// I I       I I
// I I   *   I I
// I I       I I
// I I       I I
// I I       I I
// I IIIIIIIII I
// I           I
// IIIIIIIIIIIII
// */
//
generateBorderBox(23);
// /*
// IIIIIIIIIIIIIIIIIIIIIII
// I                     I
// I IIIIIIIIIIIIIIIIIII I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I        *        I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I I                 I I
// I IIIIIIIIIIIIIIIIIII I
// I                     I
// IIIIIIIIIIIIIIIIIIIIIII
// */
