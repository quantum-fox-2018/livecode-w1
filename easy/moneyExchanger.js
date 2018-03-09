let pecahanUang = [
  {
    nominal: 50000,
    jumlah: 2
  },
  {
    nominal: 20000,
    jumlah: 3
  },
  {
    nominal: 10000,
    jumlah: 5
  },
  {
    nominal: 5000,
    jumlah: 8
  },
  {
    nominal: 2000,
    jumlah: 6
  },
  {
    nominal: 1000,
    jumlah: 10
  },
];

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan = pecahanUang[0].nominal) {
  if(nominalYangAkanDitukar < 100000) {
    return "Nominal yang akan di tukar minimal 100.000!";
  }
  let arrPecahan = [];
  for(let i = 0; i < pecahanUang.length; i++) {
    if(pecahanUang[i].nominal <= nominalYangDiutamakan) {
      for(let j = 0; j < pecahanUang[i].jumlah; j++) {
        if(nominalYangAkanDitukar >= pecahanUang[i].nominal) {
          arrPecahan.push(pecahanUang[i].nominal);
          nominalYangAkanDitukar-=pecahanUang[i].nominal;
        }
      }
    }
  }
  return (nominalYangAkanDitukar === 0) ? arrPecahan : "Uang pecahan tidak mencukupi";
}

console.log(moneyExchanger(100000));
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000));
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000));
//hasilnya : Uang pecahan tidak mencukupi

console.log(moneyExchanger(300000));
