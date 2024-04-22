import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio_heading wow animate__zoomInLeft">
        <p className="round_title">
          <span className="green_round"></span>portfolio
        </p>
        <h2>Explore my portfolio showcase</h2>
        <p className="pb-[3.5625rem]">
          Dive into a curated collection of my finest work, showcasing expertise
          across various industries.
        </p>
      </div>
      <div className="showcase_main">
        <div className="showcase_box wow animate__fadeInLeft">
          <Image
            src="/images/cozycasa.png"
            alt="cozycasa"
            width={0}
            height={0}
            layout="responsive"
            quality={100}
            sizes="100vh"
          />
          <h4>Cozycasa</h4>
          <p>Designation</p>
        </div>
        <div className="showcase_box box_top_padding wow animate__fadeInDownBig">
          <Image
            src="/images/mars.png"
            alt="mars"
            width={0}
            height={0}
            layout="responsive"
            quality={100}
            sizes="100vh"
          />
          <h4>Mars</h4>
          <p>Designation</p>
        </div>
        <div className="showcase_box wow animate__backInUp">
          <Image
            src="/images/humans.png"
            alt="Everyday Humans"
            width={0}
            height={0}
            layout="responsive"
            quality={100}
            sizes="100vh"
          />
          <h4>Everyday Humans</h4>
          <p>Designation</p>
        </div>
        <div className="showcase_box box_top_padding wow animate__fadeInBottomRight">
          <Image
            src="/images/roket-squred.png"
            alt="Rocket Squared"
            width={0}
            height={0}
            layout="responsive"
            quality={100}
            sizes="100vh"
          />
          <h4>Rocket Squared</h4>
          <p>Designation</p>
        </div>
        <div className="showcase_box wow animate__fadeInRight">
          <Image
            src="/images/panda-logo.png"
            alt="Panda Logo"
            width={0}
            height={0}
            layout="responsive"
            quality={100}
            sizes="100vh"
          />
          <h4>Panda Logo</h4>
          <p>Designation</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
