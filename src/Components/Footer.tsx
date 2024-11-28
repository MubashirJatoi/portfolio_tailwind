import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Images/logo-removebg-preview.png"
import Discord from "../../public/Images/discord.png"
import Linkdin from "../../public/Images/linkdin.png"
import Github from "../../public/Images/github.png"
import Vercel from "../../public/Images/vercel.png"
import Circle from "../../public/Images/bg-circle.png"
import Mailbox from "../../public/Images/email-box.png"
import Mailstick from "../../public/Images/email-stick.png"
import Phone from "../../public/Images/phone.png"

function Footer () {
    return(
        <div>
        <div className="footer mt-[150px] bg-[#1B1B1B] h-[400]">
            <Link className="hnnm bg-transparent" href={"/"}><Image className="hmm1 mt-[30px] ml-[38.5rem] bg-transparent  cursor-pointer" src={Logo} alt="Logo" width={100}/></Link>
            <div id="waiting" className="links-parent gap-[60px] text-[20px] bg-transparent flex justify-center mt-[30px]">
                <Link id="what" className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/"}>Home</Link>
                <Link id="what" className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/"}>Services</Link>
                <Link id="what" className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/"}>About me</Link>
                <Link id="what" className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/"}>Portfolio</Link>
                <Link id="what" className="links no-underline decoration-[none] text-[#959595] bg-transparent hover:text-[#FF6F00]" href={"/"}>Contact me</Link>
            </div>
            <div id="mm11" className="profiles flex gap-[20] mt-[50px] bg-transparent justify-center">
                    <div className="profiles-s bg-transparent">
                    <Link className="pprr bg-transparent" target="_blank" href="https://github.com/MubashirJatoi?tab=repositories">
                        <Image className="circle cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110" src={Circle} alt="Circle" />
                        <Image id="i-1" className="emo mt-[-31px] ml-[10px] cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 bg-[#1B1B1B] [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]" src={Github} alt="github" />
                    </Link>
                    </div>
                    <div className="profiles-s bg-transparent">
                    <Link className="pprr bg-transparent" target="_blank" href="https://www.linkedin.com/in/mubashir-hussain-0800322b5/">
                        <Image className="circle cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110" src={Circle} alt="Circle" />
                        <Image id="linkdin" className="emo mt-[-32px] ml-[7px] cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 bg-[#1B1B1B] [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]" src={Linkdin} alt="Linkdin" />
                    </Link>
                    </div>
                    <div className="profiles-s bg-transparent">
                    <Link className="pprr bg-transparent" target="_blank" href="https://vercel.com/mubashir-hussains-projects-9c037818">
                        <Image className="circle cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110" src={Circle} alt="Circle" />
                        <Image id="i-2" className="not mt-[-29px] ml-[10px] bg-[#1B1B1B] bg-transparent" src={Vercel} alt="vercel" width={18}/>
                    </Link>
                    </div>
                    <div className="profiles-s bg-transparent">
                        <Link className="pprr bg-transparent" target="_blank" href="https://discord.com/users/1161947326160572526">
                        <Image className="circle cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110" src={Circle} alt="Circle" />
                        <Image id="i-3" className="emo mt-[-29px] ml-[8px] cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 bg-[#1B1B1B] [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]" src={Discord} alt="discord" />
                        </Link>
                    </div>
                </div>
                <div className="foryou bg-transparent flex gap-[50] justify-center mt-[50px]">
                <div className="iccon bg-transparent flex mr-[10px]">
                <div className="iccon bg-transparent flex mr-[10px]">
                <Link className="mailbox ml-[-22px] mb-[-5px] bg-transparent" target="_blank" href="mailto:mubashirlukman231@gmail.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body."><Image className="mailstick absolute mt-[5px] bg-transparent" src={Mailstick} alt="mailstick"/><Image className="mailbox bg-transparent" src={Mailbox} alt="mailbox"/></Link></div><Link className="fgh bg-transparent no-underline decoration-[none]" target="_blank" href="mailto:mubashirlukman231@gmail.com?subject=Subject%20Here&body=Hello,%20this%20is%20a%20pre-filled%20email%20body."><p className="bg-transparent text-[#959595]">Mubashirlukman231@gmail.com</p></Link>
                </div>
                <div className="iccon bg-transparent flex mr-[10px]">
                <Link className="phonu bg-transparent flex no-underline decoration-[none]" href="tel:+923701135722"><Image  id="iccon" className="phone mr-[10px] bg-transparent" src={Phone} alt="phone"/><p className="bg-transparent text-[#959595]">+92 370 113 5722</p></Link>
                </div>
                </div>
                <hr className="hr1 w-[593] ml-[364px] mt-[30px]" />
                <p className="dsgn bg-transparent text-[#707070] text-[16px] flex justify-center mt-[20px]">Design by @Mubashir.Hussain Front-end web Developer</p>
        </div>
        </div>
    );
};

export default Footer;