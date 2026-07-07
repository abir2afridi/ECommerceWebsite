"use client";
import { useState } from "react";
import SideLeft from "../components/SideLeft";
import Header from "../components/Header";
import AboutBanner from "@/components/banner/AboutBanner";
import CounterOne from "@/components/counterup/CounterOne";
import AboutOne from "@/components/about/AboutOne";
import Team from "@/components/about/Team";
import ServiceOne from "@/components/service/ServiceOne";
import TestimonilsOne from "@/components/testimonials/TestimonilsOne";
import ShortService from "@/components/service/ShortService";

export default function DashboardAbout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          <AboutBanner />
          <CounterOne />
          <AboutOne />
          <Team />
          <ServiceOne />
          <TestimonilsOne />
          <ShortService />
        </div>
      </div>
    </div>
  );
}
