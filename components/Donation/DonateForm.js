'use client'
import Link from 'next/link';
import React, { useState } from 'react';

export default function DonateForm() {
    const [paymentMethod, setPaymentMethod] = useState('Offline Payment');
    // const [paymentMethod, setPaymentMethod] = useState('Online Payment');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
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
                    <form method="post">
                        <div className="row sigma_donation-form">
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
                    </form>
                </div>
            </div>
            {/* Form End */}
        </>
    );
}

