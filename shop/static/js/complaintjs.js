document.addEventListener("DOMContentLoaded", function () {
  //   const complaints = [
  //     {
  //       name: "Jane Smith",
  //       email: "jane.smith@example.com",
  //       subject: "Delayed Delivery",
  //       complaint: "My order is delayed by 2 weeks.",
  //     },
  //     {
  //       name: "Alice Johnson",
  //       email: "alice.johnson@example.com",
  //       subject: "Damaged Product",
  //       complaint: "The product I received is damaged.",
  //     },
  //     // More complaints...
  //   ];

  const tableBody = document.querySelector("#complaints-table tbody");
  const searchInput = document.getElementById("search-input");

  function renderComplaints(complaints) {
    tableBody.innerHTML = "";
    // complaints.forEach((complaint) => {
    //   const complaintRow = document.createElement("tr");
    //   complaintRow.innerHTML = `
    //             <td>${complaint.name}</td>
    //             <td>${complaint.email}</td>
    //             <td>${complaint.subject}</td>
    //             <td>${complaint.complaint}</td>
    //         `;
    //   tableBody.appendChild(complaintRow);
    // });
  }

  function filterComplaints() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredComplaints = complaints.filter((complaint) => {
      return Object.values(complaint).some((value) =>
        String(value).toLowerCase().includes(searchTerm)
      );
    });
    renderComplaints(filteredComplaints);
  }

  searchInput.addEventListener("input", filterComplaints);

  renderComplaints(complaints);
});
