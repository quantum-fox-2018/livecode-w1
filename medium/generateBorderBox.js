// Buatlah sebuah function bernama `generateBorderBox` yang menerima satu parameter berupa number. function `generateBorderBox` akan membuat sebuah kotak ber-border dengan simbol `I` dengan panjang dan tinggi sesuai number parameter. Kemudian, di bagian paling tengah dari kotak, tuliskan simbol `*`.
//
// Border disini bentuknya dua lapis, dimana dipisahkan dengan jarak satu spasi. Jadi ada border luar dan ada border dalam.
//
// **Asumsi untuk soal ini adalah parameter number yang diinput hanya angka ganjil yang lebih dari 7!**
//
// Contoh untuk input 9:
//
// ```javascript
// IIIIIIIII
// I       I
// I IIIII I
// I I   I I
// I I * I I
// I I   I I
// I IIIII I
// I       I
// IIIIIIIII
// ```
//
// ## test cases
//
// ```javascript

function generateBorderBox(input) {

  let border = ''
  let mid = Math.floor(input / 2)

    for (let i = 0; i < input; i++) {

      border = ''

      for (let j = 0; j < input; j++) {

        if ((i == 2 || i == input-3) && (j >= 3 && j <= input-4)) {

          border += 'I'

        }else {


        if (i == 0 || i == input-1) {

          border += 'I'

        }
         else {

          if (i >= 2 && i <= input-3 && (j == 2 || j == input-3)) {

             border += 'I'

          } else {

             if (j == 0 || j == input-1) {

               border += 'I'

             } else {

               if (i == mid && j == mid) {

                 border += '*'

               }else {

                 border += ' '

               }

             }

           }

          }

        }


      }

      console.log(border);

    }


}

generateBorderBox(9);
/*
IIIIIIIII
I       I
I IIIII I
I I   I I
I I * I I
I I   I I
I IIIII I
I       I
IIIIIIIII
*/

generateBorderBox(13);
/*
IIIIIIIIIIIII
I           I
I IIIIIIIII I
I I       I I
I I       I I
I I       I I
I I   *   I I
I I       I I
I I       I I
I I       I I
I IIIIIIIII I
I           I
IIIIIIIIIIIII
*/

generateBorderBox(23);
/*
IIIIIIIIIIIIIIIIIIIIIII
I                     I
I IIIIIIIIIIIIIIIIIII I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I        *        I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I I                 I I
I IIIIIIIIIIIIIIIIIII I
I                     I
IIIIIIIIIIIIIIIIIIIIIII
*/
// ```
