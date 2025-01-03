import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Images/logo-removebg-preview.png"

function Navbar() {
    return(
        <nav className="navbar items-center flex justify-between bg-[#121212] h-[80px] fixed top-0 w-[100%] z-[100]">
            <Link href={"/"}><Image className="logo ml-[20px] " src={Logo} alt="Logo" width={100} height={20}/></Link>
            <div className="links-parent flex justify-center gap-[60px] text-[20px] bg-transparent">
                <Link className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/"}>Home</Link>
                <Link className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/Services"}>Services</Link>
                <Link className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/Aboutme"}>About me</Link>
                <Link className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/Projects"}>Projects</Link>
                <Link className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/Contactme"}>Contact me</Link>
            </div>
            <Link className="phonu bg-transparent flex no-underline decoration-[none]" href="tel:+923701135722"><button className="hire-me text-[#FFFFFF] bg-[#FD6F00] rounded-[8px] w-[141px] h-[43px] border-[#FD6F00] mr-[50px] text-[16px] cursor-pointer hover:mt-[5px] hover:transition-colors hover:duration-100 hover:ease-in-out hover:[color-transition:1s]">Hire Me</button></Link>
        </nav>
    );
};

export default Navbar;
