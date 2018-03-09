function generateBorderBox(num) {
  if(num%2 !== 1) {
    console.log("Input harus ganjil!");
    return;
  }
  if(num < 7) {
    console.log("Input harus di atas 7!");
  }

  let hasilBox;
  let mid = Math.floor(num/2);
  for(let i = 0; i < num; i++) {
    hasilBox = "";
    for(let j = 0; j < num; j++) {
      if(i === 0 || i === num-1 || j === 0 || j === num-1) {
        hasilBox+= "I";
      } else if(i === 2 && j >= 2 && j < num-2) {
        hasilBox+= "I";
      } else if(i === num-3 && j >= 2 && j < num-2) {
        hasilBox+= "I";
      } else if(j === 2 && i >= 2 && i < num-2) {
        hasilBox+= "I";
      } else if(j === num-3 && i >= 2 && i < num-2) {
        hasilBox+= "I";
      } else if(i === mid && j === mid){
        hasilBox+= "*";
      } else {
        hasilBox+= " ";
      }
    }
    console.log(hasilBox);
  }
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
