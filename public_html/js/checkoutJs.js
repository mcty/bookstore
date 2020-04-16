/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let cart = localStorage.getItem("totalCost");
    cart = parseFloat(cart);
    cart = cart.toFixed(2);
    let productContainer = document.querySelector('.products');
    
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<p><a href="#">${item.name}</a> <span class="price">${item.inCart} * $${item.price}</span></p>`;
        });

        productContainer.innerHTML += `
            <hr>
        <p>Total <span class="price" style="color:black"><b>${cart}</b></span></p>`;

        deleteButtons();
        manageQuantity();
    }
}

displayCart();