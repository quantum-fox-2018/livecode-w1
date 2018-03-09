function generateBarChart(arrBar){
  let largestNum= 0;
  for(let i=0; i<arrBar.length; i++){
    if(arrBar[i]> largestNum)
    largestNum = arrBar[i]
  }
  for(let j=0; j<=largestNum; j++){
    let result='';
    for(let k=0; k<arrBar.length; k++){
      if(k==0){
        result+=`${largestNum-j}|`
      }else if(j==largestNum && k!==0){
        result+=`-(${arrBar[k]})-`
      }else{
        result+=' III '
      }
    }
    console.log(result);
  }
}
generateBarChart([3, 6, 4, 7, 2]);
