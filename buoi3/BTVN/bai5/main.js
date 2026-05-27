let number = +prompt("Nhập vào một số trong khoảng 1-10: ");
while (number < 1 || number > 10) {
  number = +prompt("Số bạn nhập không hợp lệ. Vui lòng nhập lại: ");
}

console.log(`Bạn đã nhập số: ${number}`);
alert(`Bạn đã nhập số: ${number}`);
