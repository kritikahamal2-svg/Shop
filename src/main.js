// KRI Minimalist Fashion Editorial Application Logic
// Pure Vanilla JavaScript

// Initial products catalogue
const PRODUCTS = [
  {
    id: 'wool-trench-01',
    name: 'Wool Trench 01',
    category: 'outerwear',
    price: 890,
    sizes: ['S', 'M', 'L'],
    selectedSize: 'M',
    imageDefault: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3zcaqsKHEbxGd-VMWU1PXE140yHT2_MtOBzdBUGaAO7De9WS721u5lN21P8shn-fxZpkMq_b5h6FR6n_6G4u34BseJhZfC6p7OYV0qe2AFqLk28SXFy4zMlCbNJtljeKf9nDhI9SD84LDwVU9Gbv8Ct2mAvP2X10CKM9-23TXLtmaJZEneTw7mJlnltVgZ67gf4VI3mnzla81UI2_xR_Li5p1DOTqPLkuUmvSDPdAq-Jkcw80OyJ9',
    imageHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPL4wBUPY3CAa1xPTOl2RBAux_MMV-7sXiFCeUjz6_Z6isdkEL-PBYxqW7OHWC2YMfRkxqaFdC6ZIddjupFCU-3BCVEdpvnYqIPo3EF07xEZ7velIB8KEBk1GQiMRRVN1SF8z3xCquh24JHfhPOO2uyDhpnzV--IdZrfkDhkraV0PcUDfZ33CNPatJiHoG9meQyjxnPo6qUFxXIzNzYUjSKURDH1deRjUxnZmlBPhjePln5dswwi1B',
    cartThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzh2h7zQWmx8n7Ni_clTqgtfCPGJXVFcFp6yNmn345nQ4CYGCA0ToUhHAIF53LzasVDZRp3LvN2-oL96RIjYadIGe_Idkuy7gWOXuxQj2Oevyj7rGPFjbih7XPyqwv_oPJnn_dr6kQtUGwMJ94KN_mBkCheGwzuCyr_Zqbt8q2X483kga19aIJ-e1q7cldlYivVq1KLa0FZ5FRf27g6XMSnSPrHIqe2NvL8fK7GqY48mluPj39hSHY',
    tags: ['all', 'outerwear', 'new']
  },
  {
    id: 'oversized-poplin',
    name: 'Oversized Poplin',
    category: 'essentials',
    price: 320,
    sizes: ['S', 'M', 'L'],
    selectedSize: 'L',
    imageDefault: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIGdMdMm_oISNY0an9TcsPSv7Se-GdQ8taemLp1cs0hXi_8Xi23pvH6FQcSVLUOJ-KYxXfIAOwRrSzzVU9z-_AJ-6kV8LTvxTomMxF1SLnr_nNgob-xcnhpDbfR6utMemV-lK3UCWqABa9VWBScyf5CatNCGLk0hb446IvSeCYMAU7qRNkvjTy6OIs3Ro5dHO1aFKf6aIx-T1G3ZcAGNMDfXcmM6atmqkfvoSyYQ8_RwUdwTVHsqdW',
    imageHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdXy-vmZls4Yxa7fhhD44oaSbaA7lBDa7HZN0pUqvmofjKEiRL2wP-FQf2JYuoFjVDonEjg8l6e6ZN_2pNKNtGktEn2YL85ipVLbi_CldSrDx-yV0go8eqT1B8DXkDgRS6I4yNBd6e9ix-M5sLkkC78zV67R1Wanv116WiMtDOAuNEtZRd4uTTWiXg9FqKAptzjg52ehR7wXAcL1XppN2fUOdg4curDBsTHez41G7HVL6bU-lyjBZ_',
    cartThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADBJjw5HyGAr0dZU_H6lsZaBDTuxKxG4NsuCYcIlrsodCPwvequSBko1F29Qk0bWfCEfqm6BmVLygCPf51FZNX5PSC9QTj8_JuVTg5jKfMlqQhc8jsrhhJ5SLnmKun7cPny7TtS7F1QeY8mVVi7b6w83laxvucBSjC7frwvExvt108hIzZ1lpaoTL-4KTx1AjBTVkDltO2Hbs-IS5dd_l-uIIc1kzti23-YtuJ1M3YFWf2Zf07DJgt',
    tags: ['all', 'essentials', 'new']
  },
  {
    id: 'tailored-trouser',
    name: 'Tailored Trouser',
    category: 'essentials',
    price: 450,
    sizes: ['S', 'M', 'L'],
    selectedSize: 'S',
    imageDefault: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ7afBUhZeMk20GtMO4WfOquBEo1vDa_RFUODO_R5m7lcGI9ZnhSvK4AA_TvFaiagTtjqEOL5Y6sRNGJx3oP5wuYfsnk-0lYLmUTeV-VbhsQMQXIhnw9ut_9G9UvngD8zow_lSJsQcYI_wlyDneE7U1rCLPV2jl7zPt1Xkw99iL77Vuia5iWyVaqiweohU0q_hQzofIJbXdXulc4v824Lkm4AFyH9_FchxkoYmcjO7xRo06Dsf-mQ1',
    imageHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNKYurPAV71DQ7MeadDy6rw-zTosb6afLGnFi5lFnSosdRSqhnqPJrSj3pLyad3VZEosHPyEOnEAOQ6I_0Q3_vrhVscMREfKAvIWwsdPji1zSYd-rFskuENQrbD1yg_UHBCGtvgEfXNGyHUZ19lj2JvyKnLx-rs_DXdgaiK7gq0xDVUKDafACGwJ7o6M4oVTJ3_XRWnLojd0IzqU8EUcPFU9MpBRhfMpGa3dU6CH1MfdrZJvH40KFS',
    cartThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQ7afBUhZeMk20GtMO4WfOquBEo1vDa_RFUODO_R5m7lcGI9ZnhSvK4AA_TvFaiagTtjqEOL5Y6sRNGJx3oP5wuYfsnk-0lYLmUTeV-VbhsQMQXIhnw9ut_9G9UvngD8zow_lSJsQcYI_wlyDneE7U1rCLPV2jl7zPt1Xkw99iL77Vuia5iWyVaqiweohU0q_hQzofIJbXdXulc4v824Lkm4AFyH9_FchxkoYmcjO7xRo06Dsf-mQ1',
    tags: ['all', 'essentials']
  },
  {
    id: 'boxy-heavyweight-tee',
    name: 'Boxy Heavyweight Tee',
    category: 'essentials',
    price: 150,
    sizes: ['S', 'M', 'L'],
    selectedSize: 'M',
    imageDefault: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrEn7is96Dckb_-JIt2MJcJiF8UH1vI_YXZj1BF14hr5Hg0pEigc9At4SQ6Z2fLO87BwYteNyN1d2qqg90q-Mg7UxXgIOAaAnP4Ln1cyPA48I902E4kvMqXPn32Bw_nBsGl738cj8-INMTUNSs2x65WZeEHnhfR1OznXopVWbzQ5V4kNyaQSo46K7FkSkBQT-4I6ikRWsuHGG0LXD-KOhbMQnif2-FfCuYhRXkS2gT_OdffGZNC5Wh',
    imageHover: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Mrd-pO7smIlGKuO8w1vFVNWsEOVs0whLGLFIL6r2C_dapIM8mvemfxp3E7JoMlOgd_pISyPa89iR3EPTedAUEr2wxmWjtTTsYOK9LYUmNPTxYPIAFStUOtXE1YQrex6iefJc9bs4BSO7uKmaxshZdq5v5V-1Ytsu210nUb6YGPNp18GQ5t91z1WUfFqnUxbpn7OBenrus7RIb1pkklTB0o88k7oOQhJcQAhDxTcLm2V0lKLaWz8x',
    cartThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrEn7is96Dckb_-JIt2MJcJiF8UH1vI_YXZj1BF14hr5Hg0pEigc9At4SQ6Z2fLO87BwYteNyN1d2qqg90q-Mg7UxXgIOAaAnP4Ln1cyPA48I902E4kvMqXPn32Bw_nBsGl738cj8-INMTUNSs2x65WZeEHnhfR1OznXopVWbzQ5V4kNyaQSo46K7FkSkBQT-4I6ikRWsuHGG0LXD-KOhbMQnif2-FfCuYhRXkS2gT_OdffGZNC5Wh',
    tags: ['all', 'essentials', 'new']
  }
];

