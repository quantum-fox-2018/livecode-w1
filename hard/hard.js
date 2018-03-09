

function generateBarChart(arr){
  var maxValue = Math.max(...arr)

  for (var i = maxValue; i >= 0 ; i--){
    var baris = "";
    if (i === 0) {
      baris += 0 + "|";
      for (var j = 0; j < arr.length; j++) {
        if(j === arr.length-1) {
          baris += "("+ arr[j] +")"+"-"
        }else{
          baris += "("+ arr[j] +")"+"--"
        }
      }
    }else{
      baris += i + "|"
      for (var j = 0; j < arr.length; j++) {
        if (arr[j] >= i ) {
          baris += "III  "
        }else{
          baris += "     "
        }
      }
    }
    console.log(baris);
  }
}

generateBarChart([5,2,3,1,9,4,3,5]);
