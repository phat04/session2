const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "admin";

let username = prompt("Nhập tên đăng nhập:"); // Hàm prompt sẽ hiển thị một hộp thoại yêu cầu người dùng nhập dữ liệu. Dữ liệu này sẽ được lưu trữ trong biến username.
console.log(`Tên đăng nhập đã nhập: ${username}`); // In ra tên đăng nhập đã nhập bởi người dùng.
let password = prompt("Nhập mật khẩu:"); // Hàm prompt sẽ hiển thị một hộp thoại yêu cầu người dùng nhập dữ liệu. Dữ liệu này sẽ được lưu trữ trong biến password.
console.log(`Mật khẩu đã nhập: ${password}`); // In ra mật khẩu đã nhập bởi người dùng.

if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
  // Kiểm tra nếu username và password khớp với giá trị đã định nghĩa trước đó.
  console.log("Đăng nhập thành công!"); // Nếu điều kiện đúng, in ra thông báo đăng nhập thành công.
  alert("Chào mừng bạn đến với hệ thống!"); // Hiển thị một hộp thoại chào mừng người dùng.
} else {
  console.log("Đăng nhập thất bại!"); // Nếu điều kiện sai, in ra thông báo đăng nhập thất bại.
  alert("Tên đăng nhập hoặc mật khẩu không đúng!"); // Hiển thị một hộp thoại thông báo lỗi.
}
