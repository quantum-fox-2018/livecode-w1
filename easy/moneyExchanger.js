function moneyExchanger(nominal, pecahan) {

  let stokUang = [[50000, 2], [20000, 3], [10000, 5], [5000 , 8], [2000, 6], [1000, 10]]

  let hasilTukar = []

  if (pecahan) {

    let jumlahPecahan = nominal / pecahan

    for (var i = 0; i < stokUang.length; i++) {

      if (stokUang[i][0] == pecahan) {

        while (nominal != 0) {

          hasilTukar.push(stokUang[i][0])
          stokUang[i][1] -=1
          nominal -= stokUang[i][0]

          if (stokUang[i][1] == 0) {

            if (i == stokUang.length-1 && nominal != 0 && stokUang[i][1] == 0) {

              return 'Uang pecahan tidak mencukupi'

            }

            i += 1

          }

        }

      }

    }

  } else {

    for (var i = 0; i < stokUang.length; i++) {

      while (nominal != 0) {

        hasilTukar.push(stokUang[i][0])
        stokUang[i][1] -=1
        nominal -= stokUang[i][0]

        if (stokUang[i][1] == 0) {

          i += 1

        }

      }

    }

  }

  return hasilTukar



}

console.log(moneyExchanger(100000))
//hasilnya : [ 50000, 50000 ]

console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
