# ecommerce-nextjs

A **Next.js** e-commerce style front-end built for **learning and experimentation**. It includes multiple storefront layouts, shop and blog flows, a cart/wishlist/compare experience, and a separate **admin-style dashboard** area with charts and data tables.

---

## Important disclaimer

**This project is intended for educational and personal learning purposes only.**

- Do **not** use this codebase for commercial products, paid client work, or production deployments without verifying licensing for any third-party assets, themes, or templates it may incorporate.
- The authors and contributors make **no warranty** regarding merchantability, fitness for a particular purpose, or compliance with laws (including privacy, accessibility, or payment regulations).
- You are responsible for how you use this code. **Use at your own risk.**

If you adapt ideas from this repo for a real business, replace demo content, add proper authentication, payments, backend APIs, tests, and legal pages appropriate to your jurisdiction.

---

## What's inside

| Area | Description |
|------|-------------|
| **Storefront** | Home variants, shop listing and detail pages, cart, checkout, wishlist, compare, blog, vendor pages, account, auth-style pages, policies, and more. |
| **Dashboard** | Admin views: orders, products, vendors, brands, payments, reviews, transactions, charts (ApexCharts), shop layout, shop details, track order, order history, checkout, and registration/login screens. |
| **UI stack** | React 19, Bootstrap 5, MUI, Swiper carousels, toast notifications, and styled patterns suitable for studying component composition in the App Router. |

Static assets and dashboard styling also live under `public/` and `public-dashboard/` for images, CSS, and related files.

---

## Tech stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **UI:** React 19, Bootstrap 5, [React Bootstrap](https://react-bootstrap.github.io/), [MUI](https://mui.com/) (Emotion)
- **Charts:** ApexCharts + `react-apexcharts`
- **Other:** Swiper, React Toastify, React Data Table Component, styled-components, React CountUp

Fonts use [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Geist).

---

## Prerequisites

- **Node.js** 20+ (recommended; aligns with `@types/node` in this repo)
- **npm** (or use your preferred package manager and adjust commands)

---

## Getting started

Clone the repository and install dependencies:

```bash
git clone <your-repo-url> ecommerce-nextjs
cd ecommerce-nextjs
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads when you edit source files.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js dev server (Turbopack). |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Run the production server (after `build`). |
| `npm run lint` | Run ESLint (`next lint`). |

---

## Project layout (overview)

```
ecommerce-nextjs/
├── public/                 # Static assets for the main site (images, CSS, etc.)
├── public-dashboard/       # Dashboard-oriented static assets (SCSS/CSS, etc.)
├── src/
│   └── app/                # App Router: routes, layouts, pages
│   │   ├── (inner)/        # Inner pages (shop, blog, account, login, ...)
│   │   └── dashboard/      # Dashboard routes
│   │       ├── components/ # Dashboard shared components (Header, SideLeft, SideMenu, CartSidebar)
│   │       ├── checkout/   # Dashboard checkout page
│   │       ├── order/      # Order management
│   │       ├── order-details/ # Order details
│   │       ├── order-history/ # Order history with filters
│   │       ├── shop-layout/ # Shop grid/list layout with filters
│   │       ├── shop-details-v1/ # Product details (dynamic [slug] route)
│   │       ├── track-order/ # Track order with timeline
│   │       └── ...         # Other dashboard pages
│   └── components/         # Shared React components (headers, footers, cart context, ...)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Key features

### Landing Page
- Clean header with Login button only
- Top bar with About Us, Contact, Wishlist links
- Shop mega menu, vendor pages, blog
- Multiple home page variants

### Dashboard
- **Sidebar navigation** with collapsible menu
- **Shop Layout** - Grid/List view with price, category, brand filters
- **Shop Details** - Product details with image gallery, size/weight selectors, tabs
- **Product Details [slug]** - Dynamic product page from shop layout
- **Order History** - Filterable order list with status badges
- **Track Order** - Order tracking with timeline visualization
- **Checkout** - Full billing form with order summary
- **Cart Sidebar** - Slide-in cart with quantity controls
- **Cart in Header** - Cart icon with item count badge
- Orders, Products, Vendors, Brands, Payments, Reviews, Transactions

### Cart System
- CartContext for global state management
- Add to cart from shop layout and product details
- Cart sidebar with quantity controls
- Checkout integration

---

## Learning goals you might pursue

- Routing and layouts with the App Router
- Shared state patterns (cart / wishlist / compare contexts)
- Dynamic routes with `[slug]` parameters
- Dashboard layout with sidebar navigation
- Cart system with Context API
- Form handling and validation
- Composition of large page templates and reusable sections
- Styling with Bootstrap alongside other UI libraries
- Preparing a real project: API routes, database, auth, and deployment are **not** the focus of this demo repo

---

## Contributing

If you fork this for learning, keep the **non-commercial / educational intent** in mind when redistributing or publishing derivatives, and respect licenses of any upstream themes or assets.

---

## Acknowledgments

Built with [Next.js](https://nextjs.org) and the broader open-source ecosystem. Refer to individual package licenses in `package.json` and in third-party asset folders as needed.
