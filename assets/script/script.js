document.addEventListener('DOMContentLoaded',()=>{

    const shoppingCart = document.querySelector('.shoppingCart i');
    const shoppingList = document.querySelector('.shoppingList');

    shoppingCart.addEventListener('click', ()=>{

        shoppingCart.classList.toggle('active');
        shoppingList.classList.toggle('active')
    })
})