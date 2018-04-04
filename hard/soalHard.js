function generateBarChart(numbers){

  var batangSign = " III ";
  let outputResult = "";
  let nilaiMax = numbers[0];
  for(let i=0;i<numbers.length;i++){

    if(nilaiMax<numbers[i]){
      nilaiMax = numbers[i];
    }
  }

  for(let i=nilaiMax;i>=0;i--){
    outputResult = "";
    outputResult = outputResult + i + '|'

    for(let j=0;j<numbers.length;j++){

      if(i>0){
        if( numbers[j] >= i){
          outputResult = outputResult + batangSign
        }
          else{
          outputResult = outputResult + "     ";
        }
      }
      else{
        outputResult = outputResult + '-(' + numbers[j] + ')-';
      }
    }
    console.log(outputResult);
  }
}

generateBarChart([1,2,3,4,5,4,3,2,1]);
//generateBarChart([3,6,4,7,2]);
//generateBarChart([9,8,7,0,1,2,3]);
