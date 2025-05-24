"use client"
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Images/logo-removebg-preview.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar items-center flex justify-between bg-[#121212] h-[80px] fixed top-0 w-full z-[100] px-4">

            <div className="md:hidden z-[101] text-white" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>
            <Link href={"/"}>
                <Image className="logo hidden sm:hidden md:flex" src={Logo} alt="Logo" width={100} height={20} />
            </Link>
            <Link href={"/"}>
            <Image className="logo sm:flex md:hidden mr-[5.5rem] sm:mr-[8rem]" src={Logo} alt="Logo" width={70} height={16} />
            </Link>
            <Link href="tel:+923701135722" className="bg-transparent no-underline">
                <button className="hire-me md:hidden flex items-center justify-center text-white bg-[#FD6F00] rounded-[8px] px-4 h-[30px] text-[10px] w-auto">
                    Hire Me
                </button>
            </Link>

            <div className="hidden md:flex justify-center gap-[60px] text-[20px] bg-transparent">
                <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/"}>Home</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Services"}>Services</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Aboutme"}>About me</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Projects"}>Projects</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Contactme"}>Contact me</Link>
            </div>

            <Link href="tel:+923701135722" className="hidden md:flex bg-transparent no-underline">
                <button className="hire-me text-white bg-[#FD6F00] rounded-[8px] w-[141px] h-[43px] border-[#FD6F00] text-[16px] cursor-pointer hover:mt-[5px] mr-[10px]">
                    Hire Me
                </button>
            </Link>


            {menuOpen && (
                <div className="absolute top-[80px] left-0 w-full bg-[#121212] flex flex-col items-center gap-4 py-6 text-[18px] md:hidden z-[100]">
                    <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Services"} onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Aboutme"} onClick={() => setMenuOpen(false)}>About me</Link>
                    <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Projects"} onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link className="text-[#959595] hover:text-[#FF6F00]" href={"/Contactme"} onClick={() => setMenuOpen(false)}>Contact me</Link>

                </div>
            )}
        </div>
    );
}

export default Navbar;
