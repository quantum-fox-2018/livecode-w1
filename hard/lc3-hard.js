//generate Bar Chart

function generateBarChart(arr){
  //mencari nilai tertinggi
  let highNum = arr[0];
  for(let i = 0; i < arr.length; i++){
      if(highNum < arr[i]){
          highNum = arr[i];
      }
  }
  // console.log(highNum);

  let endResult = [];
  //
  for(let i = highNum; i >= 0; i--){
      let output = [];
      let num = 0;
      for(let j = 0; j < arr.length; j++){
        if(i === 0 && j !== 0){
          output.push(num);
          num++;
        }else{
          if(j === 0){
            output.push(i);
          }else{
            output.push(' ');
          }
        }



      }
      endResult.push(output);
  }

  console.log(endResult);

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
