import Image from "next/image";
import Project1 from "../../../public/Images/Project1.png";
import Project2 from "../../../public/Images/Project2.png";
import Project3 from "../../../public/Images/Project3.png";
import Mile1 from "../../../public/Images/mile1.webp";
import Mile5 from "../../../public/Images/Mile5.png";
import Clone from "../../../public/Images/clone.png";
import Tailwind from "../../../public/Images/tailwind.png";
import Skills from "../Skills/page";
import Link from "next/link";

function Projects() {
    return (
        <div className="PROJECTS mt-20 md:mt-24 w-full">
            <div className="w-[100%] md:w-[90%] mx-auto">
            <h1 className="text-[#FEFEFE] font-[700] text-[25px] sm:text-[32px] md:text-[40px] text-center mb-[60px]">Projects</h1>
            <p className="jjkkll text-[#707070] text-[12px] md:text-[20px] sm:text-[18px] text-center mt-[-45px] mb-[30px] sm:mb-[60px]">
                Creative Projects with Modern Web Technologies
            </p>
            <div className="mt-[-1px] ">
                <div className="project m-auto w-[90%] grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-5 md:gap-10 justify-center mt-[24px] px-2 sm:px-8">
                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilpum bg-transparent" target="_blank" href={"https://milestone2resumebymubashir-six.vercel.app/"}>
                            <Image className="Project-pic w-full h-[130px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Mile1} alt="Project"/>
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://milestone2resumebymubashir-six.vercel.app/"}>
                                <p className="ah text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Static Resume</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Design</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilo bg-transparent" target="_blank" href={"https://milestone5by-mubashir-hussain.vercel.app/"}>
                            <Image className="Project-pic w-full h-[130px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Mile5} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://milestone5by-mubashir-hussain.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[13px] md:text-[16px] bg-transparent">Resume Builder</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[13px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent ">Web Application</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilii bg-transparent" target="_blank" href={"https://governor-css-ashy.vercel.app/"}>
                            <Image className="Project-pic w-full h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Clone} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-css-ashy.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Website Clone CSS</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Front-end</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilqq bg-transparent flex gap-[98px]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                            <Image className="Project-pic w-full h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Tailwind} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[12px] md:text-[16px] bg-transparent">Website Tailwind CSS</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[13px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Front-end</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilqq bg-transparent flex gap-[98px]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                            <Image className="Project-pic w-[400px] h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project1} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Name Project</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Categories</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilqq bg-transparent flex gap-[98px]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                            <Image className="Project-pic w-[400px] h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project3} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Name Project</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Categories</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilqq bg-transparent flex gap-[98px]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                            <Image className="Project-pic w-[400px] h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project1} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Name Project</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Categories</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilqq bg-transparent flex gap-[98px]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                            <Image className="Project-pic w-[400px] h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project3} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Name Project</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Categories</i>
                                </p>
                            </Link>
                        </div>
                    </div>

                    <div className="idk-1 w-full hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilqq bg-transparent flex gap-[98px]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                            <Image className="Project-pic w-[400px] h-[150px] sm:h-[250px] md:h-[350px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project2} alt="Project" />
                        </Link>
                        <div className="texton bg-[#252525] w-[100%] h-[40px] md:h-[58px] rounded-bl-[30px] rounded-br-[30px]">
                            <Link className="bg-transparent flex flex-col md:flex-row gap-[10px] md:gap-[50px] justify-between items-center leading-3 pt-3 md:pt-5 px-0 sm:px-4" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                                <p className="ahm text-[#C6C6C6] text-[14px] md:text-[16px] bg-transparent">Name Project</p>
                                <p className="lil hidden lg:block xl:block 2xl:block text-[#959595] text-[14px] md:text-[16px] bg-transparent">
                                    <i className="lill bg-transparent">Categories</i>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Skills />
            </div>
        </div>
    );
}

export default Projects;
