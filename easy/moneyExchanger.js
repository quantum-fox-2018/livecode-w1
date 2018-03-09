const pecahan = [[50000,2],[20000,3],[10000,5],[5000,8],[2000,6],[1000,10]]
// console.log(pecahan[0][1])

function moneyExchanger(nominalYangAkanDitukar, nominalYangDiutamakan) {

  var hasilPecahan = []
  var sisa = 0
  if(nominalYangDiutamakan===undefined){
    // console.log(nominalYangAkanDitukar)
    if(nominalYangAkanDitukar>=50000){
      let jml50 = pecahan[0][1]
      while(jml50>0){
        if(nominalYangAkanDitukar===0){
          return hasilPecahan
        }
        nominalYangAkanDitukar-=50000
        jml50-=1
        hasilPecahan.push(50000)
      }
    }

    if(nominalYangAkanDitukar>=20000){
      let jml20 = pecahan[1][1]
      while(jml20>0){
        if(nominalYangAkanDitukar===0){
          return hasilPecahan
        }
        nominalYangAkanDitukar-=20000
        jml20-=1
        hasilPecahan.push(20000)
      }
    }

    if(nominalYangAkanDitukar>=10000){
      let jml10 = pecahan[2][1]
      while(jml10>0){
        if(nominalYangAkanDitukar===0){
          return hasilPecahan
        }
        nominalYangAkanDitukar-=10000
        jml10-=1
        hasilPecahan.push(10000)
      }
    }

    if(nominalYangAkanDitukar>=1000){
      let jml1 = pecahan[5][1]
      while(jml1>0){
        if(nominalYangAkanDitukar===0){
          return hasilPecahan
        }
        nominalYangAkanDitukar-=1000
        jml1-=1
        hasilPecahan.push(1000)
      }
    }

    // if(nominalYangAkanDitukar<1000){
    //   return 'Uang pecahan tidak mencukupi'
    // }

    // console.log(nominalYangAkanDitukar)
    // console.log(hasilPecahan)
    return hasilPecahan
  }
}

console.log(moneyExchanger(150000))
//hasilnya : [ 50000, 50000 ]

// console.log(moneyExchanger(100000, 20000))
//hasilnya : [ 20000, 20000, 20000, 10000, 10000, 10000, 10000 ]

// console.log(moneyExchanger(100000, 5000))
//hasilnya : Uang pecahan tidak mencukupi
