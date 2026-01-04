function placeOrder(item) {
  const name = prompt("Enter your name:");
  const quantity = prompt("Enter quantity:");
  const address = prompt("Enter delivery address:");

  if (!name || !quantity || !address) {
    alert("All fields are required!");
    return;
  }

  fetch("http://34.230.189.77backend-app/insert.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: `name=${name}&product=${item}&quantity=${quantity}&address=${address}`
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(() => alert("Order failed"));
}

