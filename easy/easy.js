/*
buatlah sebuah variable yang dapat menyimpan data mengenai pecahan uang dan jumlah nya, contoh nya :
nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, nominal 5000 berjumlah 8,
nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.*/

var dataUang = [[50000, 2],[20000, 3],[10000,5],[5000, 8],[2000,6],[1000,10]]

function moneyExchanger(nominal, utama) {
  var hasil = []

  if (nominal < 100000) {
    return 'Minimal input yang bisa ditukar adalah 100000'
  }

  var terutama = 0

  for (var i = 0; i < dataUang.length; i++) {
    if (dataUang[i][0] === utama) {
      terutama = i
    }
  }

  for (var i = terutama; i < dataUang.length; i++) {
    var jmlhUang = dataUang[i][1]
    while (nominal >= 0 && jmlhUang > 0 &&  dataUang[i][0] <= nominal) {

      jmlhUang -= 1
      nominal -= dataUang[i][0]
      hasil.push(dataUang[i][0])
    }
  }
  if (nominal > 0) {
    return 'Uang pecahan tidak mencukupi'
  } else {
    return hasil
  }
}

console.log(moneyExchanger(100000, 20000));
