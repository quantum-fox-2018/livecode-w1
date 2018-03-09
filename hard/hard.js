function generateBarChart(arr){
    let result = []

    for(let i=0; i<arr.length; i++){
        let inside = []
        for( j=0; j<arr.length; j++){
            inside.push(j)
        }
        result.push(inside)
    }
    console.log(result)

}



generateBarChart([3, 6, 4, 7, 2]);
// generateBarChart([9, 8, 7, 0, 1, 2, 3]);
// generateBarChart([1, 2, 3, 4, 5, 4, 3, 2, 1]);