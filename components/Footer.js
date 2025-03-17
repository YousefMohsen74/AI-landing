import Logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
function Footer() {
    return (
        <div className="relative w-full py-5 flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-0.5 border border-white/10"></div>
            <div className="flex max-[720px]:flex-col px-16 max-[720px]:px-2 justify-between max-[720px]:items-center max-[720px]:space-y-5">
                <div className="flex text-white space-x-2">
                    <Image width={20} height={20} src={Logo} alt="" className="invert" />
                    <p>AI Startup Landing Page</p>
                </div>
                <div className="flex max-[720px]:flex-col space-x-5 max-[720px]:space-x-0 max-[720px]:space-y-3 text-white/70 backdrop-blur-sm">
                        <Link href={"#"}>Features</Link>
                        <Link href={"#"}>Developers</Link>
                        <Link href={"#"}>Company</Link>
                        <Link href={"#"}>Blog</Link>
                        <Link href={"#"}>Changelog</Link>
                      </div>
                <div className="text-white/50 flex space-x-3 max-[720px]:space-x-10">
                    <FaTwitter className="w-7 h-7"/>
                    <PiInstagramLogoFill className="w-7 h-7"/>
                    <FaYoutube className="w-7 h-7"/>
                </div>
            </div>
        </div>
    )
}

export default Footer
