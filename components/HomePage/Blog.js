import React from 'react'
import Image from 'next/image'  

import icon from '../../assets/img/icon.png'
import img from '../../assets/img/blog/1.png'
import img1 from '../../assets/img/blog/2.png'
import img2 from '../../assets/img/blog/3.png'

function Blog() {
  return (
    <>
    {/* Blog Start */}
    <div className="section section-padding">
      <div className="container">
        <div className="section-title text-center">
        <Image className='icon-img3' src={icon} width={20} alt='icon'/> 
          <p className="subtitle">Blog</p>
          <h4 className="title">News Feed</h4>
        </div>
        <div className="row">
          {/* Article Start */}
          <div className="col-lg-4 col-md-6">
            <article className="sigma_post">
              <div className="sigma_post-thumb">
                <a href="#">
                  {/* <img src="assets/img/blog/2.jpg" alt="post" /> */}
                  <Image src={img} alt='krishna' />
                </a>
              </div>
              <div className="sigma_post-body">
                <div className="sigma_post-meta">
                    <Image className='icon-img5' src={icon} width={20} alt='icon'/> 
                  <div className="me-3" style={{marginLeft:5}}>
                    {/* <i className="fas fa-om" /> */}
                    <a href="#" className="sigma_post-category">
                      Temple
                    </a>
                    ,
                    <a href="#" className="sigma_post-category">
                      Love
                    </a>
                  </div>
                  <a href="#" className="sigma_post-date">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2022
                  </a>
                </div>
                <h5>
                  {" "}
                  <a href="#">
                    Temple companies are being so transparent with their work
                  </a>{" "}
                </h5>
                <div className="sigma_post-single-author">
                  {/* <img src="assets/img/people/1.jpg" alt="author" /> */}
                  <div className="sigma_post-single-author-content">
                    By <p>Miha Boukor</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* Article End */}
          {/* Article Start */}
          <div className="col-lg-4 col-md-6">
            <article className="sigma_post">
              <div className="sigma_post-thumb">
                <a href="#">
                  {/* <img src="assets/img/blog/1.jpg" alt="post" /> */}
                  <Image src={img1} alt='krishna' />
                </a>
              </div>
              <div className="sigma_post-body">
                <div className="sigma_post-meta">
                  <div className="me-3">
                    <i className="fas fa-om" />
                    <a href="#" className="sigma_post-category">
                      Temple
                    </a>
                    ,
                    <a href="#" className="sigma_post-category">
                      Love
                    </a>
                  </div>
                  <a href="#" className="sigma_post-date">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2022
                  </a>
                </div>
                <h5>
                  {" "}
                  <a href="#">
                    How to abide by Puja rules without any risks
                  </a>{" "}
                </h5>
                <div className="sigma_post-single-author">
                  {/* <img src="assets/img/people/2.jpg" alt="author" /> */}
                  <div className="sigma_post-single-author-content">
                    By <p>Aime Bill</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* Article End */}
          {/* Article Start */}
          <div className="col-lg-4 col-md-6">
            <article className="sigma_post">
              <div className="sigma_post-thumb">
                <a href="#">
                  {/* <img src="assets/img/blog/3.jpg" alt="post" /> */}
                  <Image src={img2} alt='krishna' />
                </a>
              </div>
              <div className="sigma_post-body">
                <div className="sigma_post-meta">
                  <div className="me-3">
                    <i className="fas fa-om" />
                    <a href="#" className="sigma_post-category">
                      Temple
                    </a>
                    ,
                    <a href="#" className="sigma_post-category">
                      Love
                    </a>
                  </div>
                  <a href="#" className="sigma_post-date">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2022
                  </a>
                </div>
                <h5>
                  {" "}
                  <a href="#">
                    Education for all rural children are necessary.
                  </a>{" "}
                </h5>
                <div className="sigma_post-single-author">
                  {/* <img src="assets/img/people/1.jpg" alt="author" /> */}
                  <div className="sigma_post-single-author-content">
                    By <p>Yesh Chopra</p>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* Article End */}
        </div>
      </div>
      <div className="spacer spacer-bottom spacer-lg light-bg pattern-triangles" />
    </div>
    {/* Blog End */}
  </>
  
  )
}

export default Blog