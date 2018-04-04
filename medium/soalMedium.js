function generateBorderBox(row){
  let printI = ""
  for(let i=0;i<row;i++){
    printI = "I";

    for(let j=1;j<row-1;j++){
      if(i==0||i==row-1){
        printI = printI + "I";
      }
      else if(i>=2 && i <= row-3){
        printI = printI + " I";
        printIGap = "";
        if(i==2||i==row-3){
          for(let k=0;k<row-6;k++){
            printIGap = printIGap + "I";
          }
        }
        else{
          for(let k=0;k<row-6;k++){
            if(k == (row-7)/2 && i == (row-1)/2){
              printIGap = printIGap +"*"
            }
            else{
              printIGap = printIGap + " ";
            }
          }
        }
        printI = printI + printIGap;
        printI = printI + "I ";
        break;
      }
      else{
        printI = printI + " ";
      }
    }
    printI = printI + "I";
    console.log(printI);
  }
}

generateBorderBox(17);
