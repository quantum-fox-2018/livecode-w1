function generateBorderBox(num) {
  if(num < 7 || num %2 === 0){
    console.log('number yang diinput hanya angka ganjil yang lebih dari 7!')
    return
  }
	for (var i = 0; i < num; i++) {
		var tampung = '';
		for (var j = 0; j < num; j++) {
			if (i === 0 || i === num - 1) {
				tampung += 'I';
			}
			if (i === 1 || i === num - 2) {
				if (j === 0 || j === num - 1) {
					tampung += 'I';
				} else {
					tampung += ' ';
				}
			}
			if (i === 2 || i === num - 3) {
				if (j === 1 || j === num - 2) {
					tampung += ' ';
				} else {
					tampung += 'I';
				}
			}
			if (i === (num - 1) / 2) {
				if (j === 0 || j === 2 || j === num - 1 || j === num - 3) {
					tampung += 'I';
				}
				if (j === (num - 1) / 2) {
					tampung += '*';
				}else if(j !== 0 && j !== 2 && j !== num - 1 && j !== num - 3 && j !== (num - 1) / 2) {
					tampung += ' ';
				}
			} else if (
				i !== 0 &&
				i !== num - 1 &&
				i !== 1 &&
				i !== num - 2 &&
				i !== 2 &&
				i !== num - 3 &&
				i !== (num - 1) / 2
			) {
				if (j === 0 || j === 2 || j === num - 1 || j === num - 3) {
					tampung += 'I';
				} else {
					tampung += ' ';
				}
			}
		}
		console.log(tampung);
	}
}

generateBorderBox(9);
generateBorderBox(13);
generateBorderBox(23);
generateBorderBox(25);
generateBorderBox(24);
generateBorderBox(5);
