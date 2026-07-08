"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";
import { useCart } from "@/components/header/CartContext";
import Product from "@/data/Product.json";
import Link from "next/link";

interface PostType {
  category?: string;
  slug: string;
  image: string;
  title?: string;
  price?: string;
  id?: number;
}

export default function ShopLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState("grid");
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(150);
  const { addToCart } = useCart();

  const allCategories = ["Beverages", "Biscuits & Snacks", "Breads & Bakery"];
  const allBrands = ["Frito Lay", "Nespresso", "Oreo", "Quaker", "Welch's"];

  const categoryProductIndices: { [key: string]: number[] } = {
    Beverages: [1, 3, 4, 5, 6, 7],
    "Biscuits & Snacks": [8, 9, 10, 12, 16],
    "Breads & Bakery": [15, 1, 2, 3],
  };

  const brandProductIndices: { [key: string]: number[] } = {
    "Frito Lay": [1, 3, 4],
    Nespresso: [3, 1, 4],
    Oreo: [8, 9, 10],
    Quaker: [3, 4, 10],
    "Welch's": [8, 9, 1],
  };

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const getFilteredProducts = (): PostType[] => {
    let indices: number[] = [];
    if (selectedCategories.length > 0) {
      indices = selectedCategories.map((cat) => categoryProductIndices[cat] || []).flat();
    } else {
      indices = Object.values(categoryProductIndices).flat();
    }
    if (selectedBrands.length > 0) {
      const brandIndices = selectedBrands.map((brand) => brandProductIndices[brand] || []).flat();
      indices = indices.filter((i) => brandIndices.includes(i));
    }
    const uniqueIndices = Array.from(new Set(indices));
    return uniqueIndices
      .map((i) => Product[i])
      .filter((p) => {
        if (!p) return false;
        const price = p.price ? parseFloat(p.price) : 0;
        return price >= minPrice && price <= maxPrice;
      });
  };

  const handleAddToCart = (post: PostType) => {
    addToCart({
      id: post.id || 1,
      image: `/assets/images/grocery/${post.image}`,
      title: post.title || "Product",
      price: parseFloat(post.price || "0") || 35,
      quantity: 1,
      active: true,
    });
  };

  const filteredProducts = getFilteredProducts();
  const isList = selectedLayout === "list";

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <div className="vendor-grid-top-search-area" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 className="title">Shop Layout</h4>
            <select
              value={selectedLayout}
              onChange={(e) => setSelectedLayout(e.target.value)}
              style={{ padding: "8px 16px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "14px", cursor: "pointer" }}
            >
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>

          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <div className="sidebar-filter-main">
                <div className="single-filter-box">
                  <h5 className="title">Price Filter</h5>
                  <div className="filterbox-body">
                    <form className="price-input-area">
                      <div className="half-input-wrapper">
                        <div className="single">
                          <label>Min</label>
                          <input type="number" value={minPrice} min={0} onChange={(e) => setMinPrice(parseFloat(e.target.value) || 0)} />
                        </div>
                        <div className="single">
                          <label>Max</label>
                          <input type="number" value={maxPrice} min={0} onChange={(e) => setMaxPrice(parseFloat(e.target.value) || 0)} />
                        </div>
                      </div>
                      <input type="range" className="range" min={0} max={150} value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))} />
                      <div className="filter-value-min-max">
                        <span>₹{minPrice} — ₹{maxPrice}</span>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="single-filter-box">
                  <h5 className="title">Categories</h5>
                  <div className="filterbox-body">
                    <div className="category-wrapper">
                      {allCategories.map((cat, i) => (
                        <div className="single-category" key={i}>
                          <input id={`cat${i}`} type="checkbox" checked={selectedCategories.includes(cat)} onChange={() => handleCategoryChange(cat)} />
                          <label htmlFor={`cat${i}`}>{cat}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="single-filter-box">
                  <h5 className="title">Brands</h5>
                  <div className="filterbox-body">
                    <div className="category-wrapper">
                      {allBrands.map((brand, i) => (
                        <div className="single-category" key={i}>
                          <input id={`brand${i}`} type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => handleBrandChange(brand)} />
                          <label htmlFor={`brand${i}`}>{brand}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9 col-lg-8">
              <div className="filter-select-area">
                <div className="top-filter">
                  <span>Showing {filteredProducts.length} results</span>
                  <div className="right-end">
                    <div className="button-tab-area">
                      <ul className="nav nav-tabs">
                        <li className="nav-item">
                          <button onClick={() => setActiveTab("tab1")} className={`nav-link single-button ${activeTab === "tab1" ? "active" : ""}`}>
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none"><rect x="0.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3B28" /><rect x="0.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3B28" /><rect x="9.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3B28" /><rect x="9.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3B28" /></svg>
                          </button>
                        </li>
                        <li className="nav-item">
                          <button onClick={() => setActiveTab("tab2")} className={`nav-link single-button ${activeTab === "tab2" ? "active" : ""}`}>
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none"><rect x="0.5" y="0.5" width={6} height={6} rx="1.5" stroke="#2C3C28" /><rect x="0.5" y="9.5" width={6} height={6} rx="1.5" stroke="#2C3C28" /><rect x={9} y={3} width={7} height={1} fill="#2C3C28" /><rect x={9} y={12} width={7} height={1} fill="#2C3C28" /></svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {(isList || activeTab === "tab2") ? (
                <div className="product-area-wrapper-shopgrid-list with-list mt--20">
                  <div className="row">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((post: PostType, index: number) => (
                        <div key={index} className="col-lg-6">
                          <div className="single-shopping-card-one discount-offer">
                            <div className="card-innr">
                              <div className="card-thumb">
                                <Link href={`/dashboard/shop-details-v1/${post.slug}`}>
                                  <img src={`/assets/images/grocery/${post.image}`} alt={post.title} />
                                </Link>
                              </div>
                              <div className="card-body">
                                <h4 className="product-title"><Link href={`/dashboard/shop-details-v1/${post.slug}`}>{post.title}</Link></h4>
                                <span className="product-price" style={{ color: "#DC2626", fontWeight: 600 }}>₹{post.price}</span>
                                <button
                                  onClick={() => handleAddToCart(post)}
                                  className="rts-btn btn-primary radious-sm with-icon"
                                  style={{ marginTop: "10px", padding: "8px 16px", fontSize: "13px", border: "none", cursor: "pointer" }}
                                >
                                  <i className="fa-regular fa-cart-shopping" style={{ marginRight: "6px" }} />
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-12 text-center py-5"><h2>No Product Found</h2></div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="product-area-wrapper-shopgrid-list mt--20">
                  <div className="row g-4">
                    {filteredProducts.length > 0 ? (
                      filteredProducts.map((post: PostType, index: number) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12">
                          <div className="single-shopping-card-one">
                            <div className="card-innr">
                              <div className="card-thumb">
                                <Link href={`/dashboard/shop-details-v1/${post.slug}`}>
                                  <img src={`/assets/images/grocery/${post.image}`} alt={post.title} />
                                </Link>
                              </div>
                              <div className="card-body">
                                <h4 className="product-title"><Link href={`/dashboard/shop-details-v1/${post.slug}`}>{post.title}</Link></h4>
                                <span className="product-price" style={{ color: "#DC2626", fontWeight: 600 }}>₹{post.price}</span>
                                <button
                                  onClick={() => handleAddToCart(post)}
                                  className="rts-btn btn-primary radious-sm with-icon"
                                  style={{ marginTop: "10px", padding: "8px 16px", fontSize: "13px", border: "none", cursor: "pointer" }}
                                >
                                  <i className="fa-regular fa-cart-shopping" style={{ marginRight: "6px" }} />
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-12 text-center py-5"><h2>No Product Found</h2></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
