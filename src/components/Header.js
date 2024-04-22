"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const openDropDown =(e)=>{
    const classList = e.target.classList
    classList.contains("subnav-open")
    ? classList.remove("subnav-open")
    :classList.add("subnav-open");
  }

  
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Check if the user has scrolled past a certain point
      if (window.scrollY > 100) {
        setIsSticky(true); // If scrolled, set header to sticky
      } else {
        setIsSticky(false); // If not scrolled, remove sticky
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Mobile Menu Show Hide
    const navigation = () => {
      document.querySelector('html').classList.add('menu-open');
    };

    const removeNav = () => {
      document.querySelector('html').classList.remove('menu-open');
    };

    document.querySelector('.mobile-toggle').addEventListener('click', navigation);
    document.querySelector('.navclose').addEventListener('click', removeNav);

    // Dropdown Menu
    let navitems = document.querySelectorAll(".navigation ul>li");
    // console.log(navitems);
    

    // navitems.forEach((t) => {
    //   t.addEventListener("click", (e) => {
    //     navitems.forEach((e) => {
    //       console.log("clicked",e.classList);
    //       e !== t || e.classList.contains("subnav-open")
    //         ? e.classList.remove("subnav-open")
    //         :
    //          e.classList.add("subnav-open");
    //     });
    //   });
    // });

    return () => {
      // Clean up event listeners when component unmounts
      document.querySelector('.mobile-toggle').removeEventListener('click', navigation);
      document.querySelector('.navclose').removeEventListener('click', removeNav);
      navitems.forEach((t) => {
        t.removeEventListener('click', () => {});
      });
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount


  return (
    <header className={`header-scn ${isSticky ? 'stickey' : ''}`}>
      <span className="navovelay"></span>
      <div className="hdr-logonav-scn">
        <div className="container">
          <div className="header-inner">
            <nav className="navigation">
              <div className="navigation-inner">
                <span className="navclose"><i></i><i></i></span>
                <ul className={isSticky ? 'sticky-menu' : ''}>
                  <li className={activeMenuItem === 'home' ? 'active' : ''}><Link href="#home" onClick={() => handleMenuItemClick('home')}>Home</Link></li>
                  <li className={activeMenuItem === 'about' ? 'active' : ''}>
                    <Link href="#about" onClick={() => handleMenuItemClick('about')}>About</Link>
                  </li>
                  <li className={activeMenuItem === 'services' ? 'active' : ''}>
                    <Link href="#services" onClick={() => handleMenuItemClick('services')}>Services</Link>
                  </li>
                  <li className={activeMenuItem === 'portfolio' ? 'active' : ''}>
                    <Link href="#portfolio" onClick={() => handleMenuItemClick('portfolio')}>Portfolio</Link>
                  </li>
                  <li className={activeMenuItem === 'testimonials' ? 'active' : ''}>
                    <Link href="#testimonials" onClick={() => handleMenuItemClick('testimonials')}>Testimonials</Link>
                  </li>
                  <li className={activeMenuItem === 'blog' ? 'active' : ''}><Link href="#blog" onClick={() => handleMenuItemClick('blog')}>Blog</Link></li>
                </ul>
              </div>
            </nav>
            <div className="logo">
              {/* Change logo source based on isSticky state */}
              <Link href="#" className="logo">
                <Image
                  src={isSticky ? '/icon/logo-white.svg' : '/icon/logo.svg'}
                  alt="logo"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                />
              </Link>
            </div>
            <div className={`hdricons-part ${isSticky ? 'sticky-buttons' : ''}`}>
              <Link href="#" className={`btn ${isSticky ? 'btn-sticky' : ''}`}>
                Contact Us
              </Link>
              <span
                id="mobiletoggle"
                className={`mobile-toggle ${isSticky ? 'sticky-toggle' : ''}`}
              >
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;