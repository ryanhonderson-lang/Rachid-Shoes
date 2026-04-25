// البحث عن جميع أزرار "أضف للسلة"
const buttons = document.querySelectorAll('.buy-btn');

// إضافة وظيفة لكل زر عند الضغط عليه
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // الحصول على اسم المنتج من البطاقة
        const productName = button.parentElement.querySelector('h2').innerText;
        
        // إظهار رسالة تنبيه للمستخدم
        alert('تمت إضافة ' + productName + ' إلى سلة المشتريات بنجاح! 🎉');
    });
});