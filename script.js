// script.js
const cart = [];

// Add to Cart Functionality
function addToCart(item) {
    cart.push(item);
    alert("Item added to cart!");
    updateCartCount();
}

// View Cart Modal
function viewCart() {
    const modal = document.getElementById("cartModal");
    const cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = cart.length
        ? cart.map(item => `<li>${item}</li>`).join("")
        : "Cart is empty.";
    modal.style.display = "block";
}

// Clear Cart
function clearCart() {
    cart.length = 0;
    alert("Cart cleared!");
    updateCartCount();
}

// Process Order
function processOrder() {
    if (cart.length) {
        alert("Thank you for your order!");
        clearCart();
    } else {
        alert("Your cart is empty!");
    }
}

// Close Cart Modal
function closeModal() {
    const modal = document.getElementById("cartModal");
    modal.style.display = "none";
}

// Update Cart Count
function updateCartCount() {
    // Update cart count in the UI (if required)
}
