import React from "react";
import "../styles/header.css";
import "../app/globals.css";
import "../styles/blog-details.css";
import Header from "@/components/Header";
import Image from "next/image";

const Blogdetails = () => {
  return (
    <>
      <Header />
      <section className="blog_details">
        <div className="container">
          <div className="blog_main">
            <div className="trends_user_main">
              <div className="trend_heading">
                <div className="author_lable">
                  <span className="blog_hashtage">Trends</span>
                  <span className="text-[#95AEC6] text-base font-normal border-r border-solid border-[#95AEC6] px-3">
                    18 Hours ago
                  </span>
                  <span className="text-[#95AEC6] text-base font-normal px-3">
                    13 Comments
                  </span>
                </div>
                <h1>Augue OLMO, luctus neque purus and ipsum neque libero</h1>
              </div>
              <div className="author_info">
                <Image
                  src="/images/4bc07465155a0f49705c0972a9e05e42.png"
                  alt="Author"
                  width={0}
                  height={0}
                  layout="responsive"
                  quality={100}
                  sizes="100vh"
                  className="rounded-full max-w-[5.1875rem] max-h-[5.1875rem] w-full object-cover"
                />
                <div>
                  <span className="text-22 font-medium text-primary">
                    Silicaman
                  </span>
                  <p className="text-xl font-normal text-[#547593]">Author</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/blog.jpg"
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="rounded-[1.875rem] w-[73.125rem] !h-[47.8125rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogdetails;
