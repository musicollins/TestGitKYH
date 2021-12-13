//SELECTORS
let homeBtn = document.querySelector(".home-content");
let productsBtn = document.querySelector(".products-content");
let contactBtn = document.querySelector(".contact-content");
let aboutBtn = document.querySelector(".about-content");
let mainContent = document.querySelector(".main");


window.addEventListener("load", ()=>{
    console.log("ONLINE");
});

homeBtn.addEventListener("click", ()=>{
    mainContent.innerHTML = "<h1>This is my Home Page</h1>"
})

productsBtn.addEventListener("click", ()=>{
    mainContent.innerHTML = "<h1>This is my Products Page</h1>"
})

contactBtn.addEventListener("click", ()=>{
    mainContent.innerHTML = "<h1>This is my Contact Page</h1>"
})