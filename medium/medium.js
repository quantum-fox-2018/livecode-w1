/*
pseudocode
------------------
*membuat kotak berborder I dengan panjang & tinggi sesuai parameter
*bagian paling tengah *
  center = (num-1) / 2
  if i = center && j = center
    print *

  if i = 1 to num-2 & j = 1 to num-2
    if i = 2 to num-((num-1)/2) & j = 2 to num-((num-1/2))
      print *
        
    print blank

*/
function generateBorderBox(num) {
  for (let i = 0; i < num; i++) {
    output = '';
    for (let j = 0; j < num; j++) {
      var x = (num-1)/2;

      if (i === x && j === x) {
        output += '*';
      } else {
        output += 'I';
      }
    }
    console.log(output);
  }
}

generateBorderBox(9);
//(generateBorderBox(13);
//(generateBorderBox(23);
