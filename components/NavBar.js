'use client'
import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className="fixed top-5 w-1/2 max-[720px]:w-3/4 px-10 max-[720px]:px-2 h-16 flex justify-between items-center border  border-white/15 rounded-xl backdrop-blur-sm z-[99]">
      <div className="w-10 h-10 border-2   flex justify-center items-center backdrop-blur-sm">
        <Image src={Logo} alt="" className="invert" />
      </div>
      <div className="flex space-x-5 text-white/70 max-[720px]:hidden backdrop-blur-sm">
        <Link href={"#"}>Features</Link>
        <Link href={"#"}>Developers</Link>
        <Link href={"#"}>Pricing</Link>
        <Link href={"#"}>Changelog</Link>
      </div>
      <div className="bg-transparent flex items-center space-x-3">
        <button className="relative py-2 px-3 rounded-lg font-medium text-sm text-white bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] cursor-pointer hover:shadow-[0px_0px_20px_#8c45ff]">
          <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
          </div>
          <span>Join waitlist</span>
          
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50 text-white">
        {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      </div>
      
    </div>
    {menuOpen && (
      <div
        className="fixed top-0 right-0 w-full h-full bg-gray-100 shadow-lg flex flex-col items-start p-5 space-y-5 md:hidden z-[999]"
      >
        <button onClick={() => setMenuOpen(false)} className="self-end">
          <FaTimes size={30} />
        </button>
        <Link href={"#"}>Features</Link>
        <Link href={"#"}>Developers</Link>
        <Link href={"#"}>Pricing</Link>
        <Link href={"#"}>Changelog</Link>
      </div>
    )}
    </>
  );
}

export default NavBar;
