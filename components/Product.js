"use client";
import Image from "next/image";
import ProductPic from "@/public/assets/product-image.png";
import ProductShowcase from "./ProductShowcase";
import Overview from "./Overview";
import { useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Icon } from "lucide-react";

const tabs = [
  {
    Icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    Icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    Icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

function Product() {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;

  const handleSelectTab = (index) => {
    setSelectedTab(index);
    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      { duration: 2, ease: "easeInOut" }
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      { duration: 2, ease: "easeInOut" }
    );
    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      { duration: 2, ease: "easeInOut" }
    );
  };
  return (
    <div className="w-full flex flex-col items-center space-y-5  px-28 max-[720px]:px-2">
      <p className="text-white text-5xl font-bold text-center">
        Elevate your SEO efforts.
      </p>
      <p className="w-1/3 max-[720px]:w-full text-white/70 text-center">
        From small startups to large enterprises, our AI-driven tool has
        revolutionized the way businesses approach SEO.
      </p>
      <div className="w-full flex max-[720px]:flex-col  justify-between space-x-5 max-[720px]:space-x-0 max-[720px]:space-y-5">
        {tabs.map((tab, tabIndex) => (
          <ProductShowcase
            selected={selectedTab === tabIndex}
            tab={tab}
            key={tab.title}
            click={() => handleSelectTab(tabIndex)}
          />
        ))}
      </div>
      <div className="w-full border border-white/15 p-3 rounded-lg">
        <motion.div
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${ProductPic.src})`,
          }}
          className="aspect-video bg-cover border border-white/15 rounded-lg"
        ></motion.div>
      </div>
    </div>
  );
}

export default Product;
