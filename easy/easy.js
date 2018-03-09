
// nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
  //your code here...
  var startMoney
  var counter=0
  var arrTemp=[]
  var arrResult=[]
  let objMoney = [{
    nominal: 50000,
    qty: 2
  },
  {
    nominal: 20000,
    qty: 3
  },
  {
    nominal: 10000,
    qty: 5
  },
  {
    nominal: 5000,
    qty: 8
  },
  {
    nominal: 2000,
    qty: 6
  },
  {
    nominal: 1000,
    qty: 10
  }
]


  if(nominalYangDiutamakan!==undefined){
      for (let i = 0; i < objMoney.length-1; i++) {
        if(nominalYangDiutamakan===objMoney[i].nominal){
          startMoney=i
        }
      }
  }else{
    startMoney=0
  }

  for (let i = startMoney; i < objMoney.length - 1; i++) {
    while (nominalYangAkanDitukar - objMoney[i].nominal >= 0 && objMoney[i].qty > 0) {
      nominalYangAkanDitukar = nominalYangAkanDitukar - objMoney[i].nominal
      objMoney[i].qty--
      counter++
    }
    if(counter!==0){
      var obj={nominal:objMoney[i].nominal,qty : counter}
        arrTemp.push(obj)
    }
    counter=0
  }
  if(nominalYangAkanDitukar>0){
    arrResult.push('Uang pecahan tidak mencukupi')
  }
  else{
    for (var i = 0; i < arrTemp.length; i++) {
      for (var j = 0; j < arrTemp[i].qty; j++) {
        arrResult.push(arrTemp[i].nominal)
      }
    }
  }

  return arrResult
}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
