function placeOrder(item) {
    const name = prompt("Enter your name:");
    const quantity = prompt("Enter quantity:");
    const address = prompt("Enter delivery address:");

    if (!name || !quantity || !address) {
        alert("All fields are required!");
        return;
    }

    const bodyData = new URLSearchParams({
        name: name,
        product: item,
        quantity: quantity,
        address: address
    });

    fetch("http://backend-alb-432079772.us-east-1.elb.amazonaws.com/backend-app/insert.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: bodyData.toString()
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => {
        console.error(err);
        alert("Order failed");
    });
}
