let total = 0;

function addToCart(name, price) {
    const cart = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    const item = document.createElement('li');
    item.textContent = `${name} - $${price}`;
    cart.appendChild(item);

    total += price;
    totalElement.textContent = total;
}
