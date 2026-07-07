"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";

export default function DashboardInvoice() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <div style={{ width: "100%", margin: "-30px 0 0", background: "#f1f1f1", borderRadius: 6, padding: "30px 35px", fontSize: 14 }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 18 }}>
              <div>
                <img src="/assets/images/logo/orrdr.svg" alt="logo" style={{ maxWidth: 130 }} />
              </div>
              <div style={{ textAlign: "right" }}>
                <h6 style={{ fontWeight: 500, fontSize: 26, margin: 0, lineHeight: 1 }}>Invoice</h6>
                <span style={{ display: "block", fontSize: 13, margin: "4px 0" }}>0152646678</span>
                <span style={{ display: "block", fontSize: 13, margin: "4px 0" }}>info@orrdr.com</span>
                <span style={{ display: "block", fontSize: 13, margin: "4px 0" }}>https://orrdr.com/</span>
              </div>
            </div>

            {/* Banner */}
            <div style={{ width: "100%", overflow: "hidden", borderRadius: 5, marginTop: 10, marginBottom: 15 }}>
              <img src="/assets/images/invoice/01.jpg" alt="invoice banner" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
            </div>

            {/* Table */}
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ background: "#e0e0e0" }}>
                    <th style={{ padding: "10px 14px", textAlign: "left", fontWeight: 600 }}>Item</th>
                    <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 600 }}>Unit Price</th>
                    <th style={{ padding: "10px 14px", textAlign: "center", fontWeight: 600 }}>Quantity</th>
                    <th style={{ padding: "10px 14px", textAlign: "right", fontWeight: 600 }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                    <td style={{ padding: "10px 14px" }}>
                      <div>Hijab 3 Pieces Combo Pack</div>
                      <small style={{ color: "#888" }}>SKU: HCB-001</small>
                    </td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>₹35.00</td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>2</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>₹70.00</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                    <td style={{ padding: "10px 14px" }}>
                      <div>Cotton Handkerchief Set</div>
                      <small style={{ color: "#888" }}>SKU: CHS-002</small>
                    </td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>₹45.00</td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>1</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>₹45.00</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                    <td style={{ padding: "10px 14px" }}>
                      <div>Premium Kitchen Towel</div>
                      <small style={{ color: "#888" }}>SKU: PKT-003</small>
                    </td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>₹120.00</td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>3</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>₹360.00</td>
                  </tr>
                  <tr style={{ borderBottom: "1px solid #e0e0e0" }}>
                    <td style={{ padding: "10px 14px" }}>
                      <div>All Natural Italian-Style Chicken Meatballs</div>
                      <small style={{ color: "#888" }}>SKU: 98HFG</small>
                    </td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>₹240.00</td>
                    <td style={{ padding: "10px 14px", textAlign: "center" }}>1</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>₹240.00</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ padding: "10px 14px", textAlign: "right", fontWeight: 600 }}>SubTotal</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>₹715.00</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ padding: "10px 14px", textAlign: "right", fontWeight: 600 }}>Tax (5%)</td>
                    <td style={{ padding: "10px 14px", textAlign: "right" }}>₹35.75</td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ padding: "10px 14px", textAlign: "right", fontWeight: 600 }}>Grand Total</td>
                    <td style={{ padding: "10px 14px", textAlign: "right", fontWeight: 600 }}>₹750.75</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div style={{ textAlign: "center", marginTop: 25, borderTop: "1px solid #ddd", paddingTop: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                <span style={{ fontSize: 16, fontWeight: 500 }}>Powerby</span>
                <img src="/favicon.ico" alt="" style={{ maxWidth: 30 }} />
              </div>
              <p style={{ fontSize: 12, marginTop: 12, color: "#555" }}>
                Note: This is computer generated receipt and does not require physical signature.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div style={{ textAlign: "center", marginTop: 20, marginBottom: 30, display: "flex", justifyContent: "center", gap: 15 }}>
            <button
              onClick={() => window.print()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                background: "#1a1a2e",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#16213e")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a2e")}
            >
              <i className="fa-regular fa-print" /> Print Now
            </button>
            <a
              href="/assets/images/invoice/invoice.pdf"
              download
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 24px",
                background: "#e94560",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                textDecoration: "none",
                transition: "background 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#c81e45")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#e94560")}
            >
              <i className="fa-thin fa-download" /> Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
