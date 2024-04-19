"use client"
import {useEffect} from "react";
import Link from "next/link";

const Servicescard = () => {
  return (
    <section className="amazing_box">
      <div className="container">
        <p className="round_title">
          <span className="green_round"></span>our services
        </p>
        <h2 className="box_title wow animate__fadeInDownBig">
          Services specifically designed to meet your business needs
        </h2>
        <div className="boxis_main">
          <div className="beautiful_design ux_design_1 wow animate__fadeInDown">
            <i className="m_design"></i>
            <h3>UX & Product Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#" className="btn_started_box">
              Get Started
              <i className="m_right_arrow"></i>
            </Link>
          </div>

          <div className="beautiful_design ux_design_2 wow animate__fadeInUp">
            <i className="m_coded"></i>
            <h3>Performance Optimization</h3>
            <p>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#" className="btn_started_box">
              Get Started
              <i className="m_right_arrow"></i>
            </Link>
          </div>

          <div className="beautiful_design ux_design_3 wow animate__fadeInRight">
            <i className="m_amazing"></i>
            <h3>UX & Products Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#" className="btn_started_box">
              Get Started
              <i className="m_right_arrow"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicescard;
