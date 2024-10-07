document.addEventListener("DOMContentLoaded", function () {
  // Sample data for demonstration
  const data = {
    orders: [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        address: "123 Elm Street",
        city: "Springfield",
        state: "IL",
        zipcode: "62701",
        phone: "123-456-7890",
        items: [
          {
            itemId: 1,
            image: "item1.jpg",
            productName: "Product 1",
            quantity: 2,
          },
          {
            itemId: 2,
            image: "item2.jpg",
            productName: "Product 2",
            quantity: 1,
          },
        ],
      },
      // More orders...
    ],
    newOrders: 5,
    complaints: [
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        subject: "Delayed Delivery",
        complaint: "My order is delayed by 2 weeks.",
      },
      // More complaints...
    ],
    users: [
      {
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        address: "456 Oak Avenue",
        city: "Metropolis",
        state: "NY",
        zipcode: "10001",
        phone: "987-654-3210",
      },
      // More users...
    ],
  };

  // Update the dashboard with data
  const ordersContainer = document.querySelector("#orders .details");
  const complaintsContainer = document.querySelector("#complaints .details");
  const usersContainer = document.querySelector("#users .details");

  data.orders.forEach((order) => {
    const orderDetails = document.createElement("div");
    orderDetails.innerHTML = `
            <p><strong>Name:</strong> ${order.firstName} ${order.lastName}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Address:</strong> ${order.address}, ${order.city}, ${
      order.state
    }, ${order.zipcode}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Items:</strong></p>
            <ul>
                ${order.items
                  .map(
                    (item) => `
                    <li>
                        <img src="${item.image}" alt="${item.productName}" style="width:50px;height:50px;">
                        ${item.productName} (x${item.quantity})
                    </li>
                `
                  )
                  .join("")}
            </ul>
        `;
    ordersContainer.appendChild(orderDetails);
  });

  data.complaints.forEach((complaint) => {
    const complaintDetails = document.createElement("div");
    complaintDetails.innerHTML = `
            <p><strong>Name:</strong> ${complaint.name}</p>
            <p><strong>Email:</strong> ${complaint.email}</p>
            <p><strong>Subject:</strong> ${complaint.subject}</p>
            <p><strong>Complaint:</strong> ${complaint.complaint}</p>
        `;
    complaintsContainer.appendChild(complaintDetails);
  });

  data.users.forEach((user) => {
    const userDetails = document.createElement("div");
    userDetails.innerHTML = `
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address}, ${user.city}, ${user.state}, ${user.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
        `;
    usersContainer.appendChild(userDetails);
  });

  document.getElementById("new-orders-count").textContent = data.newOrders;

  // Function to simulate new order placement
  function placeNewOrder() {
    data.orders.push({
      firstName: "New",
      lastName: "Order",
      email: "new.order@example.com",
      address: "789 Pine Road",
      city: "Smallville",
      state: "KS",
      zipcode: "66002",
      phone: "555-123-4567",
      items: [
        {
          itemId: 3,
          image: "item3.jpg",
          productName: "Product 3",
          quantity: 1,
        },
      ],
    });
    data.newOrders += 1;
    document.getElementById("new-orders-count").textContent = data.newOrders;
    showNotification();
    updateOrders();
  }

  // Function to update orders display
  function updateOrders() {
    ordersContainer.innerHTML = "";
    data.orders.forEach((order) => {
      const orderDetails = document.createElement("div");
      orderDetails.innerHTML = `
                <p><strong>Name:</strong> ${order.firstName} ${
        order.lastName
      }</p>
                <p><strong>Email:</strong> ${order.email}</p>
                <p><strong>Address:</strong> ${order.address}, ${order.city}, ${
        order.state
      }, ${order.zipcode}</p>
                <p><strong>Phone:</strong> ${order.phone}</p>
                <p><strong>Items:</strong></p>
                <ul>
                    ${order.items
                      .map(
                        (item) => `
                        <li>
                            <img src="${item.image}" alt="${item.productName}" style="width:50px;height:50px;">
                            ${item.productName} (x${item.quantity})
                        </li>
                    `
                      )
                      .join("")}
                </ul>
            `;
      ordersContainer.appendChild(orderDetails);
    });
  }

  // Function to show notification
  function showNotification() {
    const notification = document.getElementById("notification");
    notification.classList.add("visible");
    setTimeout(() => {
      notification.classList.remove("visible");
    }, 3000);
  }

  // Simulate new order placement every 10 seconds
  //   setInterval(placeNewOrder, 10000);
});
