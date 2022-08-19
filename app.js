const users = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  const response = await fetch(users);
  const data = await response.json();

  const titles = ["Id", "Name", "Username", "Email", "Address"];
  let tableUser = document.createElement("tableUser");

  tableUser.className = "table table-striped";
  let thead = document.createElement("thead");
  thead.className = "table-warning";

  let tr = document.createElement("tr");
  titles.map((title) => {
    let th = document.createElement("th");
    th.innerHTML = title;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  tableUser.appendChild(thead);


  let tbody = document.createElement("tbody");
  data.map(({ id, name, username, email, address }) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${id}</td><td>${name}</td><td>${username}</td><td>${email}</td><td>${address.street}</td>`;
    tbody.appendChild(tr);
  });

  tableUser.appendChild(tbody);
  document.getElementById("tableUser").appendChild(tableUser);
}

getUsers();