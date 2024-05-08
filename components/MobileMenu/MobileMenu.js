import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobileMenu() {
  return (
    <>
     {/* <!-- partial:partia/__mobile-nav.html --> */}
  <aside className="sigma_aside sigma_aside-left">

    <Link className="navbar-brand" href="index.html"> 
    {/* <Image src="assets/img/logo.png" alt="logo"> */}
     </Link> 

    {/* <!-- Menu --> */}
    <ul>
          <li className="menu-item menu-item-has-children">
            <Link href="#">Home</Link>
            <ul className="sub-menu">
              <li className="menu-item"> <Link href="index.html">Home v1</Link> </li>
              <li className="menu-item"> <Link href="home-v2.html">Home v2</Link> </li>
              <li className="menu-item"> <Link href="home-v3.html">Home v3</Link> </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="#">Blog</Link>
            <ul className="sub-menu">
              <li className="menu-item">
                <Link href="blog-grid.html">Blog Archive</Link>
              </li>
              <li className="menu-item"> <Link href="blog-details.html">Blog Details</Link> </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="#">Pages</Link>
            <ul className="sub-menu">
              <li className="menu-item"> <Link href="about-us.html">About Us</Link> </li>
              <li className="menu-item"> <Link href="broadcast.html">Broadcast</Link> </li>
              <li className="menu-item menu-item-has-children">
                <Link href="#">Volunteers</Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="volunteers.html">Volunteers</Link>
                  </li>
                  <li className="menu-item"> <Link href="volunteer-detail.html">Volunteer Details</Link> </li>
                </ul>
              </li>
              <li className="menu-item"> <Link href="faq.html">FAQ</Link> </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="#">Service</Link>
            <ul className="sub-menu">
             <li className="menu-item"> <Link href="services.html">Service Style 1</Link> </li>
             <li className="menu-item"> <Link href="services-2.html">Service Style 2</Link> </li>
           </ul>
         </li>
         <li className="menu-item menu-item-has-children">
            <Link href="#">Donation</Link>
            <ul className="sub-menu">
              <li className="menu-item"> <Link href="donation.html">Donation</Link> </li>
              <li className="menu-item"> <Link href="donation-archive.html">Donation Archive</Link> </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="#">Event</Link>
            <ul className="sub-menu">
             <li className="menu-item"> <Link href="events.html">Event</Link> </li>
             <li className="menu-item"> <Link href="event-details.html">Event Detail</Link> </li>
           </ul>
         </li>
         <li className="menu-item menu-item-has-children">
          <Link href="#">Holis</Link>
          <ul className="sub-menu">
           <li className="menu-item"> <Link href="holi.html">Holi</Link> </li>
           <li className="menu-item"> <Link href="holi-details.html">Holi Details</Link> </li>
         </ul>
       </li>
       <li className="menu-item menu-item-has-children">
        <Link href="#">Puja</Link>
        <ul className="sub-menu">
         <li className="menu-item"> <Link href="puja.html">Puja</Link> </li>
         <li className="menu-item"> <Link href="puja-details.html">Puja Details</Link> </li>
       </ul>
     </li>
     <li className="menu-item menu-item-has-children">
      <Link href="#">Shop</Link>
      <ul className="sub-menu">
        <li className="menu-item"> <Link href="shop.html">Shop</Link> </li>
        <li className="menu-item"> <Link href="product-single.html">Product Details</Link> </li>
        <li className="menu-item"> <Link href="cart.html">Cart</Link> </li>
        <li className="menu-item"> <Link href="checkout.html">Checkout</Link> </li>
        <li className="menu-item"> <Link href="wishlist.html">Wishlist</Link> </li>
      </ul>
    </li>
    <li className="menu-item">
      <Link href="contact-us.html">Contact</Link>
    </li>
    </ul>

  </aside>
 
  </>
  )
}

export default MobileMenu