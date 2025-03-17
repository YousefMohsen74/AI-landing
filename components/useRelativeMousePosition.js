'use client'
import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

function useRelativeMousePosition(to) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event)=>{
    if(!to.current) return;
    const { top, left} = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);

  };
  useEffect(() => {
    if (!to.current) return;
    
    const updateMousePosition = (event) => {
      const { top, left } = to.current.getBoundingClientRect();
      mouseX.set(event.x - left);
      mouseY.set(event.y - top);
    };
  
    to.current.addEventListener("mousemove", updateMousePosition);
  
    return () => {
      to.current.removeEventListener("mousemove", updateMousePosition);
    };
  }, [to]);
  
  return [mouseX,mouseY];
};

export default useRelativeMousePosition;
