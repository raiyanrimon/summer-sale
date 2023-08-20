let total = 0;
function handleCLickButton(target) {
    const cardCalculationEntry = document.getElementById('cart-calculation-entry');
    const count = cardCalculationEntry.childElementCount;
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const price = target.childNodes[3].childNodes[5].innerText.split(' ')[0];
    const p = document.createElement('p');
    p.classList.add('my-1');
    p.classList.add('font-medium');
    p.innerHTML = `${count + 1}. ${itemName} ${price} TK`;
    cardCalculationEntry.appendChild(p);


    total = parseFloat(total) + parseFloat(price);
    totalPrice = total.toFixed(2);
    document.getElementById('total-price').innerText = totalPrice;

    if (totalPrice > 0) {
        const purchaseButton = document.getElementById('purchase');
        purchaseButton.disabled = false;
    }
    if (totalPrice >= 200) {
        const couponBtn = document.getElementById('coupon');
        couponBtn.disabled = false;
    }
}

function discountClick() {
    if (inputField = 'SELL20') {
        const inputField = document.getElementById('input');
        const discountAmountText = document.getElementById('discount');
        const finalTotalText = document.getElementById('last-total');
        const discountPercentage = 20;
        const discountAmount = (totalPrice * discountPercentage) / 100;
        discountAmountText.innerText = parseFloat(discountAmount).toFixed(2);
        const finalTotal = (totalPrice - discountAmount);
        finalTotalText.innerText = parseFloat(finalTotal).toFixed(2);
    }
}

function goHome() {
    document.getElementById('cart-calculation-entry').innerHTML = '';
    document.getElementById('input').value = '';
    document.getElementById('discount').innerText = '00.00';
    document.getElementById('last-total').innerText = '00.00';
    document.getElementById('total-price').innerText = '00.00';
    document.getElementById('coupon').disabled = true;
    document.getElementById('purchase').disabled = true;
}






























function addToCartCalculationEntry() {
    const cardCalculationEntry = document.getElementById('cart-calculation-entry');
    const count = cardCalculationEntry.childElementCount;;
    const li = document.createElement('li');
    li.classList.add('my-1');
    li.innerHTML = `${count + 1}. `;
    cardCalculationEntry.appendChild(li);
}