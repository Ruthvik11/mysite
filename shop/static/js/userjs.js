document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#users-table tbody");
  const searchInput = document.getElementById("search-input");
  function filterUsers() {
    console.log("search clicked");
    const searchTerm = searchInput.value.toLowerCase();
    const filteredUsers = users.filter((user) => {
      return Object.values(user).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
    renderUsers(filteredUsers);
  }

  searchInput.addEventListener("input", filterUsers);

  renderUsers(users);
});
