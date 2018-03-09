//1. buat variabel sebuah array kosong
//2. looping i <  number ; i++
//  2a. buat variabel string kosong
//  2b. apabila i === num maka isi string dengan I
//3. looping j <  number ; j++


function generateBorderBox(num) {
  var tmp = [];
  for (var i = 1; i <= num; i++) {
    var str = "";
    if(i===num){
      str+='I';
    }
    else if(i%2===0){
      str+= ' '
    }
    else{
      str+= "I";
    }
    for (var j = 1; j <= num; j++) {
      str+='I'
    }
    tmp.push(str);
  }
  console.log(tmp);
}



console.log(generateBorderBox(7));
