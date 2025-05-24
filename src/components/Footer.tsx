import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/logo-removebg-preview.png";
import Discord from "../../public/Images/discord.png";
import Linkdin from "../../public/Images/linkdin.png";
import Github from "../../public/Images/github.png";
import Vercel from "../../public/Images/vercel.png";
import Circle from "../../public/Images/bg-circle.png";
import Mailbox from "../../public/Images/email-box.png";
import Mailstick from "../../public/Images/email-stick.png";
import Phone from "../../public/Images/phone.png";

function Footer() {
    return (
        <div className="w-full mt-[70px] md:mt-[120px] pb-[50px] pt-[10px] sm:pt-[30px] bg-[#1B1B1B]">
        <div className="w-[90%] md:w-[90%] mx-auto bg-transparent">
            <div className="flex mt-[30px] justify-center bg-transparent">
                <Link href={"/"} className="bg-transparent">
                    <Image className="mt-[30px] bg-transparent" src={Logo} alt="Logo" width={100} />
                </Link>
            </div>

            <div className="links-parent text-[16px] sm:text-[20px] w-[90%] sm:w-[95%] md:w-[60%] mx-auto bg-transparent grid grid-cols-2 sm:grid-cols-5 gap-y-4 gap-x-3 md:gap-x-6 justify-items-center mt-[30px] px-4">
                <Link className="text-[#959595] text hover:text-[#FF6F00] bg-transparent" href={"/"}>Home</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00] bg-transparent" href={"/Services"}>Services</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00] bg-transparent" href={"/Aboutme"}>About me</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00] bg-transparent" href={"/Projects"}>Projects</Link>
                <Link className="text-[#959595] hover:text-[#FF6F00] bg-transparent hidden sm:flex" href={"/Contactme"}>Contact me</Link>
            </div>

            <Link className="sm:hidden bg-transparent text-[#959595] hover:text-[#FF6F00] flex justify-center text-[16px] sm:text-[20px] mt-[20px]" href={"/Contactme"}>Contact me</Link>

            <div className="profiles flex flex-wrap gap-[20px] mt-[50px] justify-center px-4 bg-transparent">
                <div className="bg-transparent">
                    <Link target="_blank" href="https://github.com/MubashirJatoi?tab=repositories" className="bg-transparent">
                        <Image className="bg-transparent circle hover:scale-110 transition-transform duration-300" src={Circle} alt="Circle" />
                        <Image className="bg-transparent emo mt-[-31px] ml-[10px] bg-[#1B1B1B] hover:scale-110 transition-transform duration-300" src={Github} alt="github" />
                    </Link>
                </div>
                <div className="bg-transparent">
                    <Link target="_blank" href="https://www.linkedin.com/in/mubashir-hussain-0800322b5/" className="bg-transparent">
                        <Image className="bg-transparent circle hover:scale-110 transition-transform duration-300" src={Circle} alt="Circle" />
                        <Image className="bg-transparent emo mt-[-32px] ml-[7px] bg-[#1B1B1B] hover:scale-110 transition-transform duration-300" src={Linkdin} alt="Linkdin" />
                    </Link>
                </div>
                <div className="bg-transparent">
                    <Link target="_blank" href="https://vercel.com/mubashir-hussains-projects-9c037818" className="bg-transparent">
                        <Image className="bg-transparent circle hover:scale-110 transition-transform duration-300" src={Circle} alt="Circle" />
                        <Image className="bg-transparent mt-[-29px] ml-[10px] bg-[#1B1B1B]" src={Vercel} alt="vercel" width={18} />
                    </Link>
                </div>
                <div className="bg-transparent">
                    <Link target="_blank" href="https://discord.com/users/1161947326160572526" className="bg-transparent">
                        <Image className="bg-transparent circle hover:scale-110 transition-transform duration-300" src={Circle} alt="Circle" />
                        <Image className="bg-transparent emo mt-[-29px] ml-[8px] bg-[#1B1B1B] hover:scale-110 transition-transform duration-300" src={Discord} alt="discord" />
                    </Link>
                </div>
            </div>

            <div className="bg-transparent foryou flex flex-col md:flex-row items-center gap-[30px] justify-center mt-[50px] px-4 text-center md:text-left">

                <div className="flex items-center justify-center md:justify-start bg-transparent">
                    <Link target="_blank" href="mailto:mubashirlukman231@gmail.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body." className="bg-transparent">
                        <div className="relative mr-2 bg-transparent">
                            <Image className="absolute top-[5px] bg-transparent" src={Mailstick} alt="mailstick" />
                            <Image src={Mailbox} alt="mailbox" className="bg-transparent" />
                        </div>
                    </Link>
                    <Link target="_blank" href="mailto:mubashirlukman231@gmail.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body." className="bg-transparent">
                        <p className="text-[#959595] bg-transparent">Mubashirlukman231@gmail.com</p>
                    </Link>
                </div>

                <div className="flex items-center justify-center md:justify-start bg-transparent">
                    <Link className="flex items-center bg-transparent" href="tel:+923701135722">
                        <Image className="mr-2 bg-transparent" src={Phone} alt="phone" />
                        <p className="text-[#959595] bg-transparent">+92 370 113 5722</p>
                    </Link>
                </div>
            </div>
            <hr className="w-[90%] md:w-[600px] mx-auto mt-[30px] bg-transparent" />
            <p className="text-[#707070] text-[16px] text-center mt-[20px] bg-transparent">Design by @Mubashir.Hussain Front-end web Developer</p>
        </div>
        </div>
    );
}

export default Footer;