function generateBarChart(arr) {
  var max = 0
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }

  var loopI = max
  var loopJ = (arr.length*2) +1


  for (var i = 0; i <= loopI; i++) {
    var strGrph = ''
    for (var j = 0; j < loopJ; j++) {
      if (j === 0) {
        strGrph += max + '|'
        max--
      } else if (j > 1 && i === 7) {
        strGrph += '-'
      }
    }
    console.log(strGrph);
    // console.log(i);
  }
}

generateBarChart([3, 6, 4, 7, 2]);
/*
7|                III
6|      III       III
5|      III       III
4|      III  III  III
3| III  III  III  III
2| III  III  III  III  III
1| III  III  III  III  III
0|-(3)--(6)--(4)--(7)--(2)-
*/

// generateBarChart([9, 8, 7, 0, 1, 2, 3]);
/*
9| III
8| III  III
7| III  III  III
6| III  III  III
5| III  III  III
4| III  III  III
3| III  III  III                 III
2| III  III  III            III  III
1| III  III  III       III  III  III
0|-(9)--(8)--(7)--(0)--(1)--(2)--(3)-
*/
