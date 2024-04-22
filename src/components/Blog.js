import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="blog-list-scn" id="blog">
      <div className="container">
        <div className="blog_heading">
            <h2>Latest blog & news</h2>
            <Link href="#">View More
                <i className="m_blog_arrow"></i>
            </Link>
        </div>
        <div className="blog-list">
          <Link href="#" className="blog-item pricing wow animate__fadeInRightBig">
            <div className="blog-img">
              <Image
                src="/images/pricing.png"
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
              <span className="postdate">Pricing</span>
            </div>
            <div className="blog-cont">
                <h5>Business from the brink of ruin by optimizing our website....</h5>
                <span>16 Hours ago</span>
            </div>
          </Link>
          <Link href="#" className="blog-item meeting wow animate__fadeInUp">
            <div className="blog-img">
              <Image
                src="/images/meeting.png"
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
              <span className="postdate">Meeting</span>
            </div>
            <div className="blog-cont">
                <h5>The work is top-notch and I consistently outrank all my...</h5>
                <span>1 Daya ago</span>
            </div>
          </Link>
          <Link href="#" className="blog-item updates wow animate__fadeInTopLeft">
            <div className="blog-img">
              <Image
                src="/images/updates.png"
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
              />
              <span className="postdate">Updates</span>
            </div>
            <div className="blog-cont">
                <h5>Grow my business through organic search and marketing...</h5>
                <span>20-04-2022</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
