"use client";
import { useEffect } from "react";
import BlazeSlider from "blaze-slider";
import "blaze-slider/dist/blaze.css";
import Image from "next/image";

const Slider = () => {
  useEffect(() => {
    const el = document.querySelector(".blaze-slider");
    if (el) {
      new BlazeSlider(el, {
        all: {
          enableAutoplay: true,
          autoplayInterval: 2000,
          transitionDuration: 300,
          slidesToShow: 2,
        },
        "(max-width: 900px)": {
          slidesToShow: 2,
        },
        "(max-width: 500px)": {
          slidesToShow: 1,
        },
      });
    }
  }, []);

  return (
    <div class="blaze-slider portfolio_slider">
      <div class="blaze-container">
        <div class="blaze-track-container">
          <div class="blaze-track">
            <div className="portfolio_slide">
              <Image
                src="/images/slide_1.png"
                alt="Slider"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
            </div>
            <div className="portfolio_slide">
              <Image
                src="/images/slide_1.png"
                alt="Slider"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
            </div>
            <div className="portfolio_slide">
              <Image
                src="/images/slide_1.png"
                alt="Slider"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
            </div>
          </div>
        </div>
        <div class="blaze-pagination"></div>
      </div>
    </div>
  );
};

export default Slider;
