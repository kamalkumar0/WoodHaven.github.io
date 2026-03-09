// ── Cart State ────────────────────────────────────────────
let cartCount = 0;

// ── Navbar Scroll Effect ─────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile Hamburger Menu ─────────────────────────────────
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ── Scroll Reveal ─────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 100);
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}
window.addEventListener('DOMContentLoaded', initReveal);

// ── Render Products ───────────────────────────────────────
function renderProducts(containerId, data) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = data.map(p => `
    <div class="product-card" data-cat="${p.category}">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="product-wishlist" onclick="toggleWish(this)">🤍</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div>
            <span class="product-price">₹${p.price.toLocaleString('en-IN')}</span>
            ${p.oldPrice ? `<span class="product-old-price">₹${p.oldPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="add-to-cart" onclick="addToCart()">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');

  // Re-observe newly added elements
  document.querySelectorAll('.product-card').forEach(el => revealObserver.observe(el));
}

// ── Render Testimonials ───────────────────────────────────
function renderTestimonials(containerId, data) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  grid.innerHTML = data.map(t => `
    <div class="testi-card">
      <div class="stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.name[0]}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-loc">${t.location}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// ── Category Filter ───────────────────────────────────────
function filterCat(cat, btn) {
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card => {
    card.classList.toggle('hidden', cat !== 'all' && card.dataset.cat !== cat);
  });
}

// ── Wishlist Toggle ───────────────────────────────────────
function toggleWish(btn) {
  const liked = btn.textContent === '🤍';
  btn.textContent = liked ? '❤️' : '🤍';
  showToast(liked ? '❤️ Added to Wishlist' : '🤍 Removed from Wishlist');
}

// ── Add to Cart ───────────────────────────────────────────
function addToCart() {
  cartCount++;
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = cartCount);
  showToast('🛒 Item added to cart!');
}

// ── Toast Notification ────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Newsletter ────────────────────────────────────────────
function subscribeNewsletter() {
  const input = document.getElementById('newsletterEmail');
  if (!input || !input.value.includes('@')) {
    showToast('⚠️ Please enter a valid email.'); return;
  }
  showToast('🎉 Subscribed successfully!');
  input.value = '';
}

// ── Footer Loader ─────────────────────────────────────────
function loadFooter() {
  const el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <div class="footer-logo">Wood<span>haven</span></div>
        <p class="footer-about">Crafting beautiful furniture for Indian homes since 2005. Quality wood, honest prices, and service you can count on.</p>
        <div class="footer-social">
          <a class="social-icon" href="#">f</a>
          <a class="social-icon" href="#">in</a>
          <a class="social-icon" href="#">📷</a>
          <a class="social-icon" href="#">▶</a>
        </div>
      </div>
      <div>
        <div class="footer-heading">Quick Links</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="catalog.html">Products</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading">Categories</div>
        <ul class="footer-links">
          <li><a href="catalog.html">Living Room</a></li>
          <li><a href="catalog.html">Bedroom</a></li>
          <li><a href="catalog.html">Dining & Kitchen</a></li>
          <li><a href="contact.html">Custom Orders</a></li>
        </ul>
      </div>
      <div class="footer-newsletter">
        <div class="footer-heading">Stay Updated</div>
        <p>Get new arrivals, offers, and interior inspiration in your inbox.</p>
        <div class="newsletter-form">
          <input type="email" id="newsletterEmail" placeholder="Your email address"/>
          <button onclick="subscribeNewsletter()">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 Woodhaven Furniture. All rights reserved.</span>
      <span>Made with 🪵 in Haryana, India</span>
    </div>
  </footer>`;
}
