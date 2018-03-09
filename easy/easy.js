var exchangeMoney = [
    [50000, 20000, 10000, 5000, 2000, 1000],
    [2, 3, 5, 8, 6, 10]
    ]

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan){
  if (nominalYangAkanDitukar < 100000){
    return 'Minimal 100000';
  }
  var arrResult = [];
  let tmpNominal = nominalYangAkanDitukar;

  if (nominalYangDiutamakan === undefined){
    if (tmpNominal >= 50000){
      for(var i = 0; i < exchangeMoney[1][0]; i++){
        if(tmpNominal >= 50000){
          tmpNominal = tmpNominal - 50000;
          arrResult.push(50000);
        }
      }
    }
    if (tmpNominal >= 20000){
      for(var i = 0; i < exchangeMoney[1][1]; i++){
        if (tmpNominal >= 20000){
          tmpNominal = tmpNominal - 20000;
          arrResult.push(20000);
        }
      }
    }
    if (tmpNominal >= 10000){
      for(var i = 0; i < exchangeMoney[1][2]; i++){
        if (tmpNominal >= 10000){
          tmpNominal = tmpNominal - 10000;
          arrResult.push(10000);
        }
      }
    }
    if (tmpNominal >= 5000){
      for(var i = 0; i < exchangeMoney[1][3]; i++){
        if (tmpNominal >= 5000){
          tmpNominal = tmpNominal - 5000;
          arrResult.push(5000);
        }
      }
    }
    if (tmpNominal >= 2000){
      for(var i = 0; i < exchangeMoney[1][4]; i++){
        if (tmpNominal >= 2000){
          tmpNominal = tmpNominal - 2000;
          arrResult.push(2000);
        }
      }
    }
    if (tmpNominal >= 1000){
      for(var i = 0; i < exchangeMoney[1][5]; i++){
        if (tmpNominal >= 1000){
          tmpNominal = tmpNominal - 1000;
          arrResult.push(1000);
        }
      }
    }

  } else {
    for (var i = 0; i < exchangeMoney[0].length; i++){
      if(nominalYangDiutamakan === exchangeMoney[0][i]){
        if(tmpNominal >= exchangeMoney[0][i]){
          for(var j = 0; j < exchangeMoney[1][i]; j++){
            if (tmpNominal >= exchangeMoney[0][i]){
              tmpNominal = tmpNominal - exchangeMoney[0][i];
              arrResult.push(exchangeMoney[0][i]);
            }
          }
        }
        if(tmpNominal >= exchangeMoney[0][i+1]){
          for(var j = 0; j < exchangeMoney[1][i+1]; j++){
            if (tmpNominal >= exchangeMoney[0][i+1]){
              tmpNominal = tmpNominal - exchangeMoney[0][i+1];
              arrResult.push(exchangeMoney[0][i+1]);
            }
          }
        }
      }
    }
    if (tmpNominal > 0){
      return 'Uang pecahan tidak mencukupi';
    }
  }
  return arrResult;
}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
