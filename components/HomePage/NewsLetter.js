import React from 'react'

import icon from '../../assets/img/icon.png'
import Image from 'next/image'

function NewsLetter() {
  return (
<>
  {/* CTA Start */}
  <div className="section pt-0">
    <div className="container">
      <div className="section-title text-center">
      <Image style={{marginLeft:140}} className='icon-img' src={icon} width={20} alt='icon'/> 
        <p className="subtitle">WAYS WE CAN HELP</p>
        <h4 className="title">Angels Ready To Help</h4>
      </div>
      <div className="row align-items-center position-relative">
        <div className="col-md-6">
          <div className="sigma_cta primary-bg">
            <img
              className="d-none d-lg-block"
              src="assets/img/cta/1.png"
              alt="cta"
            />
            <div className="sigma_cta-content">
              <span className="fw-600  text-white">
                Need Help, Call Our HOTLINE!
              </span>
              <h4 className="text-white">+1 214-284-6138</h4>
            </div>
          </div>
        </div>
        <span className="sigma_cta-sperator d-none d-lg-flex">or</span>
        <div className="col-md-6">
          <div className="sigma_cta primary-bg">
            <div className="sigma_cta-content">
              <form method="post">
                <label className="mb-0 text-white">Temple Newsletter</label>
                <div className="sigma_search-adv-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter email address"
                    name="search"
                    defaultValue=""
                  />
                  <button type="submit" name="button">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            <img
              className="d-none d-lg-block"
              src="assets/img/cta/2.png"
              alt="cta"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* CTA End */}
</>

  )
}

export default NewsLetter