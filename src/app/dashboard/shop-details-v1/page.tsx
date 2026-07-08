"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";
import { useCart } from "@/components/header/CartContext";

export default function ShopDetails() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [activeImage, setActiveImage] = useState("/assets/images/grocery/01.jpg");
  const [selectedSize, setSelectedSize] = useState("01 Miter");
  const [selectedWeight, setSelectedWeight] = useState("5 kg");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const thumbnails = [
    { id: "one", src: "/assets/images/grocery/01.jpg", alt: "product" },
    { id: "two", src: "/assets/images/shop/02.jpg", alt: "product" },
    { id: "three", src: "/assets/images/shop/03.jpg", alt: "product" },
    { id: "four", src: "/assets/images/shop/04.jpg", alt: "product" },
    { id: "five", src: "/assets/images/shop/05.jpg", alt: "product" },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: 1,
      image: "/assets/images/grocery/01.jpg",
      title: "Hijab 3 Pieces Combo Pack",
      price: 35,
      quantity: quantity,
      active: true,
    });
  };

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <div className="vendor-grid-top-search-area">
            <h4 className="title">Shop Details</h4>
          </div>

          <div className="row g-5">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="product-details-popup-wrapper in-shopdetails">
                <div className="rts-product-details-section rts-product-details-section2 product-details-popup-section">
                  <div className="product-details-popup">
                    <div className="details-product-area">
                      <div className="product-thumb-area">
                        <div className="cursor" />
                        <div className="thumb-wrapper one filterd-items figure">
                          <div className="product-thumb">
                            <img src={activeImage} alt="image" />
                          </div>
                        </div>
                        <div className="product-thumb-filter-group">
                          {thumbnails.map((thumb) => (
                            <div
                              key={thumb.id}
                              className={`thumb-filter filter-btn ${activeImage === thumb.src ? "active" : ""}`}
                              onClick={() => setActiveImage(thumb.src)}
                              style={{ cursor: "pointer" }}
                            >
                              <img src={thumb.src} alt={thumb.alt} />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="contents">
                        <div className="product-status">
                          <span className="product-catagory">Dress</span>
                          <div className="rating-stars-group">
                            <div className="rating-star"><i className="fas fa-star" /></div>
                            <div className="rating-star"><i className="fas fa-star" /></div>
                            <div className="rating-star"><i className="fas fa-star-half-alt" /></div>
                            <span>10 Reviews</span>
                          </div>
                        </div>
                        <h2 className="product-title">Hijab 3 Pieces Combo Pack</h2>
                        <p className="mt--20 mb--20">Modern design hijab combo pack. Comfortable to wear. Buy it at the best price.</p>
                        <span className="product-price mb--15 d-block" style={{ color: "#DC2626", fontWeight: 600 }}>
                          ₹35 <span className="old-price ml--15">₹69.35</span>
                        </span>

                        <div className="variable-product-type mb--15">
                          <div className="single-select">
                            <span className="label">Size</span>
                            <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
                              <option>01 Miter</option>
                              <option value="1">03 Miter</option>
                              <option value="2">02 Miter</option>
                              <option value="3">05 Miter</option>
                            </select>
                          </div>
                          <div className="single-select">
                            <span className="label">Weight</span>
                            <select value={selectedWeight} onChange={(e) => setSelectedWeight(e.target.value)}>
                              <option>5 kg</option>
                              <option value="1">5kg</option>
                              <option value="2">7kg</option>
                              <option value="3">10kg</option>
                            </select>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                          <span style={{ fontSize: "14px" }}>Quantity:</span>
                          <div style={{ display: "flex", alignItems: "center", border: "1px solid #ddd", borderRadius: "6px" }}>
                            <button
                              onClick={() => setQuantity(Math.max(1, quantity - 1))}
                              style={{ width: "36px", height: "36px", border: "none", background: "none", cursor: "pointer", fontSize: "16px" }}
                            >
                              -
                            </button>
                            <span style={{ width: "40px", textAlign: "center", fontSize: "14px" }}>{quantity}</span>
                            <button
                              onClick={() => setQuantity(quantity + 1)}
                              style={{ width: "36px", height: "36px", border: "none", background: "none", cursor: "pointer", fontSize: "16px" }}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="product-bottom-action">
                          <button onClick={handleAddToCart} className="rts-btn btn-primary radious-sm with-icon" style={{ border: "none", cursor: "pointer" }}>
                            <div className="btn-text">Add To Cart</div>
                            <div className="arrow-icon"><i className="fa-regular fa-cart-shopping" /></div>
                          </button>
                        </div>

                        <div className="product-uniques">
                          <span className="sku product-unipue mb--10"><span style={{ fontWeight: 400, marginRight: 10 }}>SKU:</span> BO1D0MX8SJ</span>
                          <span className="catagorys product-unipue mb--10"><span style={{ fontWeight: 400, marginRight: 10 }}>Categories:</span> T-Shirts, Tops, Mens</span>
                          <span className="tags product-unipue mb--10"><span style={{ fontWeight: 400, marginRight: 10 }}>Tags:</span> fashion, t-shirts, Men</span>
                        </div>

                        <div className="share-option-shop-details">
                          <div className="single-share-option"><div className="icon"><i className="fa-regular fa-heart" /></div><span>Add To Wishlist</span></div>
                          <div className="single-share-option"><div className="icon"><i className="fa-solid fa-share" /></div><span>Share On social</span></div>
                          <div className="single-share-option"><div className="icon"><i className="fa-light fa-code-compare" /></div><span>Compare</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product-discription-tab-shop mt--50">
                <ul className="nav nav-tabs">
                  <li className="nav-item"><button onClick={() => setActiveTab("tab1")} className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}>Product Details</button></li>
                  <li className="nav-item"><button onClick={() => setActiveTab("tab2")} className={`nav-link ${activeTab === "tab2" ? "active" : ""}`}>Additional Information</button></li>
                  <li className="nav-item"><button onClick={() => setActiveTab("tab3")} className={`nav-link ${activeTab === "tab3" ? "active" : ""}`}>Customer Reviews (01)</button></li>
                </ul>
                <div className="tab-content">
                  {activeTab === "tab1" && (
                    <div className="single-tab-content-shop-details">
                      <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness.</p>
                      <div className="details-row-2">
                        <div className="left-area"><img src="/assets/images/shop/06.jpg" alt="shop" /></div>
                        <div className="right">
                          <h4 className="title">All Natural Italian-Style Chicken Meatballs</h4>
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "tab2" && (
                    <div className="single-tab-content-shop-details">
                      <div className="table-responsive table-shop-details-pd">
                        <table className="table">
                          <thead><tr><th>Kitchen Fade Defy</th><th>5KG</th></tr></thead>
                          <tbody>
                            <tr><td>PRAN Full Cream Milk Powder</td><td>3KG</td></tr>
                            <tr><td>Net weight</td><td>8KG</td></tr>
                            <tr><td>Brand</td><td>Reactheme</td></tr>
                            <tr><td>Item code</td><td>4000000005</td></tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {activeTab === "tab3" && (
                    <div className="single-tab-content-shop-details">
                      <div className="product-details-review-product-style">
                        <div className="average-stars-area-left">
                          <div className="top-stars-wrapper">
                            <h4 className="review">5.0</h4>
                            <div className="rating-disc">
                              <span>Average Rating</span>
                              <div className="stars">
                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                <span>(1 Reviews & 0 Ratings)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="submit-review-area">
                          <form className="submit-review-area">
                            <h5 className="title">Submit Your Review</h5>
                            <div className="half-input-wrapper">
                              <div className="half-input"><input type="text" placeholder="Your Name*" /></div>
                              <div className="half-input"><input type="text" placeholder="Your Email *" /></div>
                            </div>
                            <textarea placeholder="Write Your Review" />
                            <button className="rts-btn btn-primary">SUBMIT REVIEW</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-12 offset-xl-1 rts-sticky-column-item">
              <div className="theiaStickySidebar">
                <div className="shop-sight-sticky-sidevbar mb--20">
                  <h6 className="title">Available Offers</h6>
                  <div className="single-offer-area">
                    <div className="icon"><img src="/assets/images/shop/01.svg" alt="icon" /></div>
                    <div className="details"><p>Get 5% instant discount for the 1st Flipkart Order using orrdr UPI</p></div>
                  </div>
                  <div className="single-offer-area">
                    <div className="icon"><img src="/assets/images/shop/02.svg" alt="icon" /></div>
                    <div className="details"><p>Flat ₹250 off on Citi-branded Credit Card EMI Transactions</p></div>
                  </div>
                  <div className="single-offer-area">
                    <div className="icon"><img src="/assets/images/shop/03.svg" alt="icon" /></div>
                    <div className="details"><p>Free Worldwide Shipping on all orders over ₹100</p></div>
                  </div>
                </div>
                <div className="our-payment-method">
                  <h5 className="title">Guaranteed Safe Checkout</h5>
                  <img src="/assets/images/shop/03.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
