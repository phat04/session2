let numberA = 5;
let stringB = "5";

console.log(numberA == stringB); // Kết quả sẽ là true vì số 5 được chuyển thành chuỗi "5" và sau đó được so sánh  với nhau.

console.log(numberA === stringB); // Kết quả sẽ là false vì số 5 và chuỗi "5" có kiểu dữ liệu khác nhau, nên không được coi là bằng nhau khi sử dụng toán tử so sánh nghiêm ngặt (===).

let result = confirm("Bạn có muốn tiếp tục không?"); // Hàm confirm sẽ hiển thị một hộp thoại với thông báo "Bạn có muốn tiếp tục không?" và hai nút "OK" và "Cancel". Nếu người dùng nhấn "OK", hàm sẽ trả về true, ngược lại nếu nhấn "Cancel", hàm sẽ trả về false.
console.log(result); // In ra kết quả của hàm confirm
