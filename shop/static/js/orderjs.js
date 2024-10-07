document.addEventListener("DOMContentLoaded", function () {
  //   const orders = [
  //     {
  //       firstName: "John",
  //       lastName: "Doe",
  //       email: "john.doe@example.com",
  //       address: "123 Elm Street",
  //       city: "Springfield",
  //       state: "IL",
  //       zipcode: "62701",
  //       phone: "123-456-7890",
  //       items: [
  //         {
  //           itemId: 1,
  //           image: "item1.jpg",
  //           productName: "Product 1",
  //           quantity: 2,
  //         },
  //         {
  //           itemId: 2,
  //           image: "item2.jpg",
  //           productName: "Product 2",
  //           quantity: 1,
  //         },
  //       ],
  //     },
  //     // More orders...
  //   ];

  const tableBody = document.querySelector("#orders-table tbody");
  const searchInput = document.getElementById("search-input");

  //   function renderOrders(orders) {
  //     tableBody.innerHTML = "";
  //     orders.forEach((order) => {
  //       const orderRow = document.createElement("tr");
  //       orderRow.classList.add("expandable-row");
  //       orderRow.innerHTML = `
  //                 <td>${order.firstName}</td>
  //                 <td>${order.lastName}</td>
  //                 <td>${order.email}</td>
  //                 <td>${order.address}</td>
  //                 <td>${order.city}</td>
  //                 <td>${order.state}</td>
  //                 <td>${order.zipcode}</td>
  //                 <td>${order.phone}</td>
  //                 <td>View Products</td>
  //             `;

  //       const productDetailsRow = document.createElement("tr");
  //       productDetailsRow.classList.add("product-details");
  //       productDetailsRow.innerHTML = `
  //                 <td colspan="9">
  //                     ${order.items
  //                       .map(
  //                         (item) => `
  //                         <div>
  //                             <img src="${item.image}" alt="${item.productName}">
  //                             <span>${item.productName} (x${item.quantity})</span>
  //                         </div>
  //                     `
  //                       )
  //                       .join("")}
  //                 </td>
  //             `;

  //       orderRow.addEventListener("click", function () {
  //         this.classList.toggle("open");
  //         if (this.classList.contains("open")) {
  //           tableBody.insertBefore(productDetailsRow, this.nextSibling);
  //           productDetailsRow.style.display = "table-row";
  //         } else {
  //           tableBody.removeChild(productDetailsRow);
  //         }
  //       });

  //       tableBody.appendChild(orderRow);
  //     });
  //   }

  function filterOrders() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredOrders = orders.filter((order) => {
      return (
        Object.values(order).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm)
        ) ||
        order.items.some((item) =>
          Object.values(item).some(
            (value) =>
              typeof value === "string" &&
              value.toLowerCase().includes(searchTerm)
          )
        )
      );
    });
    renderOrders(filteredOrders);
  }

  searchInput.addEventListener("input", filterOrders);

  renderOrders(orders);
});
