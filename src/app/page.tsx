import Image from "next/image";
import Discord from "../../public/Images/discord.png"
import Linkdin from "../../public/Images/linkdin.png"
import Github from "../../public/Images/github.png"
import Vercel from "../../public/Images/vercel.png"
import Circle from "../../public/Images/bg-circle.png"
import BigCircle from "../../public/Images/Big-circle.png"
import Mypic from "../../public/Images/my-pic.png"
import Link from "next/link";


export default function Home() {
    return(
        <div className="Home">
        <div className="main flex ml-[60px] mt-[150px]">
            <div className="left-side">
                <p className="p1 text-[#707070] mt-[-2px] text-[24px]">Hi I am</p>
                <p className="p2 text-[#959595] text-[28px] mt-[-1px]">Mubashir Hussain</p>
                <h1 className="h1-1 text-[50px] font-[700] bg-[linear-gradient(150deg,_#984300_0%,_#FD6F00_46%,_#CA5900_100%)] bg-clip-text text-transparent mt-[19px]">Front-end web Developer</h1>
                <div className="profiles flex gap-[20px] mt-[21px] bg-transparent">
                    <div className="profiles-s bg-transparent">
                    <Link className="pprr bg-transparent" target="_blank" href="https://github.com/MubashirJatoi?tab=repositories">
                        <Image className="circle cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110" src={Circle} alt="Circle" />
                        <Image id="i-1" className="emo mt-[-31px] ml-[10px] cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 bg-[#1B1B1B] [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]" src={Github} alt="github" />
                    </Link>
                    </div>
                    <div className="profiles-s bg-transparent">
                    <Link className="pprr bg-transparent" target="_blank" href="https://www.linkedin.com/in/mubashir-hussain-0800322b5/">
                        <Image className="circle cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110" src={Circle} alt="Circle" />
                        <Image id="linkdin" className="emo mt-[-32px] cursor-pointer bg-transparent hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 ml-[7px] mb-[2px] bg-[#1B1B1B] [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]" src={Linkdin} alt="Linkdin" />
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
                <div className="btns flex gap-[24px] mt-[29px]">
                <Link className="phonu bg-transparent flex no-underline decoration-[none]" href="tel:+923701135722"><button id="btn1" className="btn h-[48px] w-[156px] text-[20px] bg-[#FD6F00] text-[#FFFFFF] rounded-[8px] border-[#FD6F00] cursor-pointer hover:bg-transparent hover:text-[#959595] hover:border-2 hover:border-[#959595]">Hire Me</button></Link>
                    <Link target="_blank" href={"/CV"}><button id="btn2" className="btn h-[48px] w-[209px] rounded-[8px] text-[#959595] border-2 border-[#959595] bg-transparent text-[20px] cursor-pointer hover:bg-[#E46400] hover:border-[#FD6F00] hover:text-[#FFFFFF]">Resume</button></Link>
                </div>
                <div className="my-thing flex bg-[#1B1B1B] w-[550px] h-[105px] gap-[50px] mt-[30px] items-center">
                    <div className="all-same ml-[24px] bg-[#1B1B1B] leading-[35px]">
                        <p className="pp text-[#FD6F00] text-[24px] bg-[#1B1B1B]">1+</p>
                        <p className="pt text-[20px] text-[#DFDFDF] bg-[#1B1B1B]">Experience</p>
                    </div>
                    <div className="hr-fake border-l-2 border-solid border-l-[#DFDFDF] h-[80px] bg-[#1B1B1B] ml-[-10px] mr-[-30px]"></div>
                    <div className="all-same ml-[24px] bg-[#1B1B1B] leading-[35px]">
                        <p className="pp text-[#FD6F00] text-[24px] bg-[#1B1B1B]">10+</p>
                        <p className="pt text-[20px] text-[#DFDFDF] bg-[#1B1B1B]">Project done</p>
                    </div>
                    <div className="hr-fake border-l-2 border-solid border-l-[#DFDFDF] h-[80px] bg-[#1B1B1B] ml-[-10px] mr-[-30px]"></div>
                    <div className="all-same ml-[24px] bg-[#1B1B1B] leading-[35px]">
                        <p className="pp text-[#FD6F00] text-[24px] bg-[#1B1B1B]">1+</p>
                        <p className="pt text-[20px] text-[#DFDFDF] bg-[#1B1B1B]">Happy Clients</p>
                    </div>
                </div>
            </div>
            <div className="right-side flex ml-[230px] mt-[40px]">
            <Image className="big-circle" src={BigCircle} alt="Big-Circle" width={420}/>
            <Image className="my-pic h-[533px] ml-[-390px] mt-[-115px] bg-transparent rounded-[170px]" src={Mypic} alt="my-pic" width={400}/>
            </div>
        </div>
        </div>
    );
};
