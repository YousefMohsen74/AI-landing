"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Logo1 from "@/public/assets/logo-acme.png";
import Logo2 from "@/public/assets/logo-apex.png";
import Logo3 from "@/public/assets/logo-celestial.png";
import Logo4 from "@/public/assets/logo-echo.png";
import Logo5 from "@/public/assets/logo-pulse.png";
import Logo6 from "@/public/assets/logo-quantum.png";
import Image from "next/image";

function Slider() {
  const modules = [Autoplay];

  return (
    <div className="w-full h-20 flex items-center px-20 max-[720px]:px-5">
      <div className="w-1/4 max-[720px]:w-2/5 flex justify-start items-center text-white/70">
        <p>Trusted by top innovative teams</p>
      </div>
      <div className="w-3/4 max-[720px]:w-1/2 flex justify-center [mask-image:linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]">

        <Swiper
          modules={modules}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            720: {
              slidesPerView: 5,
            },
          }}
          watchSlidesProgress={true}
          className="w-full"
        >
          {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6].map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-20 relative flex justify-center items-center">
                <Image width={150} height={50} src={logo} alt={`Logo ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
