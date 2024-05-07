import React from 'react'
import Image from 'next/image'

import img from '../../assets/img/donation/land.jpeg'
import img1 from '../../assets/img/donation/Store Front.jpg'
import img2 from '../../assets/img/donation/construction.jpeg'

import icon from '../../assets/img/icon.png'

function DonateUs() {
  return (
    <>
      {/* Donation Start */}
      <div className="section section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <Image className="icon-img" src={icon} width={20} alt="icon" />
            <p className="subtitle">
              <i className="fa-duotone fa-flute"></i> Make a Donation</p>
            <h4 className="title">Donate Us To Help</h4>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="sigma_service style-2">
                <div className="sigma_service-thumb">
                  <Image src={img} height={'165px'} alt="img" />
                  {/* <img src="assets/img/donation/5.jpg" alt="img" /> */}
                </div>
                <div className="sigma_service-body">
                  <h5>
                    <a href="donation.html">Land Acquisition</a>
                  </h5>
                  <p>
                    Securing the land for the Gita temple project, we aim to establish a sacred space dedicated to spiritual growth and community harmony, fostering a sanctuary for devotion and enlightenment.{" "}
                  </p>
                  <div className="sigma_service-progress">
                    <div className="progress-content">
                      {/* <p>Raised: $52,384</p> */}
                      <p>Goal: $25,00,000</p>
                    </div>
                    {/* <div className="sigma_progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={84}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div> */}
                  </div>
                  <a href="https://www.paypal.com/ncp/payment/EBESV5GG5C6YY" className="sigma_btn-custom">
                    Donate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sigma_service style-2">
                <div className="sigma_service-thumb">
                  {/* <img src="assets/img/donation/6.jpg" alt="img" /> */}
                  <Image src={img1} alt="img" />
                </div>
                <div className="sigma_service-body">
                  <h5>
                    <a href="donation.html">Temple In Store Front</a>
                  </h5>
                  <p>
                    &quot;Acquiring land for the Gita Temple in our storefront endeavor, envisioning a sanctum where spirituality meets accessibility, inviting all to embrace the wisdom of the Bhagavad Gita.&quot;{" "}
                  </p>
                  <div className="sigma_service-progress">
                    <div className="progress-content">
                      {/* <p>Raised: $49,444</p> */}
                      <p>Goal: $5,00,000</p>
                    </div>
                    {/* <div className="sigma_progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div> */}
                  </div>
                  <a href="https://www.paypal.com/ncp/payment/EBESV5GG5C6YY" className="sigma_btn-custom">
                    Donate
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="sigma_service style-2">
                <div className="sigma_service-thumb">
                  {/* <img src="assets/img/donation/7.jpg" alt="img" /> */}
                  <Image src={img2} alt="img" />
                </div>
                <div className="sigma_service-body">
                  <h5>
                    <a href="donation.html">Temple Construction</a>
                  </h5>
                  <p>
                    &quot;Embarking on the acquisition of land for the Gita Temple construction, laying the foundation for a sacred abode where devotees can gather to seek solace and spiritual enlightenment.&quot;{" "}
                  </p>
                  <div className="sigma_service-progress">
                    <div className="progress-content">
                      {/* <p>Raised: $78,334</p> */}
                      <p>Goal: TBD</p>
                      {/* <p>Goal: $96,400</p> */}
                    </div>
                    {/* <div className="sigma_progress">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={94}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div> */}
                  </div>
                  <a href="https://www.paypal.com/ncp/payment/EBESV5GG5C6YY" className="sigma_btn-custom">
                    Donate
                  </a>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Donation End */}
    </>

  )
}

export default DonateUs