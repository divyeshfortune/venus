"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) { // Adjust the value as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

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
              <i className="m_linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className={`dp_backto_top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      </div>
    </footer>
  );
};

export default Footer;