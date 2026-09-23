
let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = ()=>{
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}

const addToCartButtons = document.querySelectorAll(".add-to-cart");


addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        
        
        const name = button.dataset.name;
        const price = button.dataset.price;
        const image = button.dataset.image;

        
        const product = {
            name: name,
            price: price,
            image: image,
            quantity: 1
        };

        
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        
        const existing = cart.find(item => item.name === product.name);

        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(product);
        }

        
        localStorage.setItem("cart", JSON.stringify(cart));

        alert(name + " added to cart!");
    });
});
