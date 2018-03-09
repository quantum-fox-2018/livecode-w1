// nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, 
// nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.
var money = [[50000, 2],
            [20000, 3],
            [10000, 5],
            [5000, 8],
            [2000, 6],
            [1000, 10]]

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
    //your code here...
    let totalMoney = 0;
    let arrMoney = [];

    for(let counter = 0; counter<money.length; counter++){
        if(nominalYangDiutamakan === undefined){
            for(let counter2 = 0; counter2<money[counter][1]; counter2++){
                if(nominalYangAkanDitukar <= 0){
                    return arrMoney;
                }
                else if(nominalYangAkanDitukar - money[counter][0] < 0){
                    break;
                }
                nominalYangAkanDitukar -= money[counter][0];
                arrMoney.push(money[counter][0]);
                
            }
        }
        else if(nominalYangDiutamakan >= money[counter][0]){
            for(let counter2 = 0; counter2<money[counter][1]; counter2++){
                if(nominalYangAkanDitukar <= 0){
                    return arrMoney;
                }
                else if(nominalYangAkanDitukar - money[counter][0] < 0){
                    break;
                }
                nominalYangAkanDitukar -= money[counter][0];
                arrMoney.push(money[counter][0]);
            }
        }
    }
    if(nominalYangAkanDitukar > 0){
        return 'Uang pecahan tidak mencukupi';
    }

    return arrMoney;
}

console.log(moneyExchanger(150000))

console.log(moneyExchanger(250000, 20000))

console.log(moneyExchanger(300000))

console.log(moneyExchanger(100000))   
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))   
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))   
//hasilnya : Uang pecahan tidak mencukupi