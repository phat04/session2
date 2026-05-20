let average = +prompt("Nhập điểm trung bình của bạn:");
let attendace = +prompt("Nhập số buổi học đã tham gia:");

let specialCondition = confirm("Bạn có thuộc diện đặc cách không?");

if ((average >= 5 && attendace >= 75) || specialCondition) {
  console.log("Bạn đã đủ điều kiện để thi.");
} else {
  console.log("Bạn không đủ điều kiện để thi.");
}
