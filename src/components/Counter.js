"use client"
import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.querySelector('.counter');
      if (!animationTriggered && counterSection) {
        const offsetTop = counterSection.offsetTop - window.innerHeight;
        if (window.scrollY > offsetTop) {
          const counterValues = document.querySelectorAll('.counter-value');
          counterValues.forEach(counter => {
            const countTo = counter.getAttribute('data-target');
            const duration = 2000;
            let start = 0;
            const step = timestamp => {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              const increment = (countTo / duration) * progress;
              counter.innerText = Math.min(increment, countTo).toFixed(2);
              if (progress < duration) {
                requestAnimationFrame(step);
              } else {
                counter.innerText = countTo;
              }
            };
            requestAnimationFrame(step);
          });
          setAnimationTriggered(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationTriggered]);

  return (
    <section className="counter wow animate__fadeInDown">
      <div className="container">
        <div className="counter_main">
          <div className="count_review">
            <i className="m_icon google_plat"></i>
            <span className="counter-value" data-target="4.86">0</span>
            <p>Out of 5 stars from 3896 reviews on google platform</p>
          </div>
          <div className="count_review ">
            <i className="m_icon testimonials"></i>
            <span className="counter-value" data-target="364">0</span>
            <p>Client testimonials received in year 2021</p>
          </div>
          <div className="count_review">
            <i className="m_icon project_market"></i>
            <span className="counter-value" data-target="45">0</span>
            <p>Revenue generated through new projects & marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;