// Initial cart items matching the reference design: Wool Trench 01 (M) and Structured Shirt 02 (L)
let cart = [
  {
    id: 'wool-trench-01',
    name: 'Wool Trench 01',
    size: 'M',
    price: 890,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzh2h7zQWmx8n7Ni_clTqgtfCPGJXVFcFp6yNmn345nQ4CYGCA0ToUhHAIF53LzasVDZRp3LvN2-oL96RIjYadIGe_Idkuy7gWOXuxQj2Oevyj7rGPFjbih7XPyqwv_oPJnn_dr6kQtUGwMJ94KN_mBkCheGwzuCyr_Zqbt8q2X483kga19aIJ-e1q7cldlYivVq1KLa0FZ5FRf27g6XMSnSPrHIqe2NvL8fK7GqY48mluPj39hSHY',
    quantity: 1
  },
  {
    id: 'structured-shirt-02',
    name: 'Structured Shirt 02',
    size: 'L',
    price: 340,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADBJjw5HyGAr0dZU_H6lsZaBDTuxKxG4NsuCYcIlrsodCPwvequSBko1F29Qk0bWfCEfqm6BmVLygCPf51FZNX5PSC9QTj8_JuVTg5jKfMlqQhc8jsrhhJ5SLnmKun7cPny7TtS7F1QeY8mVVi7b6w83laxvucBSjC7frwvExvt108hIzZ1lpaoTL-4KTx1AjBTVkDltO2Hbs-IS5dd_l-uIIc1kzti23-YtuJ1M3YFWf2Zf07DJgt',
    quantity: 1
  }
];

