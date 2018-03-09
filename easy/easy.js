function moneyExchanger(jumlahUang, prioritasNominal){
  var pecahanResultArr = [];
  var pecahanUang = [
    {nominal:50000 ,jumlah:2},
    {nominal:20000 ,jumlah:3},
    {nominal:10000 ,jumlah:5},
    {nominal:5000 ,jumlah:8},
    {nominal:2000  ,jumlah:6},
    {nominal:1000  ,jumlah:10}
  ]


  var indexPecahanUang = 0;
  for (var i = 0; i < pecahanUang.length; i++) {
    if (pecahanUang[i].nominal === prioritasNominal) {
      indexPecahanUang = i;
    }
  }

  var status = true;
  while(jumlahUang >= prioritasNominal && status === true){
    if (pecahanUang[indexPecahanUang].jumlah !== 0) {
      jumlahUang-=prioritasNominal;
      pecahanResultArr.push(prioritasNominal)
      pecahanUang[indexPecahanUang].jumlah -= 1;
    }else{
      status = false
    }
  }

  for (var i = indexPecahanUang+1; i < pecahanUang.length; i++) {
    var status = true;
    while(jumlahUang >= pecahanUang[i].nominal && status === true){
      if (pecahanUang[i].jumlah !== 0) {
        jumlahUang-=pecahanUang[i].nominal;
        pecahanResultArr.push(pecahanUang[i].nominal)
        pecahanUang[indexPecahanUang].jumlah -= 1;
      }else{
        status = false;
      }
    }
  }

  if (jumlahUang > 0) {
    return "Uang pecahan tidak mencukupi"
  }

  return pecahanResultArr

}

console.log(moneyExchanger(14000, 2000));
