import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'

import img from '../../assets/img/coming.gif';


export default function ComingSoonPage() {
    return (
        <>
            <Navbar />
            <div className='' style={{marginLeft:500, marginTop:100}}>
                <Image src={img} alt='Coming Soon' />
            </div>
            <Footer />
        </>
    )
}
