"use client";
import { useCart } from "@/components/header/CartContext";
import Link from "next/link";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cartItems, removeFromCart, updateItemQuantity } = useCart();
  const activeItems = cartItems.filter((item) => item.active);
  const total = activeItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && <div className="cart-overlay" onClick={onClose} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", zIndex: 9998 }} />}
      <div
        className="cart-sidebar"
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-400px",
          width: "380px",
          height: "100vh",
          background: "#fff",
          zIndex: 9999,
          transition: "right 0.3s ease",
          boxShadow: isOpen ? "-2px 0 10px rgba(0,0,0,0.1)" : "none",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div style={{ padding: "20px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h5 style={{ margin: 0, fontSize: "16px", fontWeight: 600 }}>Shopping Cart ({activeItems.length})</h5>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer" }}>
            <i className="fa-regular fa-x" />
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "15px 20px" }}>
          {activeItems.length === 0 ? (
            <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
              <i className="fa-regular fa-cart-shopping" style={{ fontSize: "40px", marginBottom: "15px", display: "block" }} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            activeItems.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: "15px", padding: "15px 0", borderBottom: "1px solid #eee" }}>
                <img src={item.image} alt={item.title} style={{ width: "70px", height: "70px", objectFit: "cover", borderRadius: "6px" }} />
                <div style={{ flex: 1 }}>
                  <h6 style={{ margin: 0, fontSize: "14px", fontWeight: 500 }}>{item.title}</h6>
                  <p style={{ margin: "5px 0", fontSize: "14px", color: "#DC2626", fontWeight: 600 }}>₹{item.price}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                      style={{ width: "28px", height: "28px", border: "1px solid #ddd", borderRadius: "4px", background: "#fff", cursor: "pointer" }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: "14px" }}>{item.quantity}</span>
                    <button
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                      style={{ width: "28px", height: "28px", border: "1px solid #ddd", borderRadius: "4px", background: "#fff", cursor: "pointer" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ background: "none", border: "none", color: "#999", cursor: "pointer", alignSelf: "flex-start" }}
                >
                  <i className="fa-regular fa-x" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {activeItems.length > 0 && (
          <div style={{ padding: "20px", borderTop: "1px solid #eee" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", fontSize: "16px" }}>
              <span>Subtotal:</span>
              <span style={{ fontWeight: 600, color: "#DC2626" }}>₹{total.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Link
                href="/dashboard/checkout"
                onClick={onClose}
                className="rts-btn btn-primary"
                style={{ flex: 1, textAlign: "center", padding: "10px", textDecoration: "none" }}
              >
                View Cart
              </Link>
              <Link
                href="/dashboard/checkout"
                onClick={onClose}
                className="rts-btn btn-primary border-only"
                style={{ flex: 1, textAlign: "center", padding: "10px", textDecoration: "none" }}
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
