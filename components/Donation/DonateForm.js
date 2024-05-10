'use client'
import Link from 'next/link';
import React, { useState } from 'react';

export default function DonateForm() {
    const [donationAmount, setDonationAmount] = useState('$100.00'); // Default value is $100.00

    const [paymentMethod, setPaymentMethod] = useState('Offline Payment');
    // const [paymentMethod, setPaymentMethod] = useState('Online Payment');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleDonationAmountChange = (amount) => {
        setDonationAmount(amount);
    };

    return (
        <>
            {/* Form Start */}
            <div className="section">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="subtitle">DONATE TO HELP</p>
                        <h4 className="title">Make a donation to help us</h4>
                    </div>

                    <div className="row sigma_donation-form">
                        {/* <div class="form-group mb-5">
                            <h5>Donation Amount</h5>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button class="sigma_btn-custom shadow-none btn-sm" type="button">$</button>
                                </div>
                                <input type="text" class="form-control ms-0" placeholder="$100" />
                            </div>
                            <ul class="sigma_select-amount">
                                <li>$15.00</li>
                                <li>$25.00</li>
                                <li>$45.00</li>
                                <li class="active">$100.00</li>
                                <li>$500.00</li>
                            </ul>
                        </div> */}
                        <div className="col-12">
                            <div className="form-group mb-5">
                                <h5>Payment Method</h5>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <input
                                            type="radio"
                                            id="onlinePayment"
                                            name="paymentMethod"
                                            value="Online Payment"
                                            checked={paymentMethod === 'Online Payment'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="onlinePayment" className="mb-0">
                                            Online Payment
                                        </label>
                                    </div>
                                    <div className="d-flex align-items-center ms-4">
                                        <input
                                            type="radio"
                                            id="offlinePayment"
                                            name="paymentMethod"
                                            value="Offline Payment"
                                            checked={paymentMethod === 'Offline Payment'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="offlinePayment" className="mb-0">
                                            Offline Payment
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {paymentMethod === 'Offline Payment' ? (
                            // Display form for offline payment
                            <div className="row  ">
                                

                                <form >
                                    <div class="form-row sigma_donation-form">
                                        <div class="col-12">
                                            <div class="form-group1 mb-5">
                                                <h5>Donation Amount</h5>
                                                <div class="input-group">
                                                    <div class="input-group-prepend1">
                                                        <button class="sigma_btn-custom shadow-none btn-sm" type="button">$</button>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="form-control ms-0"
                                                        style={{color:'red'}}
                                                        placeholder="$100"
                                                        value={donationAmount} // Bind value to donationAmount state
                                                        onChange={(event) => handleDonationAmountChange(event.target.value)}
                                                    />
                                                </div>
                                                <ul className="sigma_select-amount">
                                                    <li className={donationAmount === '$15.00' ? 'active' : ''} onClick={() => setDonationAmount('$15.00')}>$15.00</li>
                                                    <li className={donationAmount === '$25.00' ? 'active' : ''} onClick={() => setDonationAmount('$25.00')}>$25.00</li>
                                                    <li className={donationAmount === '$45.00' ? 'active' : ''} onClick={() => setDonationAmount('$45.00')}>$45.00</li>
                                                    <li className={donationAmount === '$100.00' ? 'active' : ''} onClick={() => setDonationAmount('$100.00')}>$100.00</li>
                                                    <li className={donationAmount === '$500.00' ? 'active' : ''} onClick={() => setDonationAmount('$500.00')}>$500.00</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className='col-xl-6'>
                                    <h5>Bank Details</h5>
                                    <h6>
                                        Account Name: Gita Mandir Inc.
                                    </h6>
                                    <h6>
                                        Bank Name: Bank of America </h6>
                                    <h6>
                                        Routing No: 111000025 (For ACH) <br />
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;026009593 (For Wires)
                                    </h6>

                                    <h6>
                                        Account Number: 488124797921
                                    </h6>
                                    <h6>
                                        Address: 2421 Bunny Run Ln, Frisco, TX 75034

                                    </h6>

                                </div>
                                <div className='col-xl-6'>
                                    <h5>Zelle Info:
                                    </h5>
                                    <h6>
                                        gitamandirfrisco@gmail.com
                                    </h6>

                                </div>

                                        <div class="col-12 pt-5">
                                            <div class="form-group">
                                                <h5>Campaigns</h5>
                                                <select class="form-control1 text-black">
                                                    <option value="1" style={{ color: 'red' }} selected>Land Acquisition - (Target: $25,00,000)</option>
                                                    <option value="2">Temple In Store Front - (Target: $5,00,000)</option>
                                                    <option value="3">Temple Construction- (Target: TBD)</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <h5>Message</h5>
                                                <textarea name="message" class="form-control1" placeholder="Enter Message" rows="6"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <h5>Donator Details</h5>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <input type="text" class="form-control1" placeholder="Full Name" name="name" />
                                                    </div>
                                                    <div class="col-lg-6 mt-3 mt-lg-0">
                                                        <input type="email" placeholder="Email Address" name="email" class="form-control1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 text-center">
                                            <button type="submit" class="sigma_btn-custom" name="button"> Donate Now </button>
                                        </div>
                                    </div>
                                </form>


                            </div>
                        ) : (
                            // Display buttons for online payment
                            <div className="row text-center">
                                <div className="col-lg-6 text-center">

                                    <Link className="sigma_btn-custom" href="https://www.paypal.com/ncp/payment/EBESV5GG5C6YY" >
                                        Pay Through Paypal
                                    </Link>

                                </div>
                                {/* <div className="col-lg-6 text-center">
                                        <button className="sigma_btn-custom" type="button">
                                            Payment Option 2
                                        </button>
                                    </div> */}
                            </div>
                        )}

                    </div>

                </div>
            </div>
            {/* Form End */}
        </>
    );
}

