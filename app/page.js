import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Product from "@/components/Product";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-black w-full overflow-hidden pt-24 flex flex-col items-center space-y-10">
      <NavBar />
      <Hero />
      <Slider />
      <Product />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}
