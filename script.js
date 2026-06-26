let cart = [];

function addToCart() {

cart.push("Wireless Headphones");

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Product Added To Cart");

}