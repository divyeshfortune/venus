import React from 'react'
import Image from 'next/image'

const Contactform = () => {
  return (
    <section className="project_form">
    <div className="container">
      <div className="project_form_main">
        <div className="help_form">
            <p className="round_title">
              <span className="green_round"></span>build everything
            </p>
          <h2>
            Let’s discuss about your project and take it the next level.
          </h2>
          <div className="form_field_main">
            <div className="form_field_help">
              <label htmlFor="phone">Phone</label>
              <input
                className="input_help"
                type="text"
                id="phone"
                name="phone"
                placeholder="+323-25-8964"
              />
            </div>
            <div className="form_field_help">
              <label htmlFor="email">Email</label>
              <input
                className="input_help"
                type="text"
                id="email"
                name="email"
                placeholder="me@landingpro.com"
              />
            </div>
            <div className="form_field_help w-full">
              <label htmlFor="location">Location</label>
              <input
                className="input_help"
                type="text"
                id="location"
                name="location"
                placeholder="Mark Avenue, Dalls Road, New York"
              />
            </div>
          </div>
          <div className="trustedby">
            <p className="text-white text-base pb-4">Trusted by</p>
            <div className="company_logo">
              <Image
                src="/images/google-pay.png"
                alt="Google-pay"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f google-pay"
              />
              <Image
                src="/images/play-juction.png"
                alt="play-juction"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f play-juction"
              />
              <Image
                src="/images/stripe.png"
                alt="stripe"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f stripe"
              />
              <Image
                src="/images/wise.png"
                alt="wise"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="w_f wise"
              />
            </div>
          </div>
        </div>
        <div className="form-fix wow animate__fadeInRightBig">
          <h2>Start the project</h2>
          <form className="form">
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'First name'"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Last name'"
              />
            </div>
            <div className="form-group fg-full-width">
              <input
                type="email"
                className="form-control"
                placeholder="youremail@website.com"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'youremail@website.com'"
              />
            </div>
            <div className="form-group fg-full-width">
              <input
                className="form-control"
                type="text"
                placeholder="Country"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Country'"
              />
            </div>
            <div className="form-group fg-full-width">
              <textarea
                className="form-control"
                placeholder="Let us know about your project"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Let us know about your project'"
              ></textarea>
            </div>
            <div className="comment-form-cookies-consent">
              <input
                id="wp-comment-cookies-consent"
                name="wp-comment-cookies-consent"
                type="checkbox"
                value="yes"
              />
              <div className='check-mark-from'>
                I have read and acknowledge the{" "}
                <p className="text-primary inline cursor-pointer">
                  Terms and Conditions{" "}
                </p>
              </div>
            </div>
            <div className="form-group fg-full-width">
              <button className="btn submit-btn" type="submit">
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contactform