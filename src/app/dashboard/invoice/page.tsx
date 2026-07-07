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
          <div className="vendor-grid-top-search-area">
            <h4 className="title">Invoice</h4>
          </div>

          <div className="rts-invoice-style-one">
            <div className="container-2">
              <div className="row">
                <div className="col-lg-12">
                  <div className="invoice-main-wrapper-1">
                    <div className="logo-top-area">
                      <div className="logo">
                        <img src="/assets/images/logo/orrdr.svg" alt="logo" />
                      </div>
                      <div className="invoice-location">
                        <h6 className="title">Invoice</h6>
                        <span className="number">0152646678</span>
                        <span className="email">info@orrdr.com</span>
                        <span className="website">https://orrdr.com/</span>
                      </div>
                    </div>
                    <div className="invoice-banner bg_image" style={{ width: "100%", overflow: "hidden", borderRadius: "5px", marginTop: "30px" }}>
                      <img src="/assets/images/invoice/01.jpg" alt="invoice banner" style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} />
                    </div>
                    <div className="invoice-center-rts">
                      <div className="table-responsive">
                        <table className="table table-striped invoice-table">
                          <thead className="bg-active">
                            <tr>
                              <th>Item</th>
                              <th className="text-center">Unit Price</th>
                              <th className="text-center">Quantity</th>
                              <th className="text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="item-desc-1">
                                  <span>Hijab 3 Pieces Combo Pack</span>
                                  <small>SKU: HCB-001</small>
                                </div>
                              </td>
                              <td className="text-center">₹35.00</td>
                              <td className="text-center">2</td>
                              <td className="text-right">₹70.00</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="item-desc-1">
                                  <span>Cotton Handkerchief Set</span>
                                  <small>SKU: CHS-002</small>
                                </div>
                              </td>
                              <td className="text-center">₹45.00</td>
                              <td className="text-center">1</td>
                              <td className="text-right">₹45.00</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="item-desc-1">
                                  <span>Premium Kitchen Towel</span>
                                  <small>SKU: PKT-003</small>
                                </div>
                              </td>
                              <td className="text-center">₹120.00</td>
                              <td className="text-center">3</td>
                              <td className="text-right">₹360.00</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="item-desc-1">
                                  <span>All Natural Italian-Style Chicken Meatballs</span>
                                  <small>SKU: 98HFG</small>
                                </div>
                              </td>
                              <td className="text-center">₹240.00</td>
                              <td className="text-center">1</td>
                              <td className="text-right">₹240.00</td>
                            </tr>
                            <tr>
                              <td colSpan={3} className="text-end f-w-600">
                                SubTotal
                              </td>
                              <td className="text-right">₹715.00</td>
                            </tr>
                            <tr>
                              <td colSpan={3} className="text-end f-w-600">
                                Tax (5%)
                              </td>
                              <td className="text-right">₹35.75</td>
                            </tr>
                            <tr>
                              <td colSpan={3} className="text-end f-w-600">
                                Grand Total
                              </td>
                              <td className="text-right f-w-600">₹750.75</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="invoice-area-bottom">
                      <div className="powerby">
                        <p>Powerby</p>
                        <img src="/favicon.ico" alt="" />
                      </div>
                      <p>
                        Note: This is computer generated receipt and does not require
                        physical signature.
                      </p>
                    </div>
                  </div>
                  <div className="buttons-area-invoice no-print mb--30">
                    <button
                      onClick={() => window.print()}
                      className="rts-btn btn-primary radious-sm with-icon"
                    >
                      <div className="btn-text">Print Now</div>
                      <div className="arrow-icon">
                        <i className="fa-regular fa-print" />
                      </div>
                    </button>
                    <a
                      href="/assets/images/invoice/invoice.pdf"
                      download
                      className="rts-btn btn-primary radious-sm with-icon"
                    >
                      <div className="btn-text">Download</div>
                      <div className="arrow-icon">
                        <i className="fa-thin fa-download" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
