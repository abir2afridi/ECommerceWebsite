"use client";

import { useState } from "react";
import SideLeft from "@/app/dashboard/components/SideLeft";
import Header from "@/app/dashboard/components/Header";
import BlogListMain from "@/app/(inner)/blog-list-left-sidebar/BlogListMain";
import BlogSidebar from "@/components/blog/BlogSidebar";
import Posts from "@/data/Posts.json";
import Link from "next/link";

interface PostType {
  category?: string;
  slug: string;
  image: string;
  title?: string;
  author?: string;
  publishedDate?: string;
}

export default function DashboardBlogListLeft() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const toggleSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const totalPages = Math.ceil(Posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = Posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="orrdr_dashboard">
      <SideLeft collapsed={sidebarCollapsed} />
      <div className={`right-area-body-content ${sidebarCollapsed ? "collapsed" : ""}`}>
        <Header onToggleSidebar={toggleSidebar} />
        <div className="body-root-inner">
          {/* Breadcrumb */}
          <div className="rts-navigation-area-breadcrumb bg_light-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="navigator-breadcrumb-wrapper">
                    <Link href="/dashboard">Home</Link>
                    <i className="fa-regular fa-chevron-right" />
                    <a className="current" href="#">Blog Lists With Sidebar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-seperator bg_light-1">
            <div className="container"><hr className="section-seperator" /></div>
          </div>

          <div className="blog-sidebar-area rts-section-gap" style={{ transform: "none" }}>
            <div className="container" style={{ transform: "none" }}>
              <div className="row" style={{ transform: "none" }}>
                <div
                  className="col-lg-4 pr--60 pr_md--10 pr_sm--10 rts-sticky-column-item"
                  style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: 1 }}
                >
                  <BlogSidebar />
                </div>
                <div className="col-lg-8">
                  {currentPosts.map((post: PostType, index: number) => (
                    <div key={index} className="single-blog-main-wrapper-top">
                      <div className="single-blog-style-card-border mb--40">
                        <BlogListMain Slug={post.slug} blogImage={post.image} blogTitle={post.title} />
                      </div>
                    </div>
                  ))}
                  <div className="pagination-area-wrapper mt--20">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className="rts-btn btn-primary radious-sm"
                        style={{ marginRight: 8, opacity: currentPage === i + 1 ? 1 : 0.6 }}
                      >
                        {i + 1}
                      </button>
                    ))}
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
