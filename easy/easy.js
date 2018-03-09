

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  //your code here...
  var pecahan = [50000, 50000, 20000, 20000, 20000, 10000, 10000, 10000, 10000, 10000,
    5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 2000, 2000, 2000, 2000, 2000, 2000,
    1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000] ;
  var result = [];
  var index = 0;
    for(var i = 0; i < pecahan.length; i++) {
      while (nominalYangAkanDitukar >= pecahan[i]) {
        if(nominalYangDiutamakan === pecahan[i]) {
          index = i;
          nominalYangAkanDitukar -= pecahan[index];
          result.push(pecahan[index]);
        } else {
          nominalYangAkanDitukar -= pecahan[i];
          result.push(pecahan[i]);
        }
      }
    }
    return result;
  }

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
