import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
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
    </footer>
  );
};

export default Footer;
