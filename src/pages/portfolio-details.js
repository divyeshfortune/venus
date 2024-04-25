import Header from "@/components/Header";
import React from "react";
import "../styles/header.css";
import "../app/globals.css";
import "../styles/portfolio-details.css";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

const portfoliodetails = () => {
  return (
    <>
    <main className="inner_page">
      <Header />
      <section className="portfolio_branding">
        <div className="container">
          <div className="branding_heading">
            <h2 className="pb-[1.1875rem]">Creative Branding</h2>
            <p>
              We are a dedicated team of passionate product managers, full stack
              developers, UX/UI designers, QA engineers and marketing.
            </p>
          </div>
          <Slider />
        </div>
      </section>

      <section className="details_services">
        <div className="container">
          <div className="services_content_main">
            <div className="product_content">
              <p className="product_details_title">
                We are a dedicated team of passionate product
                managers,developers, UX/UI designers, QA engineers experts
                helping businesses from new startups
              </p>
              <div className="product_info">
                <p>
                  Popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker.
                </p>
                <p>
                  Lorem Ipsum as their default model text, and a search for
                  lorem ipsum will uncover many web sites still in their
                  infancy. Various versions have evolved over.
                </p>
              </div>
            </div>
            <div className="service_sidebar">
              <span>Our services</span>
              <span>Brand Strategy</span>
              <span>Communications</span>
              <span>Visual Identity</span>
              <span>Brand Support</span>
              <span>Web Design</span>
            </div>
          </div>
        </div>
      </section>

      <Testimonial className="tesimonial_inner"/>
      <Portfolio/>
      <Footer/>
    </main>
    </>
  );
};

export default portfoliodetails;
