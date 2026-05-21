// let temp = 1;
// for (i = 1; i < 10 || temp < 10; i++) {
//   if (i === 1) {
//     console.log(`\nBảng cửu chương ${temp}:`);
//   }

//   console.log(`${temp} x ${i} = ${i * temp}`);

//   if (i >= 9) {
//     temp++;
//     i = 0;
//   }
//   if (temp > 9) {
//     break;
//   }
// }
let a;
let b;

while (!a || !b || a <= 0 || b <= 0 || a < b) {
  b = +prompt("Nhập chiều rộng b:");
  a = +prompt("Nhập chiều dài a:");
}

let S = a * b;

console.log(
  `Diện tích hình chữ nhật có chiều dài ${a} và chiều rộng ${b} là: ${S}`,
);

alert(`Diện tích hình chữ nhật có chiều dài ${a} và chiều rộng ${b} là: ${S}`);
