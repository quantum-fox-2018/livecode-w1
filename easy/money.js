function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  var dataUang = [50000, 20000, 10000, 5000, 2000, 1000];
  var banyakUang = [2, 3, 5, 8, 6, 10];
  var nominal = nominalYangAkanDitukar;
  var arrHasil = [];

  if (nominalYangDiutamakan == undefined) {
    for (var i = 0; i < dataUang.length; i++) {
      var banyakUangSekarang = banyakUang[i];
      for (var j = 0; j < banyakUang.length; j++) {
        if (banyakUangSekarang != 0 && nominal > 0) {
          nominal -= dataUang[i];
          banyakUangSekarang -= 1;
          arrHasil.push(dataUang[i])
        }
      }
    }
  } else if (nominalYangDiutamakan != undefined) {
    var index = dataUang.indexOf(nominalYangDiutamakan)
    for (var k = index; k < dataUang.length; k++) {
      banyakUangSekarang = banyakUang[k];
      for (var l = index; l < banyakUang.length; l++) {
        if (banyakUangSekarang > 0 && nominal > 0) {
          nominal -= dataUang[k];
          banyakUangSekarang -= 1;
          arrHasil.push(dataUang[k])
        }
      }
    }
  }
  if (nominal > 0) {
    return 'Uang pecahan tidak mencukupi'
  }
  return arrHasil
}

console.log(moneyExchanger(100000));
console.log(moneyExchanger(100000, 20000))   ; //[ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]
console.log(moneyExchanger(100000, 5000)) //