let currentFilter = 'all';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCartDrawer();
  initProductGrid();
  initFilters();
  initNewsletter();
  initModals();
  renderCart();
});

// Navigation & Mobile Menu Setup
function initNavigation() {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuDrawer = document.getElementById('mobile-menu');
  const closeMobileMenu = document.getElementById('close-mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuToggle && mobileMenuDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuDrawer.classList.remove('-translate-x-full');
      mobileMenuDrawer.classList.add('translate-x-0');
      document.body.style.overflow = 'hidden';
    });

    const closeNav = () => {
      mobileMenuDrawer.classList.remove('translate-x-0');
      mobileMenuDrawer.classList.add('-translate-x-full');
      document.body.style.overflow = '';
    };

    if (closeMobileMenu) {
      closeMobileMenu.addEventListener('click', closeNav);
    }
    mobileNavLinks.forEach(link => link.addEventListener('click', closeNav));
  }
}

// Cart Drawer Interaction
function initCartDrawer() {
  const cartToggle = document.getElementById('cart-toggle');
  const closeCart = document.getElementById('close-cart');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const checkoutBtn = document.getElementById('checkout-btn');

  function openCart() {
    cartDrawer.classList.remove('translate-x-full');
    cartDrawer.classList.add('translate-x-0');
    cartOverlay.classList.remove('opacity-0', 'pointer-events-none');
    cartOverlay.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
  }

  function closeCartDrawer() {
    cartDrawer.classList.remove('translate-x-0');
    cartDrawer.classList.add('translate-x-full');
    cartOverlay.classList.remove('opacity-100');
    cartOverlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.style.overflow = '';
  }

  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeModal('search-modal');
      closeModal('account-modal');
      closeModal('editorial-modal');
    }
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Your shopping bag is empty.');
        return;
      }
      const total = calculateTotal();
      showToast(`Checkout initiated for $${total.toLocaleString()}. Thank you!`);
    });
  }

  window.openCart = openCart;
  window.closeCart = closeCartDrawer;
}

