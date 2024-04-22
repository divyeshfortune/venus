import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <section className="customer wow animate__bounceInUp" id='testimonials'>
        <div className="container">
          <div className="happy_customer">
            <Image
              src="/images/vector-smart.png"
              alt="logo"
              width={0}
              height={0}
              layout="responsive"
              quality={100}
              sizes="100vh"
              className="w_f"
            />
            <p className="custmor_descrip">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip exea commodo consequat.
            </p>
            <div className="customer_name">
              <strong>Jonathan Diesel</strong>
              <p>Happy Customer, Apple inc</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonial