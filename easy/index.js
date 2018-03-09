/*
Example
nominal 50000 berjumlah 2,
nominal 20000 berjumlah 3,
nominal 10000 berjumlah 5,
nominal 5000 berjumlah 8,
nominal 2000 berjumlah 6,
nominal 1000 berjumlah 10

PSEUDOCODE
1. CREATE FUNCTION
2. CREATE empty variable to save exchanged money
3. First parameter is min 100000
3. IF second parameter is empty or blank
    THEN LOOP FROM 0 of StockMoney until meets number first parameter
4. ELSE
    THEN LOOP FROM desired money in second parameter until meets number of first parameter
5. COUNT Money in empty variable
6. IF total money is below required first parameter
    RETURN Uang pecahan tidak mencukupi
7. ELSE
    RETURN empty variable with money
*/

var stockMoney = [[50000,3],[20000,3],[10000,5],[5000,8],[2000,6],[1000,10]];
// console.log('before',stockMoney);
// console.log(stockMoney.length); //6
// console.log('test');

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
    //your code here... 
    // console.log('test');
    let exchangedMoney = [];
    let countMoney = 0;
    let sisaMoney = nominalYangAkanDitukar;
    let indexTarget = stockMoney.length;
    // console.log(sisaMoney);

    if (!nominalYangDiutamakan) {
        // console.log('test');
        while (sisaMoney != 0) {
            let status = true;
            for (let i = 0; i < stockMoney.length; i++) {
                if (sisaMoney >= stockMoney[i][0] && stockMoney[i][1] > 0 && status == true) {
                    exchangedMoney.push(stockMoney[i][0]);
                    sisaMoney -= stockMoney[i][0];
                    stockMoney[i][1] -= 1;
                    status = false;
                }
            }   
        }
    } else {
        // console.log('test1');
        while (sisaMoney != 0) {
            let status = true;
            for (let i = 0; i < stockMoney.length; i++) {
                if (nominalYangDiutamakan >= stockMoney[i][0] && sisaMoney >= stockMoney[i][0] && stockMoney[i][1] > 0 && status == true) {
                    exchangedMoney.push(stockMoney[i][0]);
                    sisaMoney -= stockMoney[i][0];
                    stockMoney[i][1] -= 1;
                    status = false;
                }
            }
        }
    }
    // console.log('after',stockMoney);

    for (let i = 0; i < exchangedMoney.length; i++) {
        countMoney += exchangedMoney[i];
    }
    // console.log('===0',countMoney);
    // console.log('===1',nominalYangAkanDitukar);
    // console.log('===2',exchangedMoney);

    if (countMoney >= nominalYangAkanDitukar) {
        return exchangedMoney;
    } else {
        // console.log('test')
        return 'Uang pecahan tidak mencukupi';
    }
}

console.log(moneyExchanger(150000))
//hasilnya : [ 50000, 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
// hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

// console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
