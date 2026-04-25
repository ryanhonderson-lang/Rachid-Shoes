let total = 0;
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.parentElement;
        const name = card.querySelector('h2').innerText;
        const price = parseInt(card.querySelector('.price').innerText);

        // إضافة المنتج للقائمة
        const li = document.createElement('li');
        li.innerText = name + " - " + price + " درهم";
        cartItemsList.appendChild(li);

        // تحديث المجموع
        total += price;
        totalPriceElement.innerText = total;
    });
});