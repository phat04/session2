console.log("Hello em!");

const name = prompt("Nhập tên của bạn:");
console.log("Xin chào " + name + "!");

let age = prompt("Nhập tuổi của bạn:");
age = parseInt(age);
if (age >= 18) {
  console.log("Bạn đã đủ tuổi để tham gia.");
} else {
  console.log("Bạn chưa đủ tuổi để tham gia.");
}

alert("Chào mừng bạn đến với JavaScript!");
