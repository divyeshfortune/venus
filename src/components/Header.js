"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  // Function to toggle submenu
  const toggleSubmenu = (event) => {
    const submenu = event.currentTarget.querySelector(".subnav");
    submenu.classList.toggle("subnav-open");
  };  

  return (
    <header className={`header-scn ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <div className="hdr-inner">
          <a href="/" className="logo">
            <img src="/icon/logo.svg" alt="logo" />
          </a>
          <nav className={`menu ${isMenuOpen ? "show" : ""}`}>
            <ul>
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Services</Link>
              </li>
              <li>
                <Link href="#">Portfolio</Link>
              </li>
              <li>
                <Link href="#">Testimonials</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </nav>
          <div className="hdr-right">
            <a href="#" className="btn">Contact Us</a>
            <span className="mobile-toggle" onClick={toggleMenu}>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;