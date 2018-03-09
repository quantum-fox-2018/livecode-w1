function generateBarChart(arr) {
  let chart;
  let maxChart = Math.max(...arr);
  for(let i = maxChart; i >= 0; i--) {
    chart = `${i}|`;
    for(let j = 0; j < arr.length; j++) {
      if(i === 0) {
        chart += `-(${arr[j]})-`;
      } else {
        if(i <= arr[j]) {
          chart+=" III ";
        } else {
          chart+="     ";
        }
      }
    }
    console.log(chart);
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

generateBarChart([9, 8, 7, 0, 1, 2, 3]);
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

generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);
/*
5|                     III
4|                III  III  III
3|           III  III  III  III  III
2|      III  III  III  III  III  III  III
1| III  III  III  III  III  III  III  III  III
0|-(1)--(2)--(3)--(4)--(5)--(4)--(3)--(2)--(1)-
*/
