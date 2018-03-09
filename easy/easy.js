//1. buatlah sebuah pemetaan untuk nilai tukar rupiah yang dapat ditukar
//2. sort terlebih dahulu nilai tukar rupiah yang disave tersebut
//3. looping mata uang rupiah tersebut berdasarkan urutan
//3a. dalam looping mencari nilai yang ingin ditukar
//3b. setelah menemukan maka nilai yang akan ditukar tersebut di kurangi dengan pecahan yang ingin ditukar
//3c. apabila jumlah tukar tidak cukup maka harus diberikan if untuk mereturn nilai tukar tidak mencukupi
//4. return jawaban

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  var result = [];
  var firstMoney = nominalYangAkanDitukar;

  var pecahan = [];
  pecahan.push(50000, 50000);
  pecahan.push(20000, 20000, 20000);
  pecahan.push(10000, 10000, 10000, 10000, 10000);
  pecahan.push(5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000);
  pecahan.push(2000, 2000, 2000, 2000, 2000, 2000);
  pecahan.push(1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000);


  for(var i = 0 ; i < pecahan.length ;i++){
    if(nominalYangDiutamakan===pecahan[i] && firstMoney >= 0){
      firstMoney -= pecahan[i];
      result.push(pecahan[i]);
      }
    }



  if(firstMoney >= 0){
    for(var j = 0 ; j < pecahan.length ;j++){
      if(firstMoney >= pecahan[j] && pecahan[j] !== nominalYangDiutamakan){
        firstMoney -=pecahan[j];
        result.push(pecahan[j]);
      }
    }
  }

  return result;
}

console.log(moneyExchanger(100000));
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000));
// //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]
//
console.log(moneyExchanger(100000, 5000));
//hasilnya : Uang pecahan tidak mencukupi
