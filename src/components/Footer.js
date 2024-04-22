"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll event listener
  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Effect for adding and removing scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Click event handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="container">
        <div className="footer_main">
          <Link href="/" className="ftr_logo">
            <Image
              src="/icon/logo.svg"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
          </Link>
          <div className="social">
            <Link href="#">
              <i className="m_twitter"></i>
            </Link>
            <Link href="#">
              <i className="m_facebook"></i>
            </Link>
            <Link href="#">
              <i className="m_linkdin"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className={`go-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <p className="go-top-text">Back To Top</p>
      </div>
    </footer>
  );
};

export default Footer;
