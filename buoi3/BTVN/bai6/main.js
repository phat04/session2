let chieudai = +prompt("Nhập vào chiều dài của hình chữ nhật: ");
let chieurong = +prompt("Nhập vào chiều rộng của hình chữ nhật: ");

console.log(`Chiều dài: ${chieudai}, Chiều rộng: ${chieurong}`);

for (let i = 0; i < chieudai; i++) {
  for (let j = 0; j < chieurong; j++) {
    console.log("*");
  }
  console.log(""); // In một dòng trống sau mỗi hàng
}
