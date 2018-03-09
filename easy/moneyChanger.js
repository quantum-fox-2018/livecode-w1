// 1. buatlah sebuah variable yang dapat menyimpan data mengenai pecahan uang dan jumlah nya, contoh nya :
// nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.

// 2. buat sebuah function bernama 'moneyExchanger' yang menerima 2 parameter, parameter pertama adalah `nominalYangAkanDitukar` (minimal 100000) dan parameter kedua adalah `nominalYangDiutamakan`. 
//    Function tersebut akan menghasilkan pecahan uang dari `nominalYangAkanDitukar` dengan ketentuan :
// a. Apabila `nominalYangDiutamakan` kosong, maka pecahan nya berurutan mulai dari pecahan terbesar nya
// b. Apabila diisi, maka pecahan nya dimulai dari `nominalYangDiutamakan` tsb. `nominalYangDiutamakan` hanya bisa diisi oleh pecahan uang yang ada di nomor 1.
// c. Apabila jumlah pecahan tidak mencukupi, maka output nya : 'Uang pecahan tidak mencukupi'

    var objUang = [
                    [nominal= 50000, jumlah = 2],
                    [nominal= 20000, jumlah= 3],
                    [nominal= 10000, jumlah= 5],
                    [nominal= 5000, jumlah= 8],
                    [nominal= 2000, jumlah= 6],
                    [nominal= 1000, jumlah= 10]
                  ]

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {

    let arrResult = []

        for (let i = 0; i < objUang.length; i++) {

            if (objUang[i][1] === nominalYangDiutamakan) {

                if (nominalYangAkanDitukar > objUang[i][0]) {

                    nominalYangAkanDitukar -= objUang[i][0]
                    arrResult.push(objUang[i][0])
                    objUang[i][1] -= 1

                } if (objUang[i][1] !== 0) {

                    nominalYangAkanDitukar -= objUang[i][0]
                    arrResult.push(objUang[i][0])
                    objUang[i][1] -= 1
                }
            } else {
            
                if (nominalYangAkanDitukar > objUang[i][0]) {

                    nominalYangAkanDitukar -= objUang[i][0]
                    arrResult.push(objUang[i][0])
                    objUang[i][1] -= 1
 
                } if (objUang[i][1] !== 0) {

                    nominalYangAkanDitukar -= objUang[i][0]
                    arrResult.push(objUang[i][0])
                    objUang[i][1] -= 1
                }
            }
    }

    return arrResult
}

console.log(moneyExchanger(100000))   
//hasilnya : [ 50000, 50000 ]

// console.log(moneyExchanger(100000, 20000))   
// //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

// console.log(moneyExchanger(100000, 5000))   
//hasilnya : Uang pecahan tidak mencukupi