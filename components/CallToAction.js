'use client'
import { useMotionTemplate, useScroll, useTransform , motion } from "framer-motion";
import { useRef } from "react";
import useRelativeMousePosition from "./useRelativeMousePosition";
import starsBg from '@/public/assets/stars.png';
// import starsBg from '@/public/assets/stars.png';

function CallToAction() {
  const sectionRef= useRef(null);
  const borderdDivRef= useRef(null);
  const { scrollYProgress } = useScroll({
    target:sectionRef,
    offset:["start end","end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0,1],
    [-300,300]
  );
  const [mouseX,mouseY] = useRelativeMousePosition(borderdDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <div className="w-full px-20 py-20 max-[720px]:px-2" ref={sectionRef}>
      <div className="container">
        <motion.div animate={{backgroundPositionX:starsBg.width,}} transition={{repeat:Infinity,duration:60,ease:"linear"}} style={{backgroundPositionY,}} ref={borderdDivRef} className="group border border-white/15 py-24 rounded-xl overflow-hidden relative bg-[url(/assets/stars.png)]">
          <div className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay bg-[url(/assets/grid-lines.png)] [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"></div>
          <motion.div style={{maskImage,}} className="opacity-0 absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay bg-[url(/assets/grid-lines.png)] group-hover:opacity-100 transition duration-700"></motion.div>
          <div className="relative space-y-3">
            <h2 className="text-5xl tracking-tighter max-w-sm mx-auto text-white text-center font-medium">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-center text-lg text-white/70 px-4 mx-auto max-w-sm">
              Archive clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <button className="relative py-2 px-3 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] cursor-pointer hover:shadow-[0px_0px_20px_#8c45ff]">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
                <span>Join waitlist</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CallToAction;
