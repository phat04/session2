import { fetchUsers } from "./apiService.js";

async function renderUsers() {
  try {
    const users = await fetchUsers();

    const userList = document.getElementById("user-list");

    // Tạo HTML
    const html = users
      .map(({ name, email, website }) => {
        return `
        <div class="user-card">
          <h2>${name}</h2>
          <p>Email: ${email}</p>
          <p>Website: ${website}</p>
        </div>
      `;
      })
      .join("");

    // Hiển thị lên giao diện
    userList.innerHTML = html;
  } catch (error) {
    console.log("Lỗi:", error);
  }
}

renderUsers();
