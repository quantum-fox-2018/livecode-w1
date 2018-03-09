function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan){
  // var money=[
  //             [50000,2], [20000,3],
  //             [10000,5], [5000,8],
  //             [2000,6], [1000,10]
  //           ];
  let arrResult=[];
  var uang = [
              {nominal: 50000, total: 2},
              {nominal: 20000, total: 3},
              {nominal: 10000, total: 5},
              {nominal: 5000, total: 8},
              {nominal: 2000, total: 6},
              {nominal: 1000, total: 10},
             ]
   for(let i=0; i<uang.length; i++){
     if(nominalYangDiutamakan === undefined){
       if(nominalYangAkanDitukar >= uang[i].nominal && uang[i].total>0){
         while (nominalYangAkanDitukar >0) {
           arrResult.push(uang[i].nominal)
           nominalYangAkanDitukar-=uang[i].nominal
           uang[i].total = uang[i].total -1;
         }
       }
     }else{
       // console.log(nominalYangDiutamakan);
       if(uang[i].nominal<= nominalYangDiutamakan){
         while(uang[i].total > 0 && nominalYangAkanDitukar >0){
           arrResult.push(uang[i].nominal)
           nominalYangAkanDitukar-=uang[i].nominal
           uang[i].total = uang[i].total -1;

;
           // if(nominalYangAkanDitukar > 0 && uang[i]+1 === undefined){
           //   return 'Uang pecahan tidak mencukupi'
           // }
         }
       }
     }

   }
   if(nominalYangAkanDitukar > 0){
     return 'Uang pecahan tidak mencukupi'
   }else {
  return arrResult
   }
}
console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
// //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]
//
console.log(moneyExchanger(100000, 5000))
// //hasilnya : Uang pecahan tidak mencukupi
