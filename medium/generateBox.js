function generateBorderBox(number) {
  var string = '';
  for (var i = 0 ; i < number; i++) {
    for (var j = 0; j <= number; j++) {
      // string += 'I';
      if (i == 1) {
        if (j != 0 && j != number - 1) {
          string += ' '
        } else if (j == 0 || j == number - 1  ) {
          string += 'I'
        }
      }
      if (i == number - 2) {
        if (j != 0 && j != number - 1) {
          string += ''
        } else if (j == 0 || j == number -1 ) {
          string += 'I'
        }
      }
      if (i == 0) {
        string += 'I'
      }
      if (i > 1 && i <number - 2) {
        if (j !== 1 && j != number - 3) {
          string += 'I'
        }
        // string += 'I'
      }
      if (i > number - 2) {
        string += 'I'
      }
      if (i > 0 && i < number - 1) {
        if (j == 0) {
          string += ' '
        }
      }
    }
    string += '\n'
  }
  return string
}

console.log(generateBorderBox(9));
