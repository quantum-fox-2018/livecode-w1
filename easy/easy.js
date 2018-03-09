function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
    //your code here...
    let stockUang = [{
        value: 50000,
        stock: 2
    }, {
        value: 20000,
        stock: 3
    }, {
        value: 10000,
        stock: 5
    }, {
        value: 5000,
        stock: 8
    }, {
        value: 2000,
        stock: 6
    }, {
        value: 1000,
        stock: 10
    }]


    let array = []

    for (let i = 0; i < stockUang.length; i++) {
        if (!nominalYangDiutamakan) {
            if (stockUang[i].stock != 0) {
                nominalYangAkanDitukar -= stockUang[i].value
                array.push(stockUang[i].value)
                stockUang[i].stock--
                    i--
                    if (nominalYangAkanDitukar == 0) {
                        return array
                    }
            }
        } else {
            if (stockUang[i].value == nominalYangDiutamakan) {
                for (let j = i; j < stockUang.length; j++) {
                    if (stockUang[j].stock != 0) {
                        nominalYangAkanDitukar -= stockUang[j].value
                        array.push(stockUang[j].value)
                        stockUang[j].stock--
                            j--
                            if (nominalYangAkanDitukar == 0) {
                                return array
                            }
                        }
                    }
                }
            }
        }
    return 'Uang pecahan tidak mencukupi'
}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//   //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//   //hasilnya : Uang pecahan tidak mencukupi