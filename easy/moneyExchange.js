



function moneyExchanger(nominalDitukar, nominalDiutamakan) {
  //console.log(moneyData[1].pecahan);
var result=[]

var utama = nominalDitukar
var count =0


  while(utama!==0){
   for (var i = 0; i < moneyData.length; i++) {
    let sisaMoney = moneyData[i].pecahan
    let sisaJumlah = moneyData[i].jumlah
    //console.log('1 '+utama,nominalDiutamakan);
      count++

     if(sisaJumlah>=0 && utama >= 50000 && nominalDiutamakan == undefined){
      utama-=moneyData[0].pecahan
      result.push(moneyData[0].pecahan)
      moneyData[0].jumlah--

    }else if (sisaJumlah >=0 && utama >= 50000 && nominalDiutamakan == 20000) {
      utama-=moneyData[1].pecahan
      result.push(moneyData[1].pecahan)
      moneyData[1].jumlah--
    }else if(utama >= 10000){
      utama-=moneyData[2].pecahan
      moneyData[2].jumlah--
      result,push(moneyData[2].jumlah)
    }
  //console.log('2 '+utama,sisaJumlah);
  }


  //console.log(count);

    // if(sisaMoney < 0){}
    // sisaMoney  = utama-=moneyData[0].pecahan
    // sisaJumlah = moneyData[0].jumlah --
    // console.log(sisaJumlah);
    // result.push(moneyData[0].pecahan)
    }







return result
}  //your code here...


var moneyData=[
  {
  pecahan : 50000,
  jumlah : 2
  },
  {
    pecahan:20000,
    jumlah:3
  },
  {
  pecahan:10000,
  jumlah:5
  },
  {
    pecahan:5000,
    jumlah:8
  },
  {
    pecahan:2000,
    jumlah:6
  },
  {
    pecahan:1000,
    jumlah:10
  },
]

 console.log(moneyExchanger(100000))
// //hasilnya : [ 50000, 50000 ]
//
 console.log(moneyExchanger(100000, 20000))
// //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]
//
console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
