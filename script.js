// مصفوفة المنتجات المحدثة بناءً على صورك
const products = [
  { 
    id: 1, 
    name: 'صندل هيميد المرصع', 
    cat: 'casual', 
    price: 179, 
    image: '1777137348815.jng', // صورة الصنادل (البيج والأسود)
    badge: 'الأكثر مبيعاً' 
  },
  { 
    id: 2, 
    name: 'حذاء الدانتيل الكلاسيكي', 
    cat: 'formal', 
    price: 179, 
    image: '1777137376663.jng', // صورة أحذية الدانتيل (البني والأسود)
    badge: 'وصل حديثاً' 
  },
  { 
    id: 3, 
    name: 'إسبادريل اللؤلؤ الفاخر', 
    cat: 'formal', 
    price: 179., 
    image: '1777137402276.jng', // صورة أحذية اللؤلؤ المعلقة
    badge: 'إصدار محدود' 
  },
  { 
    id: 4, 
    name: 'UGG الفرو المريح', 
    cat: 'casual', 
    price: 179, 
    image: '1777137427914.jng', // صورة أحذية UGG الملونة
    badge: 'شتاء 2025' 
  },
  { 
    id: 5, 
    name: 'نيو بالانس سبورت لاين', 
    cat: 'sport', 
    price: 179, 
    image: '1777137457072.jng', // صورة الأحذية الرياضية
    badge: 'أداء عالي' 
  }
];

let cart = [];
let currentFilter = 'all';

// دالة عرض المنتجات بتنسيق احترافي للصور
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = products.filter(p => currentFilter === 'all' || p.cat === currentFilter);

  filtered.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'shoe-card fade-up bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-4 relative overflow-hidden group';
    card.style.animationDelay = (i * 0.1) + 's';

    card.innerHTML = `
      <div class="absolute top-4 right-4 z-10 bg-[#ff5a1f] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase shadow-lg">
        ${p.badge}
      </div>
      <div class="aspect-[4/5] rounded-2xl mb-5 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
      </div>
      <div class="px-2">
        <h3 class="display-font text-xl font-bold tracking-wide mb-1">${p.name}</h3>
        <p class="text-white/40 text-xs mb-4">جودة فاخرة - تصميم حصري</p>
        <div class="flex items-center justify-between">
          <span class="display-font text-2xl font-black text-[#ff5a1f]">${p.price} <span class="text-sm">د.م</span></span>
          <button onclick="addToCart(${p.id})" class="bg-white text-black font-bold p-3 rounded-2xl hover:bg-[#ff5a1f] transition-all duration-300">
            <i data-lucide="shopping-cart" style="width:18px;height:18px;"></i>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

// باقي وظائف السلة (إضافة، تحديث، توست) تبقى كما هي في الكود السابق



// 4. منطق عربة التسوق
window.addToCart = function(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
    showToast(`تمت إضافة ${product.name}`);
};

function updateCartUI() {
    document.getElementById('cart-count').textContent = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').textContent = total + ' د.م';
}

function showToast(msg) {
    const toast = document.createElement('div');
    toast.className = 'bg-[#ff5a1f] text-black px-4 py-2 rounded-lg font-bold';
    toast.textContent = msg;
    document.getElementById('toast-container').appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// تشغيل عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    lucide.createIcons();
    
    // تفعيل أزرار الإغلاق والعربة
    document.getElementById('cart-btn').onclick = () => document.getElementById('cart-modal').classList.remove('hidden');
    document.getElementById('close-cart').onclick = () => document.getElementById('cart-modal').classList.add('hidden');
});
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    const list = products.filter(p => currentFilter === 'all' || p.cat === currentFilter);
    
    list.forEach((p, i) => {
        const card = document.createElement('article');
        card.className = 'shoe-card fade-up bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-4 relative overflow-hidden';
        card.style.animationDelay = (i * 0.1) + 's';

        card.innerHTML = `
            <div class="absolute top-4 right-4 z-10 bg-[#ff5a1f] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">
                ${p.badge}
            </div>

            <div class="aspect-square rounded-2xl mb-4 overflow-hidden bg-white/5 flex items-center justify-center">
                <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover transform hover:scale-110 transition duration-500">
            </div>

            <div class="space-y-1">
                <h3 class="display-font text-xl font-black tracking-wide">${p.name}</h3>
                <div class="flex items-center justify-between mt-4">
                    <span class="display-font text-2xl font-black text-[#ff5a1f]">${p.price} د.م</span>
                    <button onclick="addToCart(${p.id})" class="add-btn bg-white text-black font-bold px-5 py-2 rounded-xl hover:bg-[#ff5a1f] transition duration-300 text-sm flex items-center gap-2">
                        <i data-lucide="plus" style="width:14px;height:14px;"></i> أضف
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}