// Render Cart Items & Update Counts
function renderCart() {
  const container = document.getElementById('cart-items-container');
  const badge = document.getElementById('cart-badge');
  const totalAmount = document.getElementById('cart-total-amount');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = calculateTotal();

  if (badge) {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  if (totalAmount) {
    totalAmount.textContent = `$${total.toLocaleString()}`;
  }

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center py-16 text-center">
        <span class="material-symbols-outlined text-4xl text-outline mb-3" style="font-variation-settings: 'wght' 200;">shopping_bag</span>
        <p class="font-headline-md text-base text-primary font-medium">Your bag is empty</p>
        <p class="font-body-md text-sm text-secondary mt-1">Explore our latest archive collection.</p>
        <button onclick="document.getElementById('close-cart').click()" class="mt-6 px-6 py-2.5 border border-primary text-primary font-label-caps text-xs uppercase hover:bg-primary hover:text-on-primary transition-colors">
          Continue Shopping
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = cart.map((item, index) => `
    <div class="flex gap-4 group items-start border-b border-surface-variant/50 pb-6 transition-all duration-300">
      <div class="w-20 h-28 bg-surface-variant flex-shrink-0 overflow-hidden">
        <img class="w-full h-full object-cover object-center" src="${item.image}" alt="${item.name}" />
      </div>
      <div class="flex flex-col justify-between flex-1 min-h-[112px]">
        <div>
          <h3 class="font-body-md text-base font-semibold text-primary">${item.name}</h3>
          <p class="font-label-caps text-xs text-secondary mt-1 tracking-wider">Size: ${item.size}</p>
        </div>
        <div class="flex justify-between items-center pt-2">
          <span class="font-body-md text-base font-medium text-primary">$${item.price.toLocaleString()}</span>
          <button onclick="removeCartItem(${index})" class="font-label-caps text-xs text-secondary underline hover:text-primary transition-colors cursor-pointer">
            Remove
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

window.removeCartItem = function(index) {
  const removed = cart.splice(index, 1);
  renderCart();
  if (removed.length > 0) {
    showToast(`Removed ${removed[0].name} from bag`);
  }
};

window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === product.id && item.size === product.selectedSize);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      size: product.selectedSize || 'M',
      price: product.price,
      image: product.cartThumbnail || product.imageDefault,
      quantity: 1
    });
  }

  renderCart();
  showToast(`Added ${product.name} (Size ${product.selectedSize}) to bag`);
  
  if (window.openCart) {
    window.openCart();
  }
};

window.selectProductSize = function(productId, size) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (product) {
    product.selectedSize = size;
    renderProducts();
  }
};

// Filter Navigation
function initFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.className = 'filter-btn px-6 py-2 border border-outline bg-transparent text-primary hover:border-primary font-label-caps text-label-caps uppercase transition-colors cursor-pointer';
      });
      btn.className = 'filter-btn px-6 py-2 border border-primary bg-primary text-on-primary font-label-caps text-label-caps uppercase transition-colors cursor-pointer';
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProducts();
    });
  });
}

// Product Grid Rendering
function initProductGrid() {
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    if (currentFilter === 'all') return true;
    if (currentFilter === 'outerwear') return p.category === 'outerwear';
    if (currentFilter === 'essentials') return p.category === 'essentials';
    if (currentFilter === 'new') return p.tags.includes('new');
    return true;
  });

  grid.innerHTML = filtered.map(product => `
    <div class="group flex flex-col transition-all duration-300">
      <!-- Image Container with Hover Swap -->
      <div class="relative w-full aspect-[3/4] bg-surface-variant overflow-hidden mb-4 group-hover-swap cursor-pointer">
        <img 
          class="absolute inset-0 w-full h-full object-cover img-default transition-opacity duration-500" 
          src="${product.imageDefault}" 
          alt="${product.name}" 
          loading="lazy"
        />
        <img 
          class="absolute inset-0 w-full h-full object-cover img-hover opacity-0 transition-opacity duration-500" 
          src="${product.imageHover}" 
          alt="${product.name} detail" 
          loading="lazy"
        />
      </div>

      <!-- Info & Sizes -->
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-body-md text-body-md font-semibold text-primary">${product.name}</h3>
          <p class="font-body-md text-body-md text-secondary mt-1">$${product.price.toLocaleString()}</p>
        </div>
        <div class="flex gap-1">
          ${product.sizes.map(size => `
            <button 
              onclick="selectProductSize('${product.id}', '${size}')" 
              class="w-6 h-6 border ${product.selectedSize === size ? 'border-primary bg-primary text-on-primary' : 'border-outline text-secondary hover:border-primary hover:text-primary'} flex items-center justify-center font-label-caps text-[10px] transition-colors cursor-pointer"
              title="Size ${size}"
            >
              ${size}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Add to Bag Button -->
      <button 
        onclick="addToCart('${product.id}')" 
        class="w-full mt-4 py-3 border border-primary text-primary font-button text-button uppercase hover:bg-primary hover:text-on-primary transition-all duration-300 opacity-90 sm:opacity-0 group-hover:opacity-100 cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  `).join('');
}

// Newsletter Subscription Logic
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const input = document.getElementById('newsletter-email');
  const message = document.getElementById('newsletter-message');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = input ? input.value.trim() : '';
      if (!email || !email.includes('@')) {
        showToast('Please enter a valid email address.');
        return;
      }
      if (input) input.value = '';
      if (message) {
        message.classList.remove('hidden');
        setTimeout(() => message.classList.add('hidden'), 4000);
      }
      showToast('Thank you for subscribing to KRI updates.');
    });
  }
}

// Modals Setup (Search, Account, Editorial)
function initModals() {
  const searchBtn = document.getElementById('search-toggle');
  const searchModal = document.getElementById('search-modal');
  const closeSearch = document.getElementById('close-search');
  const searchInput = document.getElementById('search-input');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.remove('hidden');
      if (searchInput) searchInput.focus();
    });
  }

  if (closeSearch && searchModal) {
    closeSearch.addEventListener('click', () => searchModal.classList.add('hidden'));
  }

  const accountBtn = document.getElementById('account-toggle');
  const accountModal = document.getElementById('account-modal');
  const closeAccount = document.getElementById('close-account');

  if (accountBtn && accountModal) {
    accountBtn.addEventListener('click', () => accountModal.classList.remove('hidden'));
  }
  if (closeAccount && accountModal) {
    closeAccount.addEventListener('click', () => accountModal.classList.add('hidden'));
  }
}

window.closeModal = function(modalId) {
  const el = document.getElementById(modalId);
  if (el) el.classList.add('hidden');
};

// Toast Notifications
function showToast(text) {
  let toast = document.getElementById('kri-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'kri-toast';
    toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-primary text-on-primary px-6 py-3 font-label-caps text-xs tracking-wider uppercase transition-opacity duration-300 opacity-0 pointer-events-none shadow-lg';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.remove('opacity-0', 'pointer-events-none');
  toast.classList.add('opacity-100');

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0', 'pointer-events-none');
  }, 2800);
}
