function moneyExchanger(money, needCoin){
    let coin = [[50000,2],[20000,3],[10000,5],[5000,8],[2000,6],[1000,10]]
    let result = []

    for(let i=0; i<coin.length; i++){
        // result.push(coin[i][0])
        while(money - coin[i][0] >= 0 && coin[i][1] > 0 && coin[i][1] != 0){
            

            if(coin[i][0] == needCoin){
                coin[i][0] = needCoin
                money = money - coin[i][0]
                coin[i][1]--
                result.push(coin[i][0])
            }
            else if(!needCoin){
                money = money - coin[i][0]
                coin[i][1]--
                result.push(coin[i][0])
            }
            else {
                return 'Uang pecahan tidak mencukupi'
            }
            // coin[i][0] = needCoin
            // coin[i][1]--
        }
    }
    // console.log(needCoin)
    return result
}




console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]
console.log(moneyExchanger(100000, 20000))
// //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]
console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi