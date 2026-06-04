async function getUsers() {
  try {
    // Gọi API
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    const users = await response.json();

    const userNames = users.map((user) => user.name);

    console.log(userNames);
  } catch (error) {
    console.log("Có lỗi xảy ra:", error);
  }
}

getUsers();
