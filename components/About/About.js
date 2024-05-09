import React from 'react'
import Blog from '../HomePage/Blog'

import subheader from '../../assets/img/subheader1.jpeg'
import img from '../../assets/img/service/details/2.png'
import img1 from '../../assets/img/service/details/3.png'
import Image from 'next/image'
import icon from '../../assets/img/icon.png'

function About() {
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
          <h1>About Us</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* partial */}
  {/* About Start */}
  <section className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 d-none d-lg-block">
          <div className="sigma_img-box">
            <Image src={img} alt='krishna' />
            {/* <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/service/details/5.jpg" alt="service" />
                <img
                  className="ms-0"
                  src="assets/img/service/details/6.jpg"
                  alt="service"
                />
              </div>
              <div className="col-lg-6 mt-0 mt-lg-5">
                <img src="assets/img/service/details/7.jpg" alt="service" />
                <img
                  className="ms-0"
                  src="assets/img/service/details/8.jpg"
                  alt="service"
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="me-lg-30">
            <div className="section-title mb-0 text-start">
            {/* <Image  className='icon-img4' src={icon} width={20} alt='icon'/>  */}
              <p className="subtitle">About Gita Mandir</p>
              <h4 className="title">Embracing Eternal Wisdom</h4>
            </div>
            <p className="blockquote bg-transparent">
              {" "}
              Nestled in Frisco, Gita Mandir is a sacred haven where devotees unite to honor the timeless teachings of the Bhagavad Gita. Join us on a journey of spiritual enlightenment and communal harmony.{" "}
            </p>
            <div className="sigma_icon-block icon-block-3">
              <div className="icon-wrapper">
                <img src="assets/img/textures/icons/1.png" alt="" />
              </div>
              <div className="sigma_icon-block-content">
                <h5> Discover Divine Serenity at Gita Mandir </h5>
                <p>
                Step into a realm of tranquility and devotion at Gita Mandir. Located in the heart of Frisco, our temple welcomes seekers of all backgrounds to explore the profound wisdom of the Bhagavad Gita and find solace in divine grace.
                </p>
              </div>
            </div>
            <div className="sigma_icon-block icon-block-3">
              <div className="icon-wrapper">
                <img src="assets/img/textures/icons/2.png" alt="" />
              </div>
              <div className="sigma_icon-block-content">
                <h5> Gita Mandir: Where Faith Finds Its Home </h5>
                <p>
                At Gita Mandir, faith blossoms into a vibrant tapestry of devotion and service. Join our community in celebrating the eternal truths of the Bhagavad Gita, nurturing spiritual growth, and spreading love and compassion to all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* About End */}
  {/* History Start */}
  {/* <div className="section light-bg">
    <div className="container">
      <div className="sigma_timeline">
        <div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
          <div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
            <h4>Some Important Life Lessons From Bhagwat Gita</h4>
            <p>
              Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
              Vishnu, Krishna etc. Proin eget tortor industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type, People ask questions related to Hinduism. specimen book.{" "}
            </p>
          </div>
          <div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
            <i className="far fa-circle" />
          </div>
          <div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
            <span>2019</span>
            <br />
            <span className="sigma_timeline-month">JUN 1</span>
          </div>
        </div>
        <div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
          <div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
            <h4>People ask questions related to Hinduism</h4>
            <p>
              People ask questions related to Hinduism. Temple is a place where
              Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
              eget tortor industry's standard dummy text ever since the 1500s,
              when an unknown
            </p>
          </div>
          <div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
            <i className="far fa-circle" />
          </div>
          <div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
            <span>2020</span>
            <br />
            <span className="sigma_timeline-month">JUN 1</span>
          </div>
        </div>
        <div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
          <div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
            <h4>Some Important Life Lessons From Bhagwat Gita</h4>
            <p>
              Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
              Vishnu, Krishna etc. Proin eget tortor industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type, People ask questions related to Hinduism. specimen book.{" "}
            </p>
          </div>
          <div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
            <i className="far fa-circle" />
          </div>
          <div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
            <span>2022</span>
            <br />
            <span className="sigma_timeline-month">JUN 1</span>
          </div>
        </div>
        <div className="row g-0 justify-content-end justify-content-md-around align-items-start sigma_timeline-nodes">
          <div className="col-12 col-md-5 order-3 order-md-1 sigma_timeline-content">
            <h4>People ask questions related to Hinduism</h4>
            <p>
              People ask questions related to Hinduism. Temple is a place where
              Hindu worship our Bhagwan Ram, Shiva, Vishnu, Krishna etc. Proin
              eget tortor industry's standard dummy text ever since the 1500s,
              when an unknown
            </p>
          </div>
          <div className="col-2 col-sm-1 px-md-3 order-2 sigma_timeline-image text-md-center">
            <i className="far fa-circle" />
          </div>
          <div className="col-12 col-md-5 order-1 order-md-3 pb-3 sigma_timeline-date">
            <span>2022</span>
            <br />
            <span className="sigma_timeline-month">JUN 1</span>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* History End */}
  {/* About Start */}
  <section className="section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="me-lg-30">
            <div className="section-title mb-0 text-start">
            {/* <Image  className='icon-img4' src={icon} width={20} alt='icon'/>  */}
              <p className="subtitle">Our Approach</p>
              <h4 className="title">
              Our Mission: Nurturing Hearts, Inspiring Minds
              </h4>
            </div>
            <p className="blockquote bg-transparent">
              {" "}
              Gita Mandir&apos;s mission is to foster a thriving community deeply rooted in the timeless teachings of the Bhagavad Gita. Through a myriad of spiritual, educational, and cultural programs, we strive to inspire individuals to embark on a journey of self-discovery, inner transformation, and service to humanity. Our aim is to cultivate an environment where seekers of all backgrounds can find guidance, support, and enrichment, ultimately contributing to the collective welfare and spiritual upliftment of society.{" "}
            </p>
            {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  {" "}
                  <i className="fas fa-om" /> Holi{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  {" "}
                  <i className="far fa-church" /> Temple
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  href="#contact"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  {" "}
                  <i className="far fa-user" /> Pandit
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p>
                  Our mission is to share the Good of Hinduism, Loving, Faith
                  and Serving. People ask questions related to Hinduism. Temple
                  is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
                  Krishna etc. Proin eget tortor industry's standard dummy text
                  ever
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p>
                  Our mission is to share the Good of Hinduism, Loving, Faith
                  and Serving. People ask questions related to Hinduism. Temple
                  is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
                  Krishna etc. Proin eget tortor industry's standard dummy text
                  ever
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <p>
                  Our mission is to share the Good of Hinduism, Loving, Faith
                  and Serving. People ask questions related to Hinduism. Temple
                  is a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
                  Krishna etc. Proin eget tortor industry's standard dummy text
                  ever
                </p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6">
          {/* <img src="assets/img/about.jpg" alt="about" /> */}
          <Image src={img1} alt='krishna' />
        </div>
      </div>
    </div>
  </section>
  {/* About End */}
  
 <Blog />
</>

  )
}

export default About