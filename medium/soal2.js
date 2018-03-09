/*jshint esversion:6*/
function generateBorderBox(num){
  let hasil = [];
  for (let i = 0; i < num; i++) {
    let hasil2 = [];
    for (let j = 0; j < num; j++) {
      if (i === 0 || i === num - 1) {
        hasil2.push('I');
      } else if (j === 0 || j === num - 1) {
        hasil2.push("I");
      } else {
        hasil2.push(' ');
      }
    }
    hasil.push(hasil2.join(''));
  }
  return hasil.join("\n");
}
console.log(generateBorderBox(9));
