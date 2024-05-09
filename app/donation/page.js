import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Donation from '@/components/Donation/Donation'
import DonateUs from '@/components/HomePage/DonateUs'
import DonateForm from '@/components/Donation/DonateForm'

function DonationPage() {
    return (
        <>
            <Navbar />
            <Donation />
            <DonateForm />
            <DonateUs />    
            <Footer />
        </>
    )
}

export default DonationPage