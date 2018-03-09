/*
pseudocode
-------------
1. buat array kamus pecahan uang dan jumlahnya
2. membuat fungsi tukar uang dengan menerima parameter inputan dan pecahan yang diutamakan
the breakdown:
3.
function start

while uang > 0
  for i to array kamus length
    jika uang >= pecahan(0) & priortas kosong
      push pecahan ke array hasil
      uang = uang - pecahan(0)

    jika uang >= pecahan & prioritas = pecahan
      cek sisa pecahan dengan count
        jika prioritas - 1 < dari 1000 (paling kecil)
         return 'uang pecahan tidak cukup'
      else
      prioritas = next index prioritas
      pecahan = next index pecahan
      count kembali 0

      for j to sisa pecahan
        push pecahan(i) ke array hasil
        uang = uang - pecahan(0)
        count++

return hasil

function end

*/

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  //your code here...
  var arrPecahan = [
    [50000, 2],
    [20000, 3],
    [10000, 5],
    [5000, 8],
    [2000, 6],
    [1000, 10]
  ];

  var input = nominalYangAkanDitukar;
  var prioritas = nominalYangDiutamakan
  var hasil = [];
  var count = 0;
  if (nominalYangDiutamakan === undefined) {
    prioritas = 0;
  }

  while (input > 0) {
    for (let i = 0; i < arrPecahan.length; i++) {
      let pecahan = arrPecahan[i][0];
      var sisaPecahan = arrPecahan[i][1];

      if (input >= pecahan && prioritas === 0) {
        hasil.push(pecahan);
        input = input - pecahan;
        break;
      }

      if (input >= pecahan && prioritas === pecahan) {
        if (count >= sisaPecahan) {
          if (prioritas - 1 < arrPecahan[5][0]) {
            return 'Uang pecahan tidak mencukupi';
          }
          prioritas = arrPecahan[i+1][0];
          pecahan = arrPecahan[i+1][0];
          count = 0;
        }

        for (let j = 0; j < sisaPecahan; j++) {
          hasil.push(pecahan);
          input = input - pecahan;
          count++;
          break;
        }
      }
    }
  }

  return hasil;
}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
