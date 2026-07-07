"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";

const sampleOrderData = {
  orderId: "ORD-7845",
  status: "In Transit",
  estimatedDelivery: "15 Jun 2026",
  timeline: [
    { step: "Order Placed", date: "10 Jun 2026, 09:30 AM", completed: true },
    { step: "Payment Confirmed", date: "10 Jun 2026, 09:32 AM", completed: true },
    { step: "Processing", date: "11 Jun 2026, 02:15 PM", completed: true },
    { step: "Shipped", date: "12 Jun 2026, 10:00 AM", completed: true },
    { step: "Out for Delivery", date: "14 Jun 2026, 08:00 AM", completed: false },
    { step: "Delivered", date: "-", completed: false },
  ],
  items: [
    { name: "Hijab 3 Pieces Combo", qty: 2, price: "₹70" },
    { name: "Cotton Handkerchief Set", qty: 1, price: "₹45" },
  ],
  shipping: {
    name: "John Doe",
    address: "123 Main Street, Mumbai, Maharashtra - 400001",
    phone: "+91 98765 43210",
  },
};

export default function TrackOrder() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [orderFound, setOrderFound] = useState(false);
  const [searchError, setSearchError] = useState("");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim() && email.trim()) {
      setOrderFound(true);
      setSearchError("");
    } else {
      setSearchError("Please enter both Order ID and Email");
    }
  };

  const getStepColor = (completed: boolean) => completed ? "#22C55E" : "#D1D5DB";

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <div className="vendor-grid-top-search-area">
            <h4 className="title">Track Order</h4>
          </div>

          {/* Search Form */}
          <div className="card" style={{ padding: "30px", marginBottom: "25px" }}>
            <h5 style={{ marginBottom: "20px", fontWeight: 600 }}>Track Your Order</h5>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "20px" }}>
              Enter your Order ID and Email to track the status of your order.
            </p>
            <form onSubmit={handleTrack}>
              <div className="row">
                <div className="col-md-5" style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}>Order ID</label>
                  <input
                    type="text"
                    placeholder="e.g. ORD-7845"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    style={{ width: "100%", padding: "10px 15px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" }}
                  />
                </div>
                <div className="col-md-5" style={{ marginBottom: "15px" }}>
                  <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 500 }}>Billing Email</label>
                  <input
                    type="email"
                    placeholder="Email used during checkout"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: "100%", padding: "10px 15px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" }}
                  />
                </div>
                <div className="col-md-2" style={{ marginBottom: "15px", display: "flex", alignItems: "flex-end" }}>
                  <button type="submit" className="rts-btn btn-primary" style={{ width: "100%", padding: "10px", border: "none", cursor: "pointer" }}>
                    Track
                  </button>
                </div>
              </div>
              {searchError && <p style={{ color: "#EF4444", fontSize: "14px", marginTop: "5px" }}>{searchError}</p>}
            </form>
          </div>

          {/* Order Tracking Result */}
          {orderFound && (
            <div className="row">
              {/* Order Status */}
              <div className="col-lg-8">
                <div className="card" style={{ padding: "25px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "25px" }}>
                    <div>
                      <h5 style={{ margin: 0, fontWeight: 600 }}>Order {sampleOrderData.orderId}</h5>
                      <p style={{ margin: "5px 0 0", color: "#666", fontSize: "14px" }}>Estimated Delivery: {sampleOrderData.estimatedDelivery}</p>
                    </div>
                    <span
                      style={{
                        padding: "6px 16px",
                        borderRadius: "20px",
                        fontSize: "13px",
                        fontWeight: 600,
                        background: "#FEF3C7",
                        color: "#D97706",
                      }}
                    >
                      {sampleOrderData.status}
                    </span>
                  </div>

                  {/* Timeline */}
                  <div style={{ position: "relative" }}>
                    {sampleOrderData.timeline.map((step, index) => (
                      <div key={index} style={{ display: "flex", marginBottom: index < sampleOrderData.timeline.length - 1 ? "0" : "0" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }}>
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              background: getStepColor(step.completed),
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              zIndex: 1,
                            }}
                          >
                            {step.completed && <i className="fa-solid fa-check" style={{ color: "#fff", fontSize: "12px" }} />}
                          </div>
                          {index < sampleOrderData.timeline.length - 1 && (
                            <div style={{ width: "2px", height: "40px", background: getStepColor(step.completed) }} />
                          )}
                        </div>
                        <div style={{ paddingBottom: "20px" }}>
                          <p style={{ margin: 0, fontWeight: step.completed ? 600 : 400, color: step.completed ? "#1F2937" : "#9CA3AF" }}>
                            {step.step}
                          </p>
                          <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#6B7280" }}>{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Details */}
              <div className="col-lg-4">
                <div className="card" style={{ padding: "25px", marginBottom: "20px" }}>
                  <h6 style={{ marginBottom: "15px", fontWeight: 600 }}>Order Items</h6>
                  {sampleOrderData.items.map((item, index) => (
                    <div key={index} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: index < sampleOrderData.items.length - 1 ? "1px solid #eee" : "none" }}>
                      <div>
                        <p style={{ margin: 0, fontSize: "14px" }}>{item.name}</p>
                        <p style={{ margin: "4px 0 0", fontSize: "13px", color: "#666" }}>Qty: {item.qty}</p>
                      </div>
                      <span style={{ fontWeight: 500 }}>{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="card" style={{ padding: "25px" }}>
                  <h6 style={{ marginBottom: "15px", fontWeight: 600 }}>Shipping Address</h6>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>{sampleOrderData.shipping.name}</p>
                  <p style={{ margin: "8px 0", fontSize: "14px", color: "#666" }}>{sampleOrderData.shipping.address}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#666" }}>{sampleOrderData.shipping.phone}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
