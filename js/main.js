// Global variables
const totalPriceElement = document.getElementById('total-price');
let totalPrice = parseFloat(totalPriceElement.innerText);
const discountElement = document.getElementById('discount');
let discount = parseFloat(discountElement.innerText);
const totalElement = document.getElementById('total');
let total = parseFloat(totalElement.innerText);

// Add to cart
function addToCart(event){
    const cart = document.getElementById('cart');
    const product = event.childNodes[3].childNodes[3].innerText;
    const priceElement = event.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceElement);

    const counter = cart.childElementCount;
    const entryItem = document.createElement('p');
    entryItem.innerText = `${counter + 1}. ${product}`;
    cart.appendChild(entryItem);


    totalPrice += price;
    totalPriceElement.innerText = totalPrice.toFixed(2);

    // Enable Coupon Button
    const BtnCoupon = document.getElementById('btn-coupon');
    if(totalPrice >= 200){
    BtnCoupon.removeAttribute('disabled');
    }

    // Enable Purchase Button
    const BtnPurchase = document.getElementById('btn-purchase');
    if(totalPrice > 0){
        BtnPurchase.removeAttribute('disabled');
    }
}
