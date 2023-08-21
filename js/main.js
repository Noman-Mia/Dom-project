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


// Use Coupon Code
document.getElementById('btn-coupon').addEventListener('click', function(){
    const couponCode = 'SELL200';
    const couponInputElement = document.getElementById('coupon-input');
    const couponInput = couponInputElement.value;

    if(couponInput === couponCode){
        discount = totalPrice * (20/100);
        total = totalPrice - discount;
        discountElement.innerText = discount.toFixed(2);
        totalElement.innerText = total.toFixed(2);
        alert(`Congrates! You have got discount ${discount.toFixed()} Tk`);
    }
    else{
        alert('Invalid Coupon Code!');
    }
    couponInputElement.value = '';
})


// Reset Cart Data 
document.getElementById('btn-reset').addEventListener('click', function(){
    window.location.href = 'index.html';
    totalPrice = 0
    totalPriceElement.innerText = totalPrice.toFixed(2);
    discount = 0
    discountElement.innerText = discount.toFixed(2);
    total = 0
    totalElement.innerText = total.toFixed(2);
})