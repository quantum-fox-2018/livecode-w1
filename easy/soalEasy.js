var moneyStock = {};
moneyStock[1000] = 10;
moneyStock[2000] = 6;
moneyStock[5000] = 8;
moneyStock[10000] = 5;
moneyStock[20000] = 2;
moneyStock[50000] = 2;

var jumlahMataUang = 0;
for (let i in moneyStock) {
    if (moneyStock.hasOwnProperty(i)) {
        jumlahMataUang++;
    }
}

function moneyExchanger(nominalYangAkanDitukar,nominalYangDiutamakan){

  let resultPertukaran = [];
  let counter = jumlahMataUang - 1;

  for(let i=0;i<jumlahMataUang;i++){
    if(nominalYangDiutamakan == parseInt(Object.keys(moneyStock)[i])){
      counter = counter - i;
    }
  }

  while(nominalYangAkanDitukar>0){

    let tukaranUang = parseInt(Object.keys(moneyStock)[jumlahMataUang-counter-1]);
    let sisaUang = moneyStock[Object.keys(moneyStock)[jumlahMataUang-counter-1]];

    if(nominalYangAkanDitukar>=tukaranUang && sisaUang > 0){
      nominalYangAkanDitukar = nominalYangAkanDitukar - tukaranUang;
      sisaUang = sisaUang -1;
      moneyStock[Object.keys(moneyStock)[jumlahMataUang-counter-1]] = sisaUang;
      resultPertukaran.push(tukaranUang);
    }
    else{
      counter++;
    }
    if(counter>5){
      return 'Uang Pecahan Tidak Mencukupi'
    }
  }
  return resultPertukaran;
}

console.log(moneyExchanger(100000,20000));
