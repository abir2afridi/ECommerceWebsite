"use client"
import React from 'react';
import Link from "next/link";
function NavItem() {
    return (
        <div>
            <nav>
                <ul className="parent-nav">
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            Home
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/">
                                    Home One
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-two">
                                    Home Two
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-three">
                                    Home Three
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-four">
                                    Home Four
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-five">
                                    Home Five
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            Vendors
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/vendor-list">
                                    Vendor List
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/vendor-grid">
                                    Vendor Grid
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/vendor-details">
                                    Vendor Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            Pages
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/store">
                                    Store
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/invoice">
                                    Invoice
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/register">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/cookies-policy">
                                    Cookies Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/terms-condition">
                                    Terms &amp; Condition
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            Blog
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="sub-b"
                                    href="/blog-list-left-sidebar"
                                >
                                    Blog List Left Sidebar
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="sub-b"
                                    href="/blog-list-right-sidebar"
                                >

                                    Blog List Right Sidebar
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/blog/details-profitable-business-makes-your-profit">
                                    Blog Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent">
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavItem;