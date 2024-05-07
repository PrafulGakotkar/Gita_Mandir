import { Inter } from "next/font/google";
import "./globals.css";
import '../assets/css/plugins/bootstrap.min.css'
import '../assets/css/plugins/animate.min.css'
import '../assets/css/plugins/magnific-popup.css'
import '../assets/css/plugins/slick-theme.css'
import '../assets/css/plugins/slick.css'
import '../assets/css/plugins/ion.rangeSlider.min.css'

import '../assets/fonts/flaticon/flaticon.css'
import '../assets/css/plugins/font-awesome.min.css'

import "../assets/css/style.css"
import '../assets/css/responsive.css'




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
