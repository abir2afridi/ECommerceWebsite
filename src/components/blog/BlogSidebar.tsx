"use client";
import Link from "next/link";

export default function BlogSidebar() {
  return (
    <div
      className="theiaStickySidebar"
      style={{
        paddingTop: 0,
        paddingBottom: 1,
        position: "static",
        transform: "none",
        top: 0,
        left: "1292.66px",
      }}
    >
      <div className="blog-sidebar-single-wized">
        <form action="#">
          <input type="text" placeholder="Search Here" />
          <button>
            <i className="fa-regular fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <div className="blog-sidebar-single-wized with-title">
        <h4 className="title">Categories</h4>
        <div className="category-main-wrapper">
          <div className="single-category-area"><p>Baking Material</p></div>
          <div className="single-category-area"><p>Bread and Juice</p></div>
          <div className="single-category-area"><p>Clothing &amp; Beauty</p></div>
          <div className="single-category-area"><p>Fresh Vegetable</p></div>
          <div className="single-category-area"><p>Fresh Seafood</p></div>
          <div className="single-category-area"><p>Milks and Daires</p></div>
          <div className="single-category-area"><p>Wine &amp; Drinks</p></div>
        </div>
      </div>
      <div className="blog-sidebar-single-wized with-title">
        <h4 className="title">Latest Post</h4>
        <div className="latest-post-small-area-wrapper">
          {[1, 2, 3].map((_, idx) => (
            <div className="single-latest-post-area" key={idx}>
              <a href="#" className="thumbnail">
                <img src={`/assets/images/blog/thumb/0${idx + 1}.jpg`} alt="thumbnail" />
              </a>
              <div className="inner-content-area">
                <div className="icon-top-area">
                  <i className="fa-light fa-clock" />
                  <span>Sep 25, 2024</span>
                </div>
                <a href="#">
                  <h5 className="title-sm-blog">
                    {idx === 0 && "Crowd-Pleasing Meals Made with Our Grocery Staples"}
                    {idx === 1 && "Reducing Your Carbon Footprint with Our Sustainable Products"}
                    {idx === 2 && "Discovering New Flavors in Our Ethnic Foods Aisle"}
                  </h5>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="blog-sidebar-single-wized with-title">
        <h4 className="title">Tags</h4>
        <div className="tags-area-blog-short-main">
          {["Shampoo", "Butter", "Birthday", "Gifts", "Facial", "Green", "Lotion", "Scrub"].map(
            (tag, idx) => (
              <button key={idx} className="single-category">{tag}</button>
            )
          )}
        </div>
      </div>
      <div className="blog-sidebar-single-wized with-title">
        <h4 className="title">Instagram Posts</h4>
        <div className="instagram-post-main-wrapper">
          {[4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
            <a href="#" key={n}>
              <div className="single-instagram-post">
                <img src={`/assets/images/blog/thumb/0${n}.jpg`} alt="post" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="blog-sidebar-single-wized with-add bg_image">
        <div className="add-are-content">
          <span className="pre">Weekend Discount</span>
          <h5 className="title">
            Discover Real organic <br />
            <span>Flavors Vegetable</span>
          </h5>
          <a href="#" className="shop-now-goshop-btn">
            <span className="text">Shop Now</span>
            <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus" /></div>
            <div className="plus-icon"><i className="fa-sharp fa-regular fa-plus" /></div>
          </a>
        </div>
      </div>
    </div>
  );
}
