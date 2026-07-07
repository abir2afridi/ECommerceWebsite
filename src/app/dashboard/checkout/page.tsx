"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";
import { useCart } from "@/components/header/CartContext";

const DEFAULT_SHIPPING_COST = 50;

export default function DashboardCheckout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { cartItems } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [showCoupon, setShowCoupon] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    orderNotes: "",
  });

  const handleCouponApply = async () => {
    // TODO: Replace with actual API call to validate coupon
    // const response = await fetch('/api/validate-coupon', { method: 'POST', body: JSON.stringify({ coupon }) });
    setCouponMessage("Coupon validation requires backend API");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = subtotal * discount;
  const shippingCost = discount > 0 ? 0 : DEFAULT_SHIPPING_COST;
  const total = subtotal - discountAmount + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setBillingInfo({ ...billingInfo, [id]: value });
  };

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <div className="vendor-grid-top-search-area">
            <h4 className="title">Checkout</h4>
          </div>

          <div className="row">
            {/* Left: Billing Details */}
            <div className="col-lg-8">
              <div className="card" style={{ padding: "25px", marginBottom: "20px" }}>
                <h5 style={{ marginBottom: "20px", fontWeight: 600 }}>Have a coupon?</h5>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <input
                    type="text"
                    placeholder="Enter coupon code..."
                    value={coupon}
                    onChange={(e) => { setCoupon(e.target.value); setCouponMessage(""); }}
                    style={{ flex: 1, padding: "10px", border: "1px solid #ddd", borderRadius: "6px" }}
                  />
                  <button onClick={handleCouponApply} className="rts-btn btn-primary" style={{ border: "none", cursor: "pointer" }}>
                    Apply Coupon
                  </button>
                </div>
                {couponMessage && (
                  <p style={{ color: coupon === "12345" ? "green" : "red", marginTop: "10px", fontSize: "14px" }}>
                    {couponMessage}
                  </p>
                )}
              </div>

              <div className="card" style={{ padding: "25px" }}>
                <h5 style={{ marginBottom: "20px", fontWeight: 600 }}>Billing Details</h5>
                <form>
                  <div className="row">
                    {[
                      { id: "email", label: "Email Address*", type: "email", col: "col-12" },
                      { id: "firstName", label: "First Name*", type: "text", col: "col-md-6" },
                      { id: "lastName", label: "Last Name*", type: "text", col: "col-md-6" },
                      { id: "company", label: "Company Name (Optional)", type: "text", col: "col-12" },
                      { id: "country", label: "Country / Region*", type: "text", col: "col-12" },
                      { id: "street", label: "Street Address*", type: "text", col: "col-12" },
                      { id: "city", label: "Town / City*", type: "text", col: "col-md-6" },
                      { id: "state", label: "State*", type: "text", col: "col-md-6" },
                      { id: "zip", label: "Zip Code*", type: "text", col: "col-md-6" },
                      { id: "phone", label: "Phone*", type: "tel", col: "col-md-6" },
                    ].map(({ id, label, type, col }) => (
                      <div className={col} key={id} style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}>{label}</label>
                        <input
                          type={type}
                          id={id}
                          value={(billingInfo as any)[id]}
                          onChange={handleInputChange}
                          required
                          style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "6px" }}
                        />
                      </div>
                    ))}
                    <div className="col-12" style={{ marginBottom: "15px" }}>
                      <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}>Order Notes</label>
                      <textarea
                        id="orderNotes"
                        value={billingInfo.orderNotes}
                        onChange={handleInputChange}
                        rows={4}
                        style={{ width: "100%", padding: "10px", border: "1px solid #ddd", borderRadius: "6px", resize: "vertical" }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="col-lg-4">
              <div className="card" style={{ padding: "25px", position: "sticky", top: "100px" }}>
                <h5 style={{ marginBottom: "20px", fontWeight: 600 }}>Your Order</h5>

                <div style={{ borderBottom: "1px solid #eee", paddingBottom: "10px", marginBottom: "10px", display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: 600 }}>
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>

                {cartItems.length === 0 ? (
                  <p style={{ color: "#999", textAlign: "center", padding: "20px 0" }}>Your cart is empty</p>
                ) : (
                  cartItems.filter(item => item.active).map((item) => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #eee" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <img src={item.image} alt={item.title} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "4px" }} />
                        <span style={{ fontSize: "14px" }}>{item.title} × {item.quantity}</span>
                      </div>
                      <span style={{ fontWeight: 600 }}>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))
                )}

                <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #eee", fontSize: "14px" }}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>

                {discount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #eee", fontSize: "14px", color: "green" }}>
                    <span>Discount (25%)</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #eee", fontSize: "14px" }}>
                  <span>Shipping</span>
                  <span>₹{shippingCost.toFixed(2)}</span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", padding: "15px 0", fontSize: "16px", fontWeight: 700 }}>
                  <span>Total</span>
                  <span style={{ color: "#DC2626" }}>₹{total.toFixed(2)}</span>
                </div>

                <div style={{ marginBottom: "15px" }}>
                  <h6 style={{ marginBottom: "10px", fontSize: "14px", fontWeight: 600 }}>Payment Method</h6>
                  {["Direct Bank Transfer", "Check Payments", "Cash On Delivery", "Paypal"].map((method, i) => (
                    <label key={i} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 0", fontSize: "14px", cursor: "pointer" }}>
                      <input type="radio" name="payment" defaultChecked={i === 0} />
                      {method}
                    </label>
                  ))}
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "15px", fontSize: "13px", cursor: "pointer" }}>
                  <input type="checkbox" required style={{ marginTop: "3px" }} />
                  I have read and agree to the terms and conditions
                </label>

                <button className="rts-btn btn-primary" style={{ width: "100%", padding: "12px", border: "none", cursor: "pointer", fontSize: "15px" }}>
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
