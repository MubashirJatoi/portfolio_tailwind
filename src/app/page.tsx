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
    return (
        <div className="Home px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 pt-[90px] md:pt-[150px] w-full mx-auto">
            <div className="main flex flex-col-reverse gap-20 md:gap-0 lg:flex-row items-center justify-between w-[90%] md:w-[100%] mx-auto">

                <div className="left-side text-center lg:text-left max-w-[600px]">
                    <p className="hidden md:block text-[#707070] text-[20px] sm:text-[22px] md:text-[24px]">Hi I am</p>
                    <p className="hidden md:block text-[#959595] text-[22px] sm:text-[26px] md:text-[28px] mt-1">Mubashir Hussain</p>
                    <h1 className="text-[30px] sm:text-[42px] md:text-[50px] font-bold bg-[linear-gradient(150deg,#984300_0%,#FD6F00_46%,#CA5900_100%)] bg-clip-text text-transparent mt-[-90px] md:mt-4">
                        Front-end web Developer
                    </h1>

                    <div className="profiles flex justify-center lg:justify-start gap-6 mt-6 flex-wrap">
                        {[{
                            href: "https://github.com/MubashirJatoi?tab=repositories", icon: Github
                        }, {
                            href: "https://www.linkedin.com/in/mubashir-hussain-0800322b5/", icon: Linkdin
                        }, {
                            href: "https://vercel.com/mubashir-hussains-projects-9c037818", icon: Vercel
                        }, {
                            href: "https://discord.com/users/1161947326160572526", icon: Discord
                        }].map((item, index) => (
                            <div key={index} className="relative">
                                <Link href={item.href} target="_blank">
                                    <Image src={Circle} alt="Circle" className="hover:scale-110 bg-transparent transition-transform duration-300" />
                                    <Image src={item.icon} alt="Icon" className="w-6 h-6 absolute top-1/2 bg-transparent left-1/2 translate-x-[-50%] translate-y-[-50%]" />
                                </Link>
                            </div>
                        ))}
                    </div>

 
                    <div className="btns flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6">
                        <Link href="tel:+923701135722">
                            <button className="h-10 md:h-12 w-[8rem] md:w-40 text-lg bg-[#FD6F00] text-white rounded hover:bg-transparent hover:text-[#959595] hover:border-2 hover:border-[#959595]">
                                Hire Me
                            </button>
                        </Link>
                        <Link href="/CV" target="_blank">
                            <button className="h-10 md:h-12 w-[9rem] md:w-52 text-lg text-[#959595] border-2 border-[#959595] rounded hover:bg-[#E46400] hover:border-[#FD6F00] hover:text-white">
                                Resume
                            </button>
                        </Link>
                    </div>

                    <div className="my-thing flex sm:flex-row flex-col bg-[#1B1B1B] w-[100%] gap-[10px] sm:gap-[50px] mt-[30px] items-center p-3">
                    <div className="all-same md:ml-[24px] bg-[#1B1B1B] leading-[35px]">
                        <p className="pp text-[#FD6F00] text-[24px] bg-[#1B1B1B]">1+</p>
                        <p className="pt text-[20px] text-[#DFDFDF] bg-[#1B1B1B]">Experience</p>
                    </div>
                    <div className="hr-fake sm:border-l-2 sm:border-solid sm:border-l-[#DFDFDF] sm:h-[80px] sm:bg-[#1B1B1B] sm:ml-[-10px] sm:mr-[-30px]"></div>
                    <div className="all-same md:ml-[24px] bg-[#1B1B1B] leading-[35px]">
                        <p className="pp text-[#FD6F00] text-[24px] bg-[#1B1B1B]">10+</p>
                        <p className="pt text-[20px] text-[#DFDFDF] bg-[#1B1B1B]">Project done</p>
                    </div>
                    <div className="hr-fake sm:border-l-2 sm:border-solid sm:border-l-[#DFDFDF] sm:h-[80px] sm:bg-[#1B1B1B] sm:ml-[-10px] sm:mr-[-30px]"></div>
                    <div className="all-same md:ml-[24px] bg-[#1B1B1B] leading-[35px]">
                        <p className="pp text-[#FD6F00] text-[24px] bg-[#1B1B1B]">1+</p>
                        <p className="pt text-[20px] text-[#DFDFDF] bg-[#1B1B1B]">Happy Clients</p>
                    </div>
                </div>
                </div>
            
                <div className="right-side relative mt-1 md:mt-12 lg:mt-0 flex flex-col items-center md:block">
                    <div className="block md:hidden text-center mb-4">
                        <p className="text-[#707070] text-[20px] sm:text-[22px]">Hi I am</p>
                        <p className="text-[#959595] text-[22px] sm:text-[26px] mt-1">Mubashir Hussain</p>
                    </div>

                    <div className="relative flex justify-center mt-6 md:mt-12 lg:mt-0 items-center w-[200px] h-[250px] md:w-[430px] md:h-[533px]">
                        <Image className="big-circle w-full h-full object-contain" src={BigCircle} alt="Big-Circle" />
                        <Image className="my-pic absolute top-[41%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[250px] w-[185px] md:h-[520px] md:w-[380px] bg-transparent rounded-[170px]" src={Mypic} alt="my-pic" />
                    </div>
                </div>
            </div>
        </div>
    );
}