function moneyExchanger(jmlExchanged, BiggestExchanger) {
  const exchangers = [50000,20000,10000,5000,1000];
  const banyakExchangers = [2,3,5,8,10];
  let result = [];
  let indexExchangers = 0;

  if(BiggestExchanger) {
    indexExchangers = exchangers.indexOf(BiggestExchanger);
  }

  debugger;

  for(let index = indexExchangers; index < exchangers.length;index++) {
    for(let i = 0; i <  banyakExchangers[index]; i++) {
      if(jmlExchanged - exchangers[index] < 0){
        break;
      }
      jmlExchanged -= exchangers[index];
      result.push( exchangers[index]);
    }
  }

  if(jmlExchanged) return 'Uang pecahan tidak mencukupi';

  return result;

}

console.log(moneyExchanger(100000,5000));
