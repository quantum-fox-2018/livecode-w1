function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan){
  var money = [{
    nominal: 50000,
    stock: 2
  },{
    nominal: 20000,
    stock: 3
  },{
    nominal: 10000,
    stock: 5
  },{
    nominal: 5000,
    stock: 8
  },{
    nominal: 2000,
    stock: 6
  },{
    nominal: 1000,
    stock: 10
  }]

  let exchange = [];
  if(nominalYangDiutamakan==undefined){
    for(let i=0; i<money.length; i++){
      while(money[i].stock>0 && nominalYangAkanDitukar>=money[i].nominal){
        nominalYangAkanDitukar -= money[i].nominal;
        money[i].stock--;
        exchange.push(money[i].nominal);
      }
    }
    return exchange;
  } else {
    for(let i=0; i<money.length; i++){
      while(money[i].stock>0 && nominalYangAkanDitukar>=money[i].nominal && money[i].nominal<=nominalYangDiutamakan){
        nominalYangAkanDitukar -= money[i].nominal;
        money[i].stock--;
        exchange.push(money[i].nominal);
      }
    }
    if(nominalYangAkanDitukar==0){
      return exchange;
    } else {
      return `Uang pecahan tidak mencukupi`;
    }
  }
}

console.log(moneyExchanger(100000));
console.log(moneyExchanger(100000, 20000));
console.log(moneyExchanger(100000, 5000));
