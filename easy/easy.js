function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
	var uang = [50000, 20000, 10000, 5000, 2000, 1000];
	var stock = [2, 3, 5, 8, 6, 10];
	var result = [];

	if (nominalYangAkanDitukar < 100000) {
		return 'nominal yang akan ditukar minimal 100000';
	} else if (nominalYangDiutamakan === undefined) {
		//while(nominalYangAkanDitukar >= 0){
		for (var i = 0; i < uang.length; i++) {
			while (nominalYangAkanDitukar >= uang[i] || stock[i] === 0) {
				nominalYangAkanDitukar = nominalYangAkanDitukar - uang[i];
				result.push(uang[i]);
				stock[i]--;
				if (nominalYangAkanDitukar <= 0) {
					return result;
				}
			}
		}
	} else if (nominalYangDiutamakan !== undefined) {
		for (var j = 0; j < uang.length; j++) {
			if (uang[j] <= nominalYangDiutamakan) {
				while (uang[j] <= nominalYangAkanDitukar || stock[j] === 0) {
					nominalYangAkanDitukar = nominalYangAkanDitukar - uang[j];
					result.push(uang[j]);
					stock[j]--;

					if (stock[j] === 0) {
  					if (uang[j + 1] === undefined) {
  						return 'pecahan tidak mencukupi';
  					}
						j++;
					}

				}
			}
			if (nominalYangAkanDitukar <= 0) {
				return result;
			}
		}
	}
}

console.log(moneyExchanger(100000));
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000));
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000));
