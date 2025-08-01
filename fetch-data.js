async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  const container = document.getElementById("content");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    const userList = document.createElement("ul");

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
      container.appendChild(userList);
    });
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
