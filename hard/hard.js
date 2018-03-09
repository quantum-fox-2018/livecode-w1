function generateBarChart(arr){
    let highestNum = 0;

    for(let counter =0; counter<arr.length; counter++){
        if(highestNum<arr[counter]){
            highestNum = arr[counter];
        }
    }

    let numDecrement = highestNum;

    for(let counter = 0; counter<highestNum + 1;counter++){
        let printRow =`${highestNum-counter}|`;   

        if(counter === highestNum){
            for(let counter2 =0; counter2<arr.length; counter2++){
                printRow += `-(${arr[counter2]})-`
            }
        }else{
            for(let counter2 =0; counter2<arr.length; counter2++){
                //Print kosong ketika masih dibawah numDecrement
                if(arr[counter2] < numDecrement){
                    printRow += '     ';
                }else{
                    printRow += ' III ';
                }
            }
            numDecrement--;
        }
        console.log(printRow);
    }
    
}

generateBarChart([3, 6, 4, 7, 2]);
generateBarChart([9, 8, 7, 0, 1, 2, 3]);
generateBarChart([1,3,2]);
generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);