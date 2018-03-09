let money = [
    [50000,2],
    [20000,3],
    [10000,5],
    [5000,8],
    [2000,6],
    [1000,10],
];

function saveMoney(dataMoney){
    let arrOfObjMoney = [];
    for(let i=0; i<dataMoney.length; i++){
        let objMoney = {};
        objMoney.nominal = dataMoney[i][0];
        objMoney.jumlah = dataMoney[i][1];
        arrOfObjMoney.push(objMoney)
    }
    return arrOfObjMoney;
}

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan){
    let data = saveMoney(money);
    console.log(data);
    console.log('=============================')
    let moneys = nominalYangAkanDitukar;
    let priority = nominalYangDiutamakan;

    let newData = [];
    for(let i=0; i<data.length; i++){
        if(data[i].nominal <= priority){
            newData.push(data[i])
        }
    }
    // console.log(newData)

    var temp = [];
    while(moneys > 0){
        for(let i=0; i<newData.length; i++){
            if(newData[i].nominal == priority && newData[i].jumlah > 0){
                moneys -= newData[i].nominal
                newData[i].jumlah -= 1;
                temp.push(newData[i].nominal)
            } 
            // else {
            //     moneys -= newData[i].nominal
            //     newData[i].jumlah -= 1;
            //     temp.push(newData[i].nominal)
            // }
        }
    }
    // console.log(data)
    // console.log(temp)
    return temp;

}

// console.log(moneyExchanger(100000))
console.log(moneyExchanger(100000, 50000))
console.log(moneyExchanger(100000, 20000))