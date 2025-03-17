"use client";

import { motion } from "framer-motion";
import Logo1 from "@/public/assets/avatar-1.png";
import Logo2 from "@/public/assets/avatar-2.png";
import Logo3 from "@/public/assets/avatar-3.png";
import Logo4 from "@/public/assets/avatar-4.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    testimonial: "These AI tools have completely revolutionized our SEO entire strategy overnight",
    logo: Logo2,
  },
  {
    name: "Sophia Perez",
    title: "Director @ Quantum",
    testimonial: "This product has completely transformed how I manage my projects and deadlines",
    logo: Logo1,
  },
  {
    name: "Alisa Hester",
    title: "Product @ Innovate",
    testimonial: "The user interface is so intuitive and easy to use, it has saved us countless hours",
    logo: Logo3,
  },
  {
    name: "Alec Whitten",
    title: "CYO @ Tech Solutions",
    testimonial: "Our team's productivity has increased significantly since we started using this tool",
    logo: Logo4,
  },
  
  
];
function Slider() {


  return (
    <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))] ">
      <motion.div
      initial={{
        translateX:"-50%",
      }}
      animate={{
        translateX:"0",
      }}
      transition={{
        repeat:Infinity,
        ease:"linear",
        duration:30,
      }}
        className=" flex gap-5 flex-none pr-5"
      >
          {[...testimonials, ...testimonials].map((testimonial)=>(
            <div key={testimonial.logo} className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs flex-none">
            <p className="text-white text-lg tracking-tight">
              &quot;{testimonial.testimonial}&quot;
            </p>
            <div className="flex items-center gap-3 mt-5">
              <div className="w-10 h-10 rounded-md overflow-hidden">
                <Image src={testimonial.logo} alt={testimonial.name} width={40} height={40} />
              </div>
              <div className="flex flex-col h-full justify-between">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-white/70">{testimonial.title}</p>
              </div>
            </div>
          </div>
          ))}
          
      </motion.div>
    </div>
  );
}

export default Slider;
