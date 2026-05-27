let salary = +prompt("Nhập vào mức lương của bạn: ");
let age = +prompt("Nhập vào tuổi của bạn: ");
let debtStatus = confirm("Bạn có nợ nần gì không?");

if (salary > 15 && age < 60 && age > 18 && !debtStatus) {
  console.log("Bạn đủ điều kiện để vay tiền.");
  alert("Bạn đủ điều kiện để vay tiền.");
} else {
  console.log("Bạn không đủ điều kiện để vay tiền.");
  alert("Bạn không đủ điều kiện để vay tiền.");
}
