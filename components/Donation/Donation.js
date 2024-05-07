import React from 'react'
import subheader from '../../assets/img/subheader.jpg'

function Donation() {
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
              <h1>Donation</h1>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="btn-link" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Donation
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* partial */}
      {/* Form Start */}
      {/* <div className="section">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="subtitle">DONATE TO HELP</p>
                        <h4 className="title">Make a donation to help us</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <a href="https://www.paypal.com/ncp/payment/EBESV5GG5C6YY" className="sigma_service style-3">
                                {/* <div className="sigma_service-thumb">
                <img src="assets/img/service/1.jpg" alt="img" />
                <i className="flaticon-temple" />
              </div> */}
      {/*  <div className="sigma_service-body">
                                    <h5>Donate Through PayPal</h5>
                                    <p>
                                        {/* Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                                        Vishnu, Krishna etc. Proin eget tortor risus.{" "} */}
      {/* </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <a href="#" className="sigma_service style-3">
                                {/* <div className="sigma_service-thumb">
                <img src="assets/img/service/2.jpg" alt="img" />
                <i className="flaticon-pooja" />
              </div> */}
      {/*    <div className="sigma_service-body">
                                    <h5>Donate Through Email</h5>
                                    <p>
                                        Zelle Info: {" "}
                                        <strong>gitamandirfrisco@gmail.com</strong>{" "}
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <form method="post">
          <div className="form-row sigma_donation-form">
            <div className="col-12">
              <div className="form-group mb-5">
                <h5>Donation Amount</h5>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button
                      className="sigma_btn-custom shadow-none btn-sm"
                      type="button"
                    >
                      $
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control ms-0"
                    placeholder="$100"
                  />
                </div>
                <ul className="sigma_select-amount">
                  <li>$15.00</li>
                  <li>$25.00</li>
                  <li>$45.00</li>
                  <li className="active">$100.00</li>
                  <li>$500.00</li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group mb-5">
                <h5>Payment Method</h5>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <input
                      type="radio"
                      id="radio"
                      name="radio"
                      defaultValue="Online Payment"
                    />
                    <label htmlFor="radio" className="mb-0">
                      Online Payment
                    </label>
                  </div>
                  <div className="d-flex align-items-center ms-4">
                    <input
                      type="radio"
                      id="radio2"
                      name="radio"
                      defaultValue="Offline Payment"
                    />
                    <label htmlFor="radio2" className="mb-0">
                      Offline Payment
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <h5>Campaigns</h5>
                <select className="form-control">
                  <option value={1} selected="">
                    Education for Every Child - (Target: 10000.00)
                  </option>
                  <option value={2}>
                    Education for Every Child - (Target: 10000.00)
                  </option>
                  <option value={3}>
                    Education for Every Child - (Target: 15000.00)
                  </option>
                  <option value={4}>
                    Education for Every Child - (Target: 25000.00)
                  </option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <h5>Message</h5>
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Enter Message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <h5>Donator Details</h5>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                      name="name"
                    />
                  </div>
                  <div className="col-lg-6 mt-3 mt-lg-0">
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 text-center">
              <button type="submit" className="sigma_btn-custom" name="button">
                {" "}
                Donate Now{" "}
              </button>
            </div>
          </div>
        </form> */}
      {/*  </div>
            </div> */}
      {/* Form End */}
      {/* holi Start */}
      <div className="section section-padding light-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="section-title text-end">
                <p className="subtitle">WAYS WE CAN HELP</p>
                <h4 className="title">Angels Ready To Help</h4>
              </div>
            </div>
            <div className="col-md-2 d-none d-md-block">
              {" "}
              <span className="vertical-seperator" />{" "}
            </div>
            <div className="col-md-5 d-none d-md-block">
              <p className="fw-600 mb-0 custom-secondary">
                Our mission is to foster spiritual growth and inner peace through the teachings of the Bhagavad Gita. We strive to create a welcoming sanctuary where individuals can connect with timeless wisdom and find solace in their journey of self-discovery.
              </p>
            </div>
          </div>

          <div className="row align-items-center section-padding " style={{ paddingTop: 60 }} >
            <div className="col-md-5 d-none d-md-block">
              <p className="fw-600 mb-0 custom-secondary">
                With Lord Krishna’s mercy, Gita Mandir recently signed a
                PSA (Purchase Sale Agreement) for buying the above land
                of 7.3 acres. The Goal of this phase is to successfully buy the
                land to facilitate Lord Krishna’s new temple in Frisco. For
                this Project, Gita Mandir needs to raise $2.5 million by 31st
                May 2024.<br /><br />
                We have heard from Srimad Bhagavatam about Lord’s
                descent in Satya Yuga, Treta Yuga, Dvapara Yuga and Kali
                Yuga. What if you have an opportunity to be personally
                involved in the Lord’s descent?
              </p>
            </div>

            <div className="col-md-2 d-none d-md-block">
              {" "}
              <span className="vertical-seperator" />{" "}
            </div>
            <div className="col-md-5">
              <div className="section-title text-start">
                <h4 className="">How can you be involved?</h4>
                <p className="subtitle" style={{padding:0, margin:0}}>Donations:</p>
                <p>You can donate by acre or by Sq ft. Some recommended
                  donation suggestions are</p>
                <h6>Grand Sponsor – $500,000</h6>
                <p>Recognition at the temple entrance (Name plate/ stone)</p>
                <h6>Altar Room Land Sponsor - $500,000</h6>
                <p>Recognized at the Altar Room Entrance (Name plate/ stone)</p>
              </div>
            </div>

          </div>

          <div className="row align-items-center section-padding " style={{ paddingTop: 10 }} >
            <div className="col-md-6">
              <div className=" text-center">
                <h4 className="">1 Acre Land – $330,000</h4>
                <h4 className="">½ Acre Land – $170,000</h4>
                <h4>¼ Acre Land – $ 90,000</h4>
                <h4>5,000 Sq Ft – $ 50,000</h4>
                <h4>2,500 Sq Ft – $ 25,000</h4>


              </div>
            </div>
            <div className="col-md-6">
              <div className=" text-center">


                <h4>1000 Sq Ft – $ 10,000</h4>
                <h4>500 Sq Ft - $ 5,000</h4>
                <h4>250 Sq Ft - $ 2,500</h4>
                <h4>100 Sq Ft - $ 1,000</h4>

              </div>
            </div>

            <div className="col-md-12">
              <div className=" text-center">



                <h5>All the above sponsors will be recognized as donors for procuring the land</h5>
                <h4>You can donate any amount as you prefer.</h4>
                <p><strong>“Just by starting the construction of a temple for Lord, sins
                  committed in seven births will be wiped out and one will
                  deliver his forefathers who are suffering in hellish planets”</strong>
                  {" "}and who sponsors a temple of Lord Vishnu, gains ten million
                  times the merits accrued by Yajna, Austerities, Charities,
                  Pilgrimage and study of Vedas.</p>
                <h6>– Skanda Purana
                </h6>
              </div>
            </div>


          </div>


          {/* <div className="row">
            <div className="col-lg-6 col-md-6">
              <a href="services.html" className="sigma_service style-3">
                <div className="sigma_service-thumb">
                  <img src="assets/img/service/1.jpg" alt="img" />
                  <i className="flaticon-temple" />
                </div>
                <div className="sigma_service-body">
                  <h5>About Temple</h5>
                  <p>
                    Discover serenity at the Gita Temple, where ancient wisdom meets tranquil surroundings. Immerse yourself in the teachings of the Bhagavad Gita and find peace amidst the chaos of everyday life.{" "}
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <a href="donation.html" className="sigma_service style-3">
                <div className="sigma_service-thumb">
                  <img src="assets/img/service/2.jpg" alt="img" />
                  <i className="flaticon-pooja" />
                </div>
                <div className="sigma_service-body">
                  <h5>About Gita </h5>
                  <p>
                    Explore the timeless wisdom of the Bhagavad Gita, a spiritual and philosophical guide that transcends time and culture. Discover its profound teachings on life, duty, and the nature of reality.{" "}
                  </p>
                </div>
              </a>
            </div>
          </div> */}
        </div>
      </div>
      {/* holi End */}
    </>


  )
}

export default Donation