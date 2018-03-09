function generateBorderBox(num) {
  var mid = Math.floor(num/2)

  for (var i = 0; i < num; i++) {
    var stringI = ''
    for (var j = 0; j < num; j++) {
      if (i === 0 || i === num-1) {
        stringI += 'I'
      }
      else if (j === 0 || j === num-1) {
        stringI += 'I'
      }
      else if (j >= 2 && j <= num-3) {
        if (i === 2 || i === num-3) {
          stringI += 'I'
        } else if (i >= 3 && i <= num-4) {
          if (j === 2 || j === num-3) {
            stringI += 'I'
          }
          else if (i === mid && j === mid) {
            stringI += '*'
          } else {
            stringI += ' '
          }
        } else {
          stringI += ' '
        }
      } else if (j !== 0 || j !== num-1) {
        stringI += ' '
      }
    }
    console.log(stringI);
  }
}

generateBorderBox(11)
//
// IIIIIIIII
// I       I
// I IIIII I
// I I   I I
// I I * I I
// I I   I I
// I IIIII I
// I       I
// IIIIIIIII
