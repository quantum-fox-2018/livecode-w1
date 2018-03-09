//money Exchanger

// nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5,
// nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.
// a. Apabila `nominalYangDiutamakan` kosong, maka pecahan nya berurutan mulai dari pecahan terbesar nya
// b. Apabila diisi, maka pecahan nya dimulai dari `nominalYangDiutamakan` tsb. `nominalYangDiutamakan`
//hanya bisa diisi oleh pecahan uang yang ada di nomor 1.
// c. Apabila jumlah pecahan tidak mencukupi, maka output nya : 'Uang pecahan tidak mencukupi'

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  let moneyQuantity = [
                        {pecahan:50000, total: 2},
                        {pecahan:20000, total: 3},
                        {pecahan:10000, total: 5},
                        {pecahan:5000, total: 8},
                        {pecahan:2000, total: 6},
                        {pecahan:1000, total: 10}
                      ];
  let resultMoney = [];
  let maxExchange = 0;

  //mencari kalo ada duit di bawah seribu
  let under1000 = String(nominalYangAkanDitukar);
  under1000 = under1000.slice(under1000.length-3, under1000.length);
  if(under1000[0] != 0 || under1000[1] != 0 || under1000[2] != 0){
      resultMoney = 'Uang pecahan tidak mencukupi';
  }else{
      //Mencari jumlah maksimal uang yang bisa di tuker
      for(let i = 0; i < moneyQuantity.length; i++){
          maxExchange += moneyQuantity[i].pecahan * moneyQuantity[i].total;
      }

      if(nominalYangAkanDitukar > maxExchange){
          resultMoney = 'Uang pecahan tidak mencukupi';

      }else if(nominalYangDiutamakan === undefined){
          let index = 0;
          let nextIndex = function(index){
            if(index >= moneyQuantity.length){
                return 'hasilnya : '+ resultMoney;
            }
            while(nominalYangAkanDitukar >= moneyQuantity[index].pecahan){
                if(moneyQuantity[index].total < 1){
                    if(moneyQuantity[moneyQuantity.length-1].total === 0 &&
                    nominalYangAkanDitukar !== 0){
                        resultMoney = 'Uang pecahan tidak mencukupi';
                        //return 'Uang pecahan tidak mencukupi';
                    }
                    break;
                }else{
                    nominalYangAkanDitukar -= moneyQuantity[index].pecahan;
                    moneyQuantity[index].total -= 1;
                    resultMoney.push(moneyQuantity[index].pecahan);
                }
            }
            if(nominalYangAkanDitukar < moneyQuantity[index].pecahan){
                index += 1;
                return nextIndex(index);
            }else{
                return 'hasilnya : '+ resultMoney;
            }
          }

          return nextIndex(index);
      }else{
          let targetIndex = 0;

          for(let i = 0; i < moneyQuantity.length; i++){
              if(moneyQuantity[i].pecahan === nominalYangDiutamakan){
                  targetIndex = i;
              }
          }

          for(let i = targetIndex; i < moneyQuantity.length; i++){
              while (nominalYangAkanDitukar >= moneyQuantity[i].pecahan) {

                  if(moneyQuantity[i].total < 1){
                      if(moneyQuantity[moneyQuantity.length-1].total === 0 &&
                      nominalYangAkanDitukar !== 0){
                          resultMoney = 'Uang pecahan tidak mencukupi';
                          // return 'Uang pecahan tidak mencukupi';
                      }
                      break;
                  }else{
                      nominalYangAkanDitukar -= moneyQuantity[i].pecahan;
                      moneyQuantity[i].total -= 1;
                      resultMoney.push(moneyQuantity[i].pecahan);
                  }

              }
          }


      }
  }



  return 'hasilnya : '+resultMoney;
}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi

//Other Test Case
console.log(moneyExchanger(130000))
//hasilnya : [ 50000, 50000, 20000, 10000 ]

console.log(moneyExchanger(1310000))

console.log(moneyExchanger(110100))
