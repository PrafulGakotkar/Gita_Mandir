import Link from 'next/link'
import React from 'react'


function Footer() {
    return (
        <>
            <div className='sigma_footer footer-2'>
                {/* <!-- Middle Footer --> */}
                <div className="sigma_footer-middle">
                    <div className="container">
                        <div className="row" >
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">About Us</h5>
                                <p className="mb-4">You need to be sure there isn’t anything embarrassing hidden in the middle of text. </p>
                                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                                    <i className="far fa-phone custom-primary me-3"></i>
                                    <span>987-987-930-302</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                                    <i className="far fa-envelope custom-primary me-3"></i>
                                    <span>info@example.com</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                                    <i className="far fa-map-marker custom-primary me-3"></i>
                                    <span>14/A, Poor Street City Tower, New York USA</span>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Information</h5>
                                <ul>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="puja.html">Puja</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="services.html">Services</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="about-us.html">Temple</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="holi.html">Holis</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="volunteers.html">Volunteers</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="events.html">Donation</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-12 footer-widget">
                                <h5 className="widget-title">Others</h5>
                                <ul>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="#">Shop</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="#">Checkout</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="#">Donation</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="/contact">Contact Us</Link>
                                    </li>
                                    <li>
                                        <i className="fas fa-om"></i>
                                        <Link href="#">Blog</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-3 col-sm-12 d-none d-lg-block footer-widget widget-recent-posts">
                                <h5 className="widget-title">Recent Posts</h5>
                                <article className="sigma_recent-post">
                                    {/* <Link href="blog-details.html"><img src="assets/img/blog/sm/1.jpg" alt="post"></Link> */}
                                    <div className="sigma_recent-post-body">
                                        <Link href="blog-details.html"> <i className="far fa-calendar"></i> May 20, 2022</Link>
                                        <h6> <Link href="#">Temple companies are being so transparent with their work</Link></h6>
                                    </div>
                                </article>
                                <article className="sigma_recent-post">
                                    {/* <Link href="blog-details.html"><img src="assets/img/blog/sm/2.jpg" alt="post"></Link> */}
                                    <div className="sigma_recent-post-body">
                                        <Link href="#"> <i className="far fa-calendar"></i> May 20, 2022</Link>
                                        <h6> <Link href="#">Testimony love offering so blessed</Link></h6>
                                    </div>
                                </article>
                                <article className="sigma_recent-post">
                                    {/* <Link href="blog-details.html"><img src="assets/img/blog/sm/3.jpg" alt="post"></Link> */}
                                    <div className="sigma_recent-post-body">
                                        <Link href="#"> <i className="far fa-calendar"></i> May 20, 2022</Link>
                                        <h6> <Link href="#">As we've all discovered by now, the world can change</Link></h6>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sigma_footer-bottom">
                    <div className="container-fluid">
                        <div className="sigma_footer-copyright">
                            <p> Copyright © Gita Mandir - <a href="#" className="custom-primary">2024</a> </p>
                        </div>
                        <div className="sigma_footer-logo">
                            {/* <img src="assets/img/logo.png" alt="logo"> */}
                        </div>
                        <ul className="sigma_sm square">
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer