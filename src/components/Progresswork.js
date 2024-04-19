"use client"
import { useEffect } from "react";
import Image from "next/image";

const Progresswork = () => {

    useEffect(() => {
        progress_bar();
      }, []); // Run only once when component mounts
    
      function progress_bar() {
        const speed = 30;
        const items = document.querySelectorAll('.progress_bar_item');
    
        items.forEach(item => {
          const progress = item.querySelector('.progress');
          const itemValue = parseInt(progress.dataset.progress);
          let i = 0;
          const value = item.querySelector('.item_value');
    
          const count = setInterval(() => {
            if (i <= itemValue) {
              progress.style.width = i + '%';
              value.innerHTML = i + '%';
            } else {
              clearInterval(count);
            }
            i++;
          }, speed);
        });
      }

  return (
    <section className="landing_section">
      <div className="container">
        <div className="landing_main">
          <div className="landing_image wow animate__slideInLeft">
            <Image
              src="/images/progress-work.png"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
              className=""
            />
          </div>
          <div className="landing_content wow animate__slideInRight">
            <p className="round_title">
              <span className="green_round"></span>build everything
            </p>
            <h2>Build amazing websites and landing pages with ease</h2>
            <p className="landing_descript">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
            <div className="ce_ixelgen_progress_bar block">
              <div className="progress_bar">
                <div className="progress_bar_item grid-x">
                  <div className="item_label cell auto">UX Research and Testing</div>
                  <div className="item_value cell shrink">0%</div>
                  <div className="item_bar cell">
                    <div className="progress" data-progress="95"></div>
                  </div>
                </div>
                <div className="progress_bar_item grid-x">
                  <div className="item_label cell auto">Product Management</div>
                  <div className="item_value cell shrink">0%</div>
                  <div className="item_bar cell">
                    <div className="progress" data-progress="84"></div>
                  </div>
                </div>
                <div className="progress_bar_item grid-x">
                  <div className="item_label cell auto">UI & Visual Design</div>
                  <div className="item_value cell shrink">0%</div>
                  <div className="item_bar cell">
                    <div className="progress" data-progress="90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progresswork;
