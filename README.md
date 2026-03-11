# 🪵 Woodhaven Furniture – Website

A modern, fully responsive **furniture shop website** built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies — just open and run!

🔗 **Live Preview:** [https://kamalkumar0.github.io/WoodHaven.github.io/catalog.html](https://kamalkumar0.github.io/WoodHaven.github.io/catalog.html)

---

## 📁 Project Structure

```
woodhaven-static/
├── index.html          → Home page (Hero, Products, Features, Testimonials)
├── catalog.html        → Full product catalog with category filter
├── about.html          → About Us & shop story
├── contact.html        → Contact form & showroom info
│
├── css/
│   └── style.css       → All styles (colors, layout, animations, responsive)
│
└── js/
    ├── data.js         → All product & testimonial data
    └── main.js         → All JavaScript logic (filter, cart, toast, etc. )
```

---

## 🚀 How to Run

No installation needed. Just:

1. Download and extract the ZIP file
2. Open `index.html` in any browser
3. Done ✅

```
Double click → index.html → Opens in Browser
```

---

## 📄 Pages Overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero banner, featured products, why us, reviews |
| Catalog | `catalog.html` | All products with category filter tabs |
| About | `about.html` | Shop story, features, showroom image |
| Contact | `contact.html` | Contact form, address, map placeholder |

---

## ✨ Features

- **Product Catalog** – 9 products across 3 categories (Living Room, Bedroom, Dining & Kitchen)
- **Category Filter** – Filter products by room type with tab buttons
- **Wishlist Toggle** – Add/remove products from wishlist with ❤️ button
- **Add to Cart** – Cart counter in navbar updates on every add
- **Contact Form** – Name, phone, interest selector, message field with validation
- **Newsletter Signup** – Email subscription in footer
- **Scroll Animations** – Elements animate in as you scroll down
- **Sticky Navbar** – Navbar shadow appears on scroll
- **Mobile Hamburger Menu** – Responsive nav for mobile screens
- **Toast Notifications** – Popup feedback for all user actions
- **Marquee Banner** – Scrolling offers bar (Free Delivery, EMI, Warranty)

---

## 🎨 Color Palette

| Name | Hex | Used For |
|------|-----|---------|
| Espresso | `#3a1f0d` | Dark backgrounds, footer |
| Wood Dark | `#6b3f1f` | Buttons, badges, headings |
| Wood Mid | `#a0673a` | Hover states, accents |
| Wood Light | `#c8956c` | Labels, icons, borders |
| Cream | `#f5ede0` | Product cards, hero bg |
| Sand | `#e8d5b7` | Section backgrounds |
| Warm White | `#fdf8f2` | Main page background |

---

## 🗂️ Product Categories

| Category | Products |
|----------|----------|
| 🛋️ Living Room | Royal Oak Sofa, Walnut Coffee Table, Windsor Accent Chair |
| 🛏️ Bedroom | Empress King Bed, Heritage Wardrobe, Teak Nightstand |
| 🍽️ Dining & Kitchen | Grand Oak Dining Set, Mahogany Bar Cabinet, Kitchen Trolley |

---

## 🛠️ How to Customize

### ➕ Add a New Product
Open `js/data.js` and add a new object in the `products` array:
```javascript
{
  id: 10,
  name: "Your Product Name",
  category: "living",           // living / bedroom / dining
  categoryLabel: "Living Room",
  price: 25000,
  oldPrice: 30000,              // null if no discount
  badge: "New Arrival",         // null if no badge
  desc: "Product description here.",
  image: "https://your-image-url.jpg"
}
```

### 🎨 Change Colors
Open `css/style.css` and edit the `:root` variables at the top:
```css
:root {
  --wood-dark: #6b3f1f;   /* Main button color */
  --wood-mid:  #a0673a;   /* Hover color */
  --cream:     #f5ede0;   /* Card background */
}
```

### 🗺️ Add Google Maps
In `contact.html`, replace the map placeholder div with your Google Maps embed iframe:
```html
<!-- Replace this block -->
<div class="map-placeholder"> ... </div>

<!-- With your Google Maps iframe -->
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" width="100%" height="200" style="border:0; border-radius:4px;" allowfullscreen></iframe>
```

### 📝 Change Shop Info
Edit the contact details directly in `contact.html` — address, phone, email, and timings.

---

## 📱 Responsive Design

| Screen Size | Behavior |
|-------------|----------|
| Desktop (>900px) | Full 2-column layout, all nav links visible |
| Tablet (600–900px) | Single column layout, hamburger menu |
| Mobile (<600px) | Compact sections, stacked form fields |

---

## 🔗 Live Preview

👉 [https://kamalkumar0.github.io/WoodHaven.github.io/catalog.html](https://kamalkumar0.github.io/WoodHaven.github.io/catalog.html)

---

## 👨‍💻 Built By

**Kamal Kumar**
B.Tech CSE | AI Developer | Web Developer | Content Creator

---

> ⭐ If you like this project, give it a star on GitHub!
