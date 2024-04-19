"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import 'wow.js/css/libs/animate.css';
import 'animate.css/animate.min.css';

const Hero = () => {
  useEffect(() => {
    // Check if window is defined (i.e., if the code is running in a browser environment)
    if (typeof window !== "undefined") {
      const WOW = require("wow.js"); // Import wow.js dynamically
      const wow = new WOW({
        offset: 100,
        mobile: false,
      });
      wow.init();
    }
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero_main">
          <div className="hero_content wow animate__fadeInLeft">
            <p className="round_title">
              <span className="green_round"></span>build everything
            </p>
            <h1>Unveiling My Professional Odyssey: Portfolio Highlights</h1>
            <p className="hero_info">A brief introduction about myself and my professional objectives.</p>
            <Link href="#" className="btn get_started_btn">Get Started</Link>
            <div className="profile_help_dp">
              <div className="profile">
                <Image
                  src="/images/hero-profile-1.jpg"
                  alt="hero-image"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                />
                <Image
                  src="/images/hero-profile-2.jpg"
                  alt="hero-image"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                />  
                <Image
                  src="/images/hero-profile-3.jpg"
                  alt="hero-image"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                />    
              </div>
              <div className="need_help">
                <p>Need help? <Link href="#">Contact our experts</Link> Tell us about your project</p>
              </div>
            </div>
          </div>
          <div className="hero_image wow animate__fadeInRight">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
