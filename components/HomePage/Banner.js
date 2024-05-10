"use client"
import React from 'react';

import img from '../../assets/img/banner/3.jpg'
import img1 from '../../assets/img/banner/5.jpg'


const BannerSlider = () => {

  return (
    <>
      {/* Banner Start */}
      <div className="sigma_banner banner-3">
        <div className="sigma_banner-slider">
          {/* Banner Item Start */}
          <div
            className="light-bg sigma_banner-slider-inner bg-cover bg-center bg-norepeat"
            style={{ backgroundImage: `url(${img.src})` }}
          >
            <div className="sigma_banner-text">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1 className="title">pṛthivītīe āche yata nagarādi grāma
                      sarvatra pracāra haibe mora nāma</h1>
                    <p className="blockquote mb-0 bg-transparent">
                      {" "}
                      “In every town and village, the chanting of My
                      name will be heard.”
                      (Caitanya-bhāgavata, Antya 4.126){" "}
                    </p>
                    <div className="section-button d-flex align-items-center">
                      <a href="/donation" className="sigma_btn-custom">
                        Donate Now <i className="far fa-arrow-right" />{" "}
                        {/* Join Today <i className="far fa-arrow-right" />{" "} */}
                      </a>
                      {/* <a
                        href="services.html"
                        className="ms-3 sigma_btn-custom white"
                      >
                        View Services <i className="far fa-arrow-right" />{" "}
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Banner Item End */}
          {/* Banner Item Start */}
          {/* <div
              className="light-bg sigma_banner-slider-inner bg-cover bg-center bg-norepeat"
              style={{ backgroundImage: 'url("assets/img/banner/5.jpg")' }}
            >
              <div className="sigma_banner-text">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <h1 className="title">We are a Hindu that believe in Ram</h1>
                      <p className="blockquote mb-0 bg-transparent">
                        {" "}
                        We are a Hindu that belives in Lord Rama and Vishnu Deva the
                        followers and We are a Hindu that belives in Lord Rama and
                        Vishnu Deva. This is where you should start{" "}
                      </p>
                      <div className="section-button d-flex align-items-center">
                        <a href="contact-us.html" className="sigma_btn-custom">
                          Join Today <i className="far fa-arrow-right" />{" "}
                        </a>
                        <a
                          href="services.html"
                          className="ms-3 sigma_btn-custom white"
                        >
                          View Services <i className="far fa-arrow-right" />{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          {/* Banner Item End */}
        </div>
      </div>
      {/* Banner End */}
    </>

  );
};

export default BannerSlider;
