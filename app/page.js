import Footer from "@/components/Footer/Footer";
import Banner from "@/components/HomePage/Banner";
import About from "@/components/HomePage/About";
import Navbar from "@/components/Navbar/Navbar";


import Image from "next/image";
import Help from "@/components/HomePage/Help";
import Progress from "@/components/HomePage/Progress";
import DonateUs from "@/components/HomePage/DonateUs";
import Volunteers from "@/components/HomePage/Volunteers";
import NewsLetter from "@/components/HomePage/NewsLetter";
import Form from "@/components/HomePage/Form";
import Blog from "@/components/HomePage/Blog";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Help />
      <Progress />
      <DonateUs />
      <Volunteers />
      <NewsLetter />
      <Form />
      <Blog />
      <Footer />
    </>
  );
}
