import React from 'react'

import icon from '../../assets/img/icon.png'
import Image from 'next/image'

function Help() {
  return (
    <>
    {/* holi Start */}
    <div className="section section-padding pattern-squares dark-bg-2">
      <div className="container">
        <div className="section-title text-start">
          {/* <p className="subtitle">service</p> */}
          <Image style={{marginLeft:5}} className='icon-img' src={icon} width={20} alt='icon'/> 
          <h4 className="title text-white">How We Can Help</h4>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <a href="/donation" className="sigma_service style-1 primary-bg">
              <div className="sigma_service-thumb">
                {/* <i className="text-white flaticon-temple" /> */}
                <i className="text-white flaticon-hindu-1" />
                {/* <i className="custom-primary flaticon-hindu-1" /> */}

              </div>
              <div className="sigma_service-body">
                <h5 className="text-white">About Gita</h5>
                <p className="text-white">
                Dive into the depths of ancient philosophy as we explore the Bhagavad Gita&apos;s rich tapestry of wisdom, guiding seekers towards spiritual enlightenment and inner peace.{" "}
                </p>
              </div>
              <span className="btn-link text-white">
                Learn More <i className="text-white far fa-arrow-right" />{" "}
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-negative-sm">
            <a
              href="/donation"
              className="sigma_service style-1 secondary-bg"
            >
              <div className="sigma_service-thumb text-white">
                <i className="text-white flaticon-pooja" />

              </div>
              <div className="sigma_service-body">
                <h5 className="text-white">Ideology Of Gita</h5>
                <p className="text-white">
                Rooted in the essence of duty and righteousness, the Bhagavad Gita&apos;s ideology elucidates the path to self-realization and harmonious living, inspiring a life of purpose and integrity.{" "}
                </p>
              </div>
              <span className="text-white btn-link">
                Learn More <i className="text-white far fa-arrow-right" />{" "}
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 mt-negative-sm">
            <a href="/donation" className="sigma_service style-1 bg-white">
              <div className="sigma_service-thumb">
                <i className="flaticon-temple" />
              </div>
              <div className="sigma_service-body">
                <h5>About Temple</h5>
                <p>
                Explore the sacred sanctuary where tradition meets devotion, embodying centuries of spiritual heritage and fostering community connection in reverence and worship.{" "}
                </p>
              </div>
              <span className="btn-link">
                Learn More <i className="far fa-arrow-right" />{" "}
              </span>
            </a>
          </div>
        </div>
        <div className="text-end">
          <a href="/donation" className="btn-link text-white">
            {" "}
            Get Started Now <i className="custom-primary far fa-arrow-right" />{" "}
          </a>
        </div>
      </div>
    </div>
    {/* holi End */}
  </>
  
  )
}

export default Help