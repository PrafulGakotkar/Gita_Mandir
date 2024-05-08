import React from 'react'
import Image from 'next/image'

import icon from '../../assets/img/icon.png'
import img from '../../assets/img/volunteers/1.png'

function Volunteers() {
  return (
<>
  {/* volunteers Start */}
  <section className="section section-padding light-bg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-lg-30">
          <div className="section-title mb-0 text-start">
          <Image  className='icon-img1' src={icon} width={20} alt='icon'/> 
            <p className="subtitle" style={{marginLeft:30}}>volunteers</p>
            <h4 className="title">Our Volunteers Achievments</h4>
          </div>
          <p className="blockquote bg-transparent">
            {" "}
            We are a Hindu that belives in Lord Rama and Vishnu Deva the
            followers and We are a Hindu that belives in Lord Rama and Vishnu
            Deva.{" "}
          </p>
          <div className="basic-dot-slider light-dots">
            <div className="slide-item">
              <p className="mb-0">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; generators on the
                Internet tend We are a Hindu that believe in Ram
              </p>
            </div>
            <div className="slide-item">
              <p className="mb-0">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; generators on the
                Internet tend We are a Hindu that believe in Ram
              </p>
            </div>
            <div className="slide-item">
              <p className="mb-0">
                You need to be sure there isn’t anything embarrassing hidden in
                the middle of text. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae; generators on the
                Internet tend We are a Hindu that believe in Ram
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="me-lg-30">

          <div className="sigma_volunteers volunteers-5">
                  <div className="sigma_volunteers-thumb">
                    {/* <img src="assets/img/volunteers/1.jpg" alt="volunteers" /> */}
                    <Image src={img} alt='volunteers' />

                     
                  </div>
                  
                </div>


            {/* <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="sigma_volunteers volunteers-5">
                  <div className="sigma_volunteers-thumb">
                    <img src="assets/img/volunteers/1.jpg" alt="volunteers" />
                     <ul className="sigma_sm">
                      <li>
                        {" "}
                        <a href="#" className="trigger-volunteers-socials">
                          {" "}
                          <i className="fal fa-plus" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fab fa-facebook-f" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fab fa-twitter" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fab fa-instagram" />{" "}
                        </a>{" "}
                      </li>
                    </ul> 
                  </div>
                  <div className="sigma_volunteers-body">
                    <div className="sigma_volunteers-info">
                      <p>Temple Memember</p>
                      <h5>
                        <a href="volunteer-detail.html">Yesh Chopra</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="sigma_volunteers volunteers-5">
                  <div className="sigma_volunteers-thumb">
                    <img src="assets/img/volunteers/2.jpg" alt="volunteers" />
                    <ul className="sigma_sm">
                      <li>
                        {" "}
                        <a href="#" className="trigger-volunteers-socials">
                          {" "}
                          <i className="fal fa-plus" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fab fa-facebook-f" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fab fa-twitter" />{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          {" "}
                          <i className="fab fa-instagram" />{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="sigma_volunteers-body">
                    <div className="sigma_volunteers-info">
                      <p>Temple Memember</p>
                      <h5>
                        <a href="volunteer-detail.html">Mukesh Singh</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* volunteers End */}
</>

  )
}

export default Volunteers