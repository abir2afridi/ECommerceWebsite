"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";
import { useCart } from "@/components/header/CartContext";

const DEFAULT_SHIPPING_COST = 50;

export default function DashboardCheckout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { cartItems, removeFromCart } = useCart();
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("cod");
  const [termsAccepted, setTermsAccepted] = useState(false);
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

  const generateOrderNumber = () => {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `ORD-${timestamp}${random}`;
  };

  const handlePlaceOrder = () => {
    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    if (!billingInfo.email || !billingInfo.firstName || !billingInfo.lastName || !billingInfo.phone) {
      alert("Please fill in all required fields");
      return;
    }

    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);

    // Clear cart after successful order
    cartItems.forEach((item) => {
      removeFromCart(item.id);
    });
  };

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  // Order Success Screen
  if (orderPlaced) {
    return (
      <div className="orrdr_dashboard">
        <SideLeft collapsed={sidebarCollapsed} />
        <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
          <Header onToggleSidebar={toggleSidebar} />
          <div className="body-root-inner">
            <div className="vendor-grid-top-search-area">
              <h4 className="title">Order Confirmation</h4>
            </div>

            <div className="card" style={{ padding: "40px", textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                <i className="fa-solid fa-check" style={{ fontSize: "36px", color: "#22C55E" }} />
              </div>
              <h2 style={{ marginBottom: "10px", color: "#1F2937" }}>Thank You For Your Order!</h2>
              <p style={{ color: "#6B7280", marginBottom: "20px" }}>Your order has been placed successfully.</p>

              <div style={{ background: "#F9FAFB", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
                <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#6B7280" }}>Order Number</p>
                <p style={{ margin: 0, fontSize: "20px", fontWeight: 700, color: "#DC2626" }}>{orderNumber}</p>
              </div>

              <div style={{ textAlign: "left", padding: "20px", background: "#F9FAFB", borderRadius: "8px", marginBottom: "20px" }}>
                <h5 style={{ marginBottom: "15px", fontSize: "16px", fontWeight: 600 }}>Order Details</h5>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                  <span style={{ color: "#6B7280" }}>Name:</span>
                  <span>{billingInfo.firstName} {billingInfo.lastName}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                  <span style={{ color: "#6B7280" }}>Email:</span>
                  <span>{billingInfo.email}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                  <span style={{ color: "#6B7280" }}>Phone:</span>
                  <span>{billingInfo.phone}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px" }}>
                  <span style={{ color: "#6B7280" }}>Payment Method:</span>
                  <span style={{ textTransform: "capitalize" }}>{selectedPayment === "cod" ? "Cash On Delivery" : selectedPayment}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", fontWeight: 700, borderTop: "1px solid #E5E7EB", paddingTop: "10px", marginTop: "10px" }}>
                  <span>Total:</span>
                  <span style={{ color: "#DC2626" }}>₹{total.toFixed(2)}</span>
                </div>
              </div>

              <p style={{ color: "#6B7280", fontSize: "14px", marginBottom: "20px" }}>
                A confirmation email will be sent to <strong>{billingInfo.email}</strong>
              </p>

              <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/dashboard/invoice" className="rts-btn btn-primary" style={{ padding: "10px 24px", textDecoration: "none" }}>
                  <i className="fa-regular fa-file-invoice" style={{ marginRight: "8px" }} />
                  View Invoice
                </a>
                <a href="/dashboard/order-history" className="rts-btn btn-primary" style={{ padding: "10px 24px", textDecoration: "none" }}>
                  View Order History
                </a>
                <a href="/dashboard/shop-layout" className="rts-btn btn-primary border-only" style={{ padding: "10px 24px", textDecoration: "none" }}>
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Checkout Form
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
                  <p style={{ color: "#666", marginTop: "10px", fontSize: "14px" }}>
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
                  {[
                    { id: "cod", label: "Cash On Delivery" },
                    { id: "bank", label: "Direct Bank Transfer" },
                    { id: "check", label: "Check Payments" },
                    { id: "paypal", label: "Paypal" },
                  ].map((method) => (
                    <label key={method.id} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 0", fontSize: "14px", cursor: "pointer" }}>
                      <input
                        type="radio"
                        name="payment"
                        checked={selectedPayment === method.id}
                        onChange={() => setSelectedPayment(method.id)}
                      />
                      {method.label}
                    </label>
                  ))}
                </div>

                <label style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "15px", fontSize: "13px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    style={{ marginTop: "3px" }}
                  />
                  I have read and agree to the terms and conditions
                </label>

                <button
                  onClick={handlePlaceOrder}
                  className="rts-btn btn-primary"
                  style={{ width: "100%", padding: "12px", border: "none", cursor: "pointer", fontSize: "15px" }}
                  disabled={cartItems.length === 0}
                >
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
