function generateTopandBot(size){
  for (var k = 0; k < size; k++) {
    baris += "I"
  }
  return baris;
}

function generateBorderBox(size){
  var titikTengah = Math.floor(size/2)

  for (var i = 0; i < size; i++) {
    var baris = ""
    if (i === 0 || i === size-1) {
      for (var z = 0; z < size; z++) {
        baris += "I"
      }
    }else{
      for (var j = 0; j < size; j++) {
        if(i === titikTengah && j === titikTengah){
          baris += "*"
        }else if (j === 0 || j === size-1) {
          baris += "I"
        }else{
          if (i === size-size+4 && j > 3 && j < size-3 || i === size-4 && j < size-3 && j > 3) {
            baris += "I"
          }else{
            if (i <size-3 && i> size-size+3 && j === 3 || i > size-size+3 && i <size-3 && j === size-3) {
              baris += "I"
            }else{
              baris += " "
            }

          }

        }
      }
    }
    console.log(baris);
  }

}

generateBorderBox(23)
