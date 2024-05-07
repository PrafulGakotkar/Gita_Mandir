import React from 'react'
import subheader from '../../assets/img/subheader.jpg'

function Contact() {
  return (
    <>
  {/* partial:partia/__subheader.html */}
  <div
    className="sigma_subheader dark-overlay dark-overlay-2"
    style={{ backgroundImage: `url(${subheader.src})` }}
  >
    <div className="container">
      <div className="sigma_subheader-inner" style={{ padding: '230px 0 150px' }}>
        <div className="sigma_subheader-text">
          <h1>Contact Us</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* partial */}
  {/* Map Start */}
  <div className="sigma_map">
  <iframe 
  
    src="https://maps.google.com/maps?q=FM+423+%26+Lone+Star+Ranch+Parkway+Intersection&t=&z=13&ie=UTF8&iwloc=&output=embed" 
    allowFullScreen=""
    />
    {/* <iframe 
      // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914406081493!2d2.292292615201654!3d48.85837360866272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1571115084828!5m2!1sen!2sin"
      allowFullScreen=""
    /> */}
  </div>
  {/* Map End */}
  {/* Contact form Start */}
  <div className="section mt-negative pt-0">
    <div className="container">
      <form
        className="sigma_box box-lg m-0 mf_form_validate ajax_submit"
        action="sendmail.php"
        method="post"
        encType="multipart/form-data"
      >
        <div className="row">
          <div className="col-lg-4">
            <div className="form-group">
              <i className="far fa-user" />
              <input
                type="text"
                placeholder="Full Name"
                className="form-control dark"
                name="name"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <i className="far fa-envelope" />
              <input
                type="email"
                placeholder="Email Address"
                className="form-control dark"
                name="email"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <i className="far fa-pencil" />
              <input
                type="text"
                placeholder="Subject"
                className="form-control dark"
                name="Subesubject"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Enter Message"
            cols={45}
            rows={5}
            className="form-control dark"
            defaultValue={""}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="sigma_btn-custom" name="button">
            Submit Now
          </button>
          <div className="server_response w-100"></div>
        </div>
      </form>
    </div>
  </div>
  {/* Contact form End */}
  {/* Icons Start */}
  <div className="section section-padding pt-0">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="sigma_icon-block text-center light icon-block-7">
            <i className="flaticon-email" />
            <div className="sigma_icon-block-content">
              <span>
                Send Email <i className="far fa-arrow-right" />{" "}
              </span>
              <h5> Email Address</h5>
              <p>gitamandirfrisco@gmail.com</p>
              {/* <p>info@support.com</p> */}
            </div>
            <div className="icon-wrapper">
              <i className="flaticon-email" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sigma_icon-block text-center light icon-block-7">
            <i className="flaticon-call" />
            <div className="sigma_icon-block-content">
              <span>
                Call Us Now <i className="far fa-arrow-right" />{" "}
              </span>
              <h5> Phone Number </h5>
              <p>+1 214-284-6138 </p>
              {/* <p> +489 472 928 </p> */}
            </div>
            <div className="icon-wrapper">
              <i className="flaticon-call" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sigma_icon-block text-center light icon-block-7">
            <i className="flaticon-location" />
            <div className="sigma_icon-block-content">
              <span>
                Find Us Here <i className="far fa-arrow-right" />{" "}
              </span>
              <h5> Location </h5>
              <p>FM 423 & Lone Star Ranch Parkway
Intersection</p>
              {/* <p>New York, US</p> */}
            </div>
            <div className="icon-wrapper">
              <i className="flaticon-location" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Icons End */}
</>

  )
}

export default Contact