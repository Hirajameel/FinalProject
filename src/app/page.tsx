import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Section1 from "@/components/Section1";
import Section3 from "@/components/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      <Header/>
      <Hero/>
      <Section1/>
      <Product/>
      <Section3/>
      <Gallery/>
      <Footer/>
    </div>
  );
}
