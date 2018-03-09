/*
1. buatlah sebuah variable yang dapat menyimpan data mengenai pecahan uang dan jumlah nya, contoh nya :
nominal 50000 berjumlah 2, nominal 20000 berjumlah 3, nominal 10000 berjumlah 5, nominal 5000 berjumlah 8, nominal 2000 berjumlah 6, nominal 1000 berjumlah 10.

2. buat sebuah function bernama 'moneyExchanger' yang menerima 2 parameter, parameter pertama adalah `nominalYangAkanDitukar` (minimal 100000) dan parameter kedua adalah `nominalYangDiutamakan`. Function tersebut akan menghasilkan pecahan uang dari `nominalYangAkanDitukar` dengan ketentuan :
a. Apabila `nominalYangDiutamakan` kosong, maka pecahan nya berurutan mulai dari pecahan terbesar nya
b. Apabila diisi, maka pecahan nya dimulai dari `nominalYangDiutamakan` tsb. `nominalYangDiutamakan` hanya bisa diisi oleh pecahan uang yang ada di nomor 1.
c. Apabila jumlah pecahan tidak mencukupi, maka output nya : 'Uang pecahan tidak mencukupi'
*/

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {
    //your code here...
    var nominalTukar = [{
            uang: 50000,
            jumlahPecahan: 2
        },
        {
            uang: 20000,
            jumlahPecahan: 3
        },
        {
            uang: 10000,
            jumlahPecahan: 5
        },
        {
            uang: 5000,
            jumlahPecahan: 8
        },
        {
            uang: 2000,
            jumlahPecahan: 6
        },
        {
            uang: 1000,
            jumlahPecahan: 10
        },
    ];
    var hasilUangPecahan = [];

    // console.log(pecahan);

    while (nominalYangAkanDitukar > 0) {
        let i = 0;
        for (i = 0; i < nominalTukar.length; i++) {
            if (nominalYangDiutamakan === undefined) {
                if (nominalYangAkanDitukar === nominalTukar[i].uang && nominalTukar[i].jumlahPecahan > 0) {
                    hasilUangPecahan.push(nominalYangAkanDitukar);
                    nominalYangAkanDitukar -= nominalTukar[i].uang;
                } else {
                    nominalYangAkanDitukar -= nominalTukar[i].uang;
                    hasilUangPecahan.push(nominalYangAkanDitukar);
                }
                nominalTukar[i].jumlahPecahan--
                    if (nominalYangAkanDitukar >= nominalTukar[i].uang && nominalTukar[i].jumlahPecahan > 0) {
                        i--;
                    }
            } else {
                if (nominalYangDiutamakan === nominalTukar[i].uang && nominalTukar[i].jumlahPecahan > 0) {
                    if (nominalYangAkanDitukar === nominalTukar[i].uang) {
                        hasilUangPecahan.push(nominalYangAkanDitukar);
                        nominalYangAkanDitukar -= nominalTukar[i].uang;
                    } else {
                        nominalYangAkanDitukar -= nominalTukar[i].uang;
                        hasilUangPecahan.push(nominalTukar[i].uang);
                    }

                    nominalTukar[i].jumlahPecahan--

                        if (nominalYangAkanDitukar >= nominalTukar[i].uang && nominalTukar[i].jumlahPecahan > 0) {
                            i--;
                        }

                } else {
                    if (nominalYangDiutamakan === nominalTukar[i].uang && nominalTukar[i].jumlahPecahan === 0) {
                        debugger;
                        var j = 1;
                        if (nominalYangAkanDitukar === nominalTukar[i + j].uang) {
                            hasilUangPecahan.push(nominalYangAkanDitukar);
                            nominalYangAkanDitukar -= nominalTukar[i + j].uang;
                        } else {
                            nominalYangAkanDitukar -= nominalTukar[i + j].uang;
                            hasilUangPecahan.push(nominalTukar[i + j].uang);
                        }

                        nominalTukar[i + j].jumlahPecahan--

                            if (nominalYangAkanDitukar >= nominalTukar[i + j].uang && nominalTukar[i + j].jumlahPecahan > 0) {
                                i--;
                            }

                        if (nominalTukar[i + j].jumlahPecahan === 0) {
                            j += 1;
                        }
                        if (nominalYangAkanDitukar >= nominalTukar[i + j].uang && nominalTukar[i + j].jumlahPecahan === 0) {
                            return 'Uang pecahan tidak mencukupi';
                        }
                    }
                }
            }

            if (nominalYangAkanDitukar === 0) {
                break;
            }


        }
    }


    return hasilUangPecahan;
}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
// //hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi