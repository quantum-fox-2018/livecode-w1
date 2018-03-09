function insertionSort(arr){
  var count1 = 0
  while(count1 < arr.length){
    var value = arr[count1]
    var count2 = count1 -1
    while(count2 >=0 && arr[count2] > value){
      arr[count2+1] = arr[count2]
      count2 --
    }
    arr[count2+1] = value
    count1++
  }
  return arr
}

var a = [3, 6, 4, 7, 2]
var max = [];
for(var i =0; i < a.length; i++){
  max.push(a[i]);
}

insertionSort(max)
console.log(a)
console.log(max)
for(var j = max[max.length-1]; j>=0; j--){
  if(j ===0){
  for(var k = 0; k < a.length+(2*(a.length));k++){
    var tampung = ''

      //if(k ===0){
        tampung = '-(' + a[k] + ')-'
      //}
    }
  }
  console.log(j+'|'+tampung);
}



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
