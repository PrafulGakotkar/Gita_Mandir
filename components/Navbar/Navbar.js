"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import logo from '../../assets/img/logo.png';
import MobileMenu from '../MobileMenu/MobileMenu';

function Navbar() {

  // const [menuActive, setMenuState] = useState(false);
  // const [cartActive, setcartState] = useState(false);

  // const SubmitHandler = (e) => {
  //   e.preventDefault()
  // }

  // const ClickHandler = () => {
  //   window.scrollTo(10, 0);
  // }
  const [menuActive, setMenuActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const ClickHandler = () => {
    // console.log("Toggle menu clicked");
    setMenuActive(!menuActive);
  };


  const toggleStyle = {
    display: isOpen ? 'block' : 'none'
  };

  const toggleClassName = () => {
    setIsOpen(!isOpen);
  };



  return (
    <>
      {/* Preloader Start */}
      {/* <div className="sigma_preloader">
          <img src="assets/img/om.svg" alt="preloader" />
        </div> */}
      {/* Preloader End */}
      {/* Search Start */}
      {/* <div className="sigma_search-form-wrapper">
          <div className="sigma_search-trigger close-btn">
            <span />
            <span />
          </div>
          <form className="sigma_search-form" method="post">
            <input type="text" placeholder="Search..." defaultValue="" />
            <button type="submit" className="sigma_search-btn">
              <i className="fal fa-search" />
            </button>
          </form>
        </div> */}
      {/* Search End */}
      {/* partial:partial/__quickview.html */}
      <div
        className="modal fade sigma_quick-view-modal"
        id="quickViewModal"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body">
              <div className="close-btn close-dark close" data-bs-dismiss="modal">
                <span />
                <span />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="sigma_product-single-thumb">
                    <img src="assets/img/products/new/1.jpg" alt="product" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sigma_product-single-content">
                    <h4 className="entry-title">
                      {" "}
                      Koobay 14&quot; Wooden Trousers Bottom Clips Hangers w Rose Gold.{" "}
                    </h4>
                    <div className="sigma_product-price">
                      <span>352$</span>
                      <span>245$</span>
                    </div>
                    <div className="sigma_rating-wrapper">
                      <div className="sigma_rating">
                        <i className="far fa-star active" />
                        <i className="far fa-star active" />
                        <i className="far fa-star active" />
                        <i className="far fa-star active" />
                        <i className="far fa-star" />
                      </div>
                      <span>255 Reviews</span>
                    </div>
                    <p>
                      {" "}
                      <strong className="me-2">
                        Interested: <span>05</span>
                      </strong>{" "}
                      <strong>
                        Availablity: <span>In Stock</span>
                      </strong>{" "}
                    </p>
                    <p className="sigma_product-excerpt">
                      All Religious Books are available in Temple Stores. Our
                      mission is to share the Good of Hinduism, Loving, Faith and
                      Serving.
                    </p>
                    <form className="sigma_product-atc-form">
                      <div className="sigma_product-variation-wrapper">
                        <div className="sigma_product-radio form-group">
                          <label>
                            <input
                              type="radio"
                              name="size"
                              defaultValue=""
                              defaultChecked=""
                            />
                            <span>XS</span>
                          </label>
                          <label>
                            <input type="radio" name="size" defaultValue="" />
                            <span>S</span>
                          </label>
                          <label>
                            <input type="radio" name="size" defaultValue="" />
                            <span>M</span>
                          </label>
                          <label>
                            <input type="radio" name="size" defaultValue="" />
                            <span>L</span>
                          </label>
                          <label>
                            <input type="radio" name="size" defaultValue="" />
                            <span>XL</span>
                          </label>
                        </div>
                      </div>
                      <div className="qty-outter">
                        <a
                          href="product-single.html"
                          className="sigma_btn-custom secondary"
                        >
                          Buy Now
                        </a>
                        <div className="qty-inner">
                          <h6>Qty:</h6>
                          <div className="qty">
                            <span className="qty-subtract">
                              <i className="fa fa-minus" />
                            </span>
                            <input type="text" name="qty" defaultValue={1} />
                            <span className="qty-add">
                              <i className="fa fa-plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* Post Meta Start */}
                    <div className="sigma_post-single-meta">
                      <div className="sigma_post-single-meta-item sigma_post-share">
                        <h6>Share</h6>
                        <ul className="sigma_sm">
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="sigma_post-single-meta-item">
                        <div className="sigma_product-controls">
                          <a href="#" data-toggle="tooltip" title="Compare">
                            {" "}
                            <i className="far fa-signal-4" />{" "}
                          </a>
                          <a href="#" data-toggle="tooltip" title="Wishlist">
                            {" "}
                            <i className="far fa-heart" />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Post Meta End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* partial */}
      {/* partial:partia/__sidenav.html */}
      <aside className="sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg">
        <div className="sidebar">
          <div className="sidebar-widget widget-logo">
            <Image src={logo} className="mb-30" alt="img" />
            {/* <img src="assets/img/logo.png" className="mb-30" alt="img" /> */}
            <p>
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Donec rutrum congue leo eget malesuada. Praesent sapien massa,
              convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
          {/* Instagram Start */}
          <div className="sidebar-widget widget-ig">
            <h5 className="widget-title">Instagram</h5>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/1.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/2.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/3.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/4.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/5.jpg" alt="ig" />
                </a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                <a href="#" className="sigma_ig-item">
                  <img src="assets/img/ig/6.jpg" alt="ig" />
                </a>
              </div>
            </div>
          </div>
          {/* Instagram End */}
          {/* Social Media Start */}
          <div className="sidebar-widget">
            <h5 className="widget-title">Follow Us</h5>
            <div className="sigma_post-share">
              <ul className="sigma_sm square light">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Social Media End */}
        </div>
      </aside>
      <div className="sigma_aside-overlay aside-trigger-right" />
      {/* partial */}
      {/* partial:partia/__mobile-nav.html */}
      <aside className={` sigma_aside sigma_aside-left ${menuActive ? 'open' : ''}`} >
        <div style={{ display: "flex" }}>
          <a className="navbar-brand" href="/">
            {" "}
            <Image src={logo} className="mb-30" alt="img" />
            {/* <img src="assets/img/logo.png" alt="logo" />{" "} */}
          </a>
          <button onClick={ClickHandler} className="close-btn close-dark close" data-bs-dismiss="modal">
            <span />
            <span />
          </button>
        </div>
        {/* Menu */}
        <ul>
          <li className="menu-item  ">
            <a href="/">Home</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="index.html">Home v1</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="home-v2.html">Home v2</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="home-v3.html">Home v3</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children" onClick={toggleClassName}>
            {/* <li className="menu-item" onClick={toggleClassName}> */}
            <a href="#">Blog</a>
            <ul className="sub-menu" style={toggleStyle}>
              <li className="menu-item">
                <a href="/coming_soon">Blog Archive</a>
              </li>
              <li className="menu-item">
                {" "}
                <a href="/coming_soon">Blog Details</a>{" "}
              </li>
            </ul>
          </li>
          {/* <li className="menu-item menu-item-has-children">
              <a href="#">Pages</a>
              <ul className="sub-menu">
                <li className="menu-item">
                  {" "}
                  <a href="/about">About Us</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="broadcast.html">Broadcast</a>{" "}
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Volunteers</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="volunteers.html">Volunteers</a>
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="volunteer-detail.html">Volunteer Details</a>{" "}
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="faq.html">FAQ</a>{" "}
                </li>
              </ul>
            </li> */}
          <li className="menu-item ">
            <a href="/coming_soon">Service</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="services.html">Service Style 1</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="services-2.html">Service Style 2</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item ">
            <a href="/donation">Donation</a>
            {/* <ul className="sub-menu">
                <li className="menu-item">
                  {" "}
                  <a href="/donation">Donation</a>{" "}
                </li>
                <li className="menu-item">
                  {" "}
                  <a href="donation-archive.html">Donation Archive</a>{" "}
                </li>
              </ul> */}
          </li>
          <li className="menu-item ">
            <a href="#">Event</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/coming_soon">Event</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/coming_soon">Event Detail</a>{" "}
              </li>
            </ul>
          </li>
          {/* <li className="menu-item menu-item-has-children">
            <a href="#">Holis</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="holi.html">Holi</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="holi-details.html">Holi Details</a>{" "}
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a href="#">Puja</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="puja.html">Puja</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="puja-details.html">Puja Details</a>{" "}
              </li>
            </ul>
          </li> */}
          <li className="menu-item ">
            <a href="/coming_soon">Shop</a>
            <ul className="sub-menu">
              <li className="menu-item">
                {" "}
                <a href="/coming_soon">Shop</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="/coming_soon">Product Details</a>{" "}
              </li>
              {/* <li className="menu-item">
                {" "}
                <a href="cart.html">Cart</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="checkout.html">Checkout</a>{" "}
              </li>
              <li className="menu-item">
                {" "}
                <a href="wishlist.html">Wishlist</a>{" "}
              </li> */}
            </ul>
          </li>
          <li className="menu-item">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </aside>
      <div className="sigma_aside-overlay aside-trigger-left open" active={menuActive} />
      {/* partial */}
      {/* partial:partia/__header.html */}
      <header className="sigma_header header-2 can-sticky">
        {/* Middle Header Start */}
        <div className="sigma_header-middle">
          <nav className="navbar">
            {/* Controls */}
            <div className="sigma_header-controls style-2">
              <ul className="sigma_header-controls-inner">
                {/* Desktop Toggler */}
                {/* <li className="aside-toggler style-2 aside-trigger-right desktop-toggler">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </li> */}
                {/* Mobile Toggler */}
                {/* Mobile menu toggle button */}
                <button
                  onClick={ClickHandler}
                  className={`aside-toggler style-2 aside-trigger-left ${menuActive ? 'open' : ''}`}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </button>
                <MobileMenu active={menuActive} />
                {/* Mobile menu */}

              </ul>
            </div>
            
            {/* Menu */}
            <ul className="navbar-nav">
              <li className="menu-item ">
                <a href="/">Home</a>
                {/* <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="index.html">Home v1</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="home-v2.html">Home v2</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="home-v3.html">Home v3</a>{" "}
                    </li>
                  </ul> */}
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    {" "}
                    <a href="/about">About Us</a>{" "}
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/coming_soon">Blog Archive</a>
                      </li>
                      <li className="menu-item">
                        {" "}
                        <a href="/coming_soon">Blog Details</a>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Shop</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {" "}
                        <a href="/coming_soon">Shop</a>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <a href="/coming_soon">Product Details</a>{" "}
                      </li>
                      <li className="menu-item">
                        {" "}
                        <a href="/coming_soon">Cart</a>{" "}
                      </li>
                      {/* <li className="menu-item">
                          {" "}
                          <a href="checkout.html">Checkout</a>{" "}
                        </li> */}
                      {/* <li className="menu-item">
                          {" "}
                          <a href="wishlist.html">Wishlist</a>{" "}
                        </li> */}
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Service</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        {" "}
                        <a href="/coming_soon">Service Style 1</a>{" "}
                      </li>
                      {/* <li className="menu-item">
                          {" "}
                          <a href="services-2.html">Service Style 2</a>{" "}
                        </li> */}
                    </ul>
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/coming_soon">Broadcast</a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/contact">Contact Us</a>{" "}
                  </li>
                  <li className="menu-item menu-item-has-children">
                    <a href="#">Volunteers</a>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <a href="/coming_soon">Volunteers</a>
                      </li>
                      {/* <li className="menu-item">
                          {" "}
                          <a href="volunteer-detail.html">Volunteer Details</a>{" "}
                        </li> */}
                    </ul>
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/coming_soon">FAQ</a>{" "}
                  </li>
                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <a href="#">Event</a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    {" "}
                    <a href="/coming_soon">Event</a>{" "}
                  </li>
                  <li className="menu-item">
                    {" "}
                    <a href="/coming_soon">Event Detail</a>{" "}
                  </li>
                </ul>
              </li>
              <li className="menu-item ">
                <a href="/about">About Us</a>
                {/* <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="holi.html">Holi</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="holi-details.html">Holi Details</a>{" "}
                    </li>
                  </ul> */}
              </li>
              <li className="menu-item ">
                <a href="/contact">Contact Us</a>
                {/* <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="puja.html">Puja</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="puja-details.html">Puja Details</a>{" "}
                    </li>
                  </ul> */}
              </li>
              <li className="menu-item ">
                <a href="/donation">Donation</a>
                {/* <ul className="sub-menu">
                    <li className="menu-item">
                      {" "}
                      <a href="/donation">Donation</a>{" "}
                    </li>
                    <li className="menu-item">
                      {" "}
                      <a href="donation-archive.html">Donation Archive</a>{" "}
                    </li>
                  </ul> */}
              </li>
            </ul>
            {/* Logo Start */}
            <div className="sigma_logo-wrapper">
              <a className="navbar-brand" href="/">
                <Image src={logo} className="mb-30" style={{ marginTop: 30, height: 100 }} alt="Logo" />
                {/* <img src="assets/img/logo.png" alt="logo" /> */}
              </a>
            </div>
            {/* Logo End */}
            {/* Button & Phone */}
            <div className="sigma_header-controls sigma_header-button">
              <a href="tel:+123456789" className="sigma_header-contact">
                <i className="fal fa-phone" />
                <div className="sigma_header-contact-inner">
                  <span>Get Support</span>
                  <h6>+1 214-284-6138</h6>
                </div>
              </a>
              <a className="sigma_btn-custom" href="/donation">
                {" "}
                PLEDGE Payments{" "}
              </a>
            </div>
            {/* Controls */}
            {/* <div className="sigma_header-controls style-1">
              <a href="#" className="sigma_search-trigger">
                {" "}
                <i className="flaticon-magnifying-glass" />{" "}
              </a>
            </div> */}
          </nav>
        </div>
        {/* Middle Header End */}
      </header>
      {/* partial */}
    </>


  )
}

export default Navbar