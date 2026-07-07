"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";

const orderHistoryData = [
  { id: 1, orderNo: "#ORD-7841", date: "12 Jun 2026", items: 3, total: "₹1,250", status: "Delivered", payment: "Paid" },
  { id: 2, orderNo: "#ORD-7842", date: "10 Jun 2026", items: 1, total: "₹450", status: "Delivered", payment: "Paid" },
  { id: 3, orderNo: "#ORD-7843", date: "08 Jun 2026", items: 5, total: "₹2,100", status: "Delivered", payment: "Paid" },
  { id: 4, orderNo: "#ORD-7844", date: "05 Jun 2026", items: 2, total: "₹890", status: "Cancelled", payment: "Refunded" },
  { id: 5, orderNo: "#ORD-7845", date: "01 Jun 2026", items: 4, total: "₹1,780", status: "Delivered", payment: "Paid" },
  { id: 6, orderNo: "#ORD-7846", date: "28 May 2026", items: 1, total: "₹320", status: "Delivered", payment: "Paid" },
  { id: 7, orderNo: "#ORD-7847", date: "25 May 2026", items: 3, total: "₹950", status: "Returned", payment: "Refunded" },
  { id: 8, orderNo: "#ORD-7848", date: "20 May 2026", items: 2, total: "₹680", status: "Delivered", payment: "Paid" },
];

export default function OrderHistory() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const filteredOrders = orderHistoryData.filter((order) => {
    const matchesSearch =
      order.orderNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.date.includes(searchTerm);
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "#22C55E";
      case "Cancelled": return "#EF4444";
      case "Returned": return "#F59E0B";
      default: return "#6B7280";
    }
  };

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <div className="vendor-grid-top-search-area">
            <h4 className="title">Order History</h4>
          </div>

          {/* Filters */}
          <div className="card" style={{ padding: "20px", marginBottom: "20px" }}>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-md-5">
                <input
                  type="text"
                  placeholder="Search by order number or date..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "100%", padding: "10px 15px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" }}
                />
              </div>
              <div className="col-md-3">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={{ width: "100%", padding: "10px 15px", border: "1px solid #ddd", borderRadius: "6px", fontSize: "14px" }}
                >
                  <option value="All">All Status</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Returned">Returned</option>
                </select>
              </div>
              <div className="col-md-4" style={{ textAlign: "right" }}>
                <span style={{ fontSize: "14px", color: "#666" }}>
                  Showing {filteredOrders.length} of {orderHistoryData.length} orders
                </span>
              </div>
            </div>
          </div>

          {/* Order Table */}
          <div className="card" style={{ padding: "0", overflow: "hidden" }}>
            <div className="table-responsive">
              <table className="table table-hover" style={{ marginBottom: 0 }}>
                <thead>
                  <tr style={{ background: "#f8f9fa" }}>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Order No</th>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Date</th>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Items</th>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Total</th>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Payment</th>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Status</th>
                    <th style={{ padding: "15px", fontWeight: 600 }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ textAlign: "center", padding: "40px", color: "#999" }}>
                        No orders found
                      </td>
                    </tr>
                  ) : (
                    filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td style={{ padding: "15px" }}>
                          <span style={{ color: "#2563EB", fontWeight: 500 }}>{order.orderNo}</span>
                        </td>
                        <td style={{ padding: "15px" }}>{order.date}</td>
                        <td style={{ padding: "15px" }}>{order.items} items</td>
                        <td style={{ padding: "15px", fontWeight: 600 }}>{order.total}</td>
                        <td style={{ padding: "15px" }}>
                          <span
                            style={{
                              padding: "4px 10px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: 500,
                              background: order.payment === "Paid" ? "#DCFCE7" : "#FEE2E2",
                              color: order.payment === "Paid" ? "#166534" : "#991B1B",
                            }}
                          >
                            {order.payment}
                          </span>
                        </td>
                        <td style={{ padding: "15px" }}>
                          <span
                            style={{
                              padding: "4px 10px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: 500,
                              background: `${getStatusColor(order.status)}20`,
                              color: getStatusColor(order.status),
                            }}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td style={{ padding: "15px" }}>
                          <button
                            onClick={() => router.push(`/dashboard/order-details?order=${order.orderNo}`)}
                            style={{
                              padding: "6px 12px",
                              border: "1px solid #ddd",
                              borderRadius: "4px",
                              background: "#fff",
                              cursor: "pointer",
                              fontSize: "13px",
                            }}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-3">
              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <h6 style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>Total Orders</h6>
                <h3 style={{ margin: 0, color: "#2563EB" }}>{orderHistoryData.length}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <h6 style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>Delivered</h6>
                <h3 style={{ margin: 0, color: "#22C55E" }}>{orderHistoryData.filter(o => o.status === "Delivered").length}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <h6 style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>Cancelled</h6>
                <h3 style={{ margin: 0, color: "#EF4444" }}>{orderHistoryData.filter(o => o.status === "Cancelled").length}</h3>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card" style={{ padding: "20px", textAlign: "center" }}>
                <h6 style={{ color: "#666", fontSize: "14px", marginBottom: "8px" }}>Returned</h6>
                <h3 style={{ margin: 0, color: "#F59E0B" }}>{orderHistoryData.filter(o => o.status === "Returned").length}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
