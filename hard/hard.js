function generateBarChart(input){
  var newArr=[]
  var max = input.reduce(function(a, b) {
    return Math.max(a, b);
  })
  var counter=0
  var bound=(input.length*2)

  for (let i = 0; i < max; i++) {
    newArr.push([])
    for (let j = 0; j <bound ; j++) {
      if(j%2!==0){
        if(i>=max-input[counter]){
          newArr[i].push('III')
          counter++
        }
      }
      else{
        newArr[i].push(' ')
      }

    }

    counter=0
    newArr[i]=newArr[i].join('')
  }
  console.log(newArr.join('\n'));
}

generateBarChart([3, 6, 4, 7, 2]);

// [ [(0,0),(0,1),(0,2),(0,3),(0,4)],
//   [(1,0),(1,1),(1,2),(1,3),(1,4)],
//   [(2,0),(2,1),(2,2),(2,3),(2,4)],
//   [(3,0),(3,1),(3,2),(3,3),(3,4)],
//   [(4,0),(4,1),(4,2),(4,3),(4,4)]
// ]

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

// generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);
/*
5|                     III
4|                III  III  III
3|           III  III  III  III  III
2|      III  III  III  III  III  III  III
1| III  III  III  III  III  III  III  III  III
0|-(1)--(2)--(3)--(4)--(5)--(4)--(3)--(2)--(1)-
*/
