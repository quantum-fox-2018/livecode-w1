/* jshint esversion:6*/
/* ada function parameter number
buat variable nominalUang sama dengan nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.

*/



// function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
//   //your code here...
//   let hasilTukar = [];
//   if (nominalYangAkanDitukar > 100000) {
//     return 'nominalYangAkanDitukar minimal 100000';
//   } else if (nominalYangDiutamakan !== undefined) {
//     for (let i = 0; i < nominalUang.length; i++) {
//       if (nominalYangAkanDitukar >= nominalUang[i].pecahan) {
//         if (nominalUang[i].jumlah > nominalYangAkanDitukar/nominalYangDiutamakan) {
//           nominalYangAkanDitukar -= nominalUang[i].pecahan;
//           nominalUang[i].jumlah--;
//           hasilTukar.push(nominalUang[i].pecahan);
//         }
//       }
//     }
//   } else {
//     for (let j = 0; j < nominalUang.length; j++) {
//       while (nominalYangAkanDitukar >= nominalUang[j].pecahan) {
//         nominalYangAkanDitukar -= nominalUang[j].pecahan;
//         hasilTukar.push(nominalUang[j].pecahan);
//
//       }
//     }
//   }
//   return hasilTukar;
// }
var nominalUang = [{
  pecahan: 50000,
  jumlah: 2
}, {
  pecahan: 20000,
  jumlah: 3
}, {
  pecahan: 10000,
  jumlah: 5
}, {
  pecahan: 5000,
  jumlah: 8
}, {
  pecahan: 2000,
  jumlah: 6
}, {
  pecahan: 1000,
  jumlah: 10
}];

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  //your code here...
  var hasilTukar = [];
  var pecahanPembagi = [];
  var jumlahPembagi = [];

  for (let k = 0; k < nominalUang.length; k++) {
    if (nominalUang[k].pecahan <= nominalYangDiutamakan) {
      pecahanPembagi.push(nominalUang[k].pecahan);
      jumlahPembagi.push(nominalUang[k].jumlah);
    }
    if (nominalYangDiutamakan == undefined) {
      while (nominalYangAkanDitukar >= nominalUang[k].pecahan) {
        nominalYangAkanDitukar -= nominalUang[k].pecahan;
        hasilTukar.push(nominalUang[k].pecahan);
      }
    }
  }

  for (let i = 0; i < pecahanPembagi.length; i++) {
    if (nominalYangAkanDitukar >= pecahanPembagi[i]) {
      nominalYangAkanDitukar -= pecahanPembagi[i];
      hasilTukar.push(pecahanPembagi[i]);
    }
  }
  return hasilTukar;
}


console.log(moneyExchanger(100000));
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000));
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000));
//hasilnya : Uang pecahan tidak mencukupi
