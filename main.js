
let products = [
    { id: 1, name: "Apple", price: 90 },
    { id: 2, name: "Orange", price: 30 },
    { id: 3, name: "Grapes", price: 80 },
    { id: 4, name: "Banana", price: 70 }
]

let productsElement = document.getElementById('products');

products.forEach(item => {
    
    let divElement = document.createElement('div')
    divElement.className = 'product'

    divElement.innerHTML = `
    <h1>${item.name}</h1>
    <h4>Rs.${item.price}/-</h4>
    <button onclick='addToCart(${item.id})'>Add to cart</button>
    `

    productsElement.appendChild(divElement)
});


let cartItems = [];
let cartElement = document.getElementById('cart-items')

function addToCart(id) {
    let item = products.find(product => product.id === id)
    cartItems.push(item)
    renderCart()
}

function renderCart() {
    cartElement.innerHTML = ''

    let tableElement = document.createElement('table');
    tableElement.innerHTML += `
    <tr>
        <th>Product Name</th>
        <th>Price</th>
    </tr>
    `
    let total = 0;

    cartItems.forEach(cartItem => {
        tableElement.innerHTML += `
        <tr>
            <th>${cartItem.name}</th>
            <th>Rs.${cartItem.price}</th>
        </tr>
        `
        total = total+cartItem.price
    });

      tableElement.innerHTML += `
        <tr>
            <th colspan=2>total</th>
            <th>Rs.${total}</th>
        </tr>
        `
   

    cartElement.appendChild(tableElement)
}