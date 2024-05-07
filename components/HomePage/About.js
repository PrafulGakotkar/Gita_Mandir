import React from 'react';
import Image from 'next/image';

import img1 from '../../assets/img/about-group1/krishna1.jpg'
import img2 from '../../assets/img/about-group1/krishna3.jpg'
import img3 from '../../assets/img/about-group1/krishna2.jpg'

const AboutSection = () => {
  return (
    <section className="section">
      <div className=" container">
        <div className="row align-items-center "  >
          <div className="col-lg-6 mb-lg-30">
            <div className="img-group">
              <div className="img-group-inner">
                <Image src={img1} alt="about" />
                <span></span>
                <span></span>
              </div>
              <Image src={img2} height={250} width={218} alt="about" />
              <Image src={img3} height={250} width={218} alt="about" />
              {/* <Image src="assets/img/about-group1/2.jpg" alt="about" /> */}
              {/* <Image src="assets/img/about-group1/3.jpg" alt="about" /> */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start">
                {/* <p className="subtitle">EDUCATION FOR ALL RURAL CHILDREN</p> */}
                <h4 className="title">A once in a generation opportunity to be
part of Lord Gauranga’s army.</h4>
              </div>
              <ul className="sigma_list list-2 mb-0">
                <li>Peace of Mind</li>
                <li>Set For Pastor</li>
                <li>100% Satisfaction</li>
                <li>Trusted Company</li>
              </ul>
              <p className="blockquote bg-transparent"> Help us to acquire Lord Krishna’s new
home in Frisco and utilize the opportunity
to personally contribute towards
Mahaprabhu’s prophecy.
</p>
              <a href="about-us.html" className="sigma_btn-custom light">Learn More <i className="far fa-arrow-right"></i> </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
