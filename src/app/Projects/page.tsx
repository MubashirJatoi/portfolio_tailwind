import Image from "next/image";
import Project1 from "../../../public/Images/Project1.png"
import Project2 from "../../../public/Images/Project2.png"
import Project3 from "../../../public/Images/Project3.png"
import Mile1 from "../../../public/Images/mile1.webp"
import Mile5 from "../../../public/Images/Mile5.png"
import Clone from "../../../public/Images/clone.png"
import Tailwind from "../../../public/Images/tailwind.png"
import Skills from "../Skills/page";
import Link from "next/link";

function Projects () {
    return(
        <div className="PROJECTS mt-[96px]">
            <h1 className="text-[#FEFEFE] font-[700] text-[40px] text-center mb-[60px]">Projects</h1>
            <p className="jjkkll text-[#707070] text-[20px] text-center mt-[-45px] mb-[60px]">Creative Projects with Modern Web Technologies</p>
            <div className="mt-[-1px]">
                <div className="project flex justify-center gap-[25px] mt-[24]">
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                        <Link className="lilpum bg-transparent flex gap-[210px]" target="_blank" href={"https://milestone2resumebymubashir-six.vercel.app/"}>
                            <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Mile1} alt="Project"/>
                        </Link>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                        <Link className="lilpum bg-transparent flex gap-[210px]" target="_blank" href={"https://milestone2resumebymubashir-six.vercel.app/"}>
                            <p className="ah text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Static Resume</p>
                            <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Design</i></p>
                        </Link>
                    </div>
                    </div>
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Link className="lilo bg-transparent flex gap-[130px]" target="_blank" href={"https://milestone5by-mubashir-hussain.vercel.app/"}>
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Mile5} alt="Project"/>
                    </Link>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                    <Link className="lilo bg-transparent flex gap-[130px]" target="_blank" href={"https://milestone5by-mubashir-hussain.vercel.app/"}>
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Resume Builder</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Web Application</i></p>
                    </Link>
                    </div>
                    </div>
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Link className="lilii bg-transparent flex gap-[158px]" target="_blank" href={"https://governor-css-ashy.vercel.app/"}>
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Clone} alt="Project"/>
                    </Link>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                    <Link className="lilii bg-transparent flex gap-[158px]" target="_blank" href={"https://governor-css-ashy.vercel.app/"}>
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Website Clone CSS</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Front-end</i></p>
                    </Link>
                    </div>
                    </div>
                </div>
                <div className="project flex justify-center gap-[25px] mt-[24]">
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Link className="lilqq bg-transparent flex gap-[98]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Tailwind} alt="Project"/>
                    </Link>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                    <Link className="lilqq bg-transparent flex gap-[98]" target="_blank" href={"https://governor-tailwind.vercel.app/"}>
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Clone Website Tailwind CSS</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Front-end</i></p>
                        </Link>
                    </div>
                    </div>
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project1} alt="Project"/>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Name Project</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Categories</i></p>
                    </div>
                    </div>
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project3} alt="Project"/>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Name Project</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Categories</i></p>
                    </div>
                    </div>
                </div>
                <div className="project flex justify-center gap-[25px] mt-[24]">
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project1} alt="Project"/>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Name Project</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Categories</i></p>
                    </div>
                    </div>
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project3} alt="Project"/>
                    <div className="texton flex justify-between bg-[#252525] item-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Name Project</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Categories</i></p>
                    </div>
                    </div>
                    <div className="idk-1 hover:bg-transparent hover:transform hover:scale-[1.01]">
                    <Image className="Project-pic w-[400px] h-[400px] bg-[black] rounded-tr-[30px] rounded-tl-[30px]" src={Project2} alt="Project"/>
                    <div className="texton flex justify-between bg-[#252525] items-center h-[58] mt-[-4px] rounded-bl-[30px] rounded-br-[30px]">
                        <p className="ahm text-[#C6C6C6] text-[16px] bg-transparent ml-[20px]">Name Project</p>
                        <p className="lil text-[#959595] text-[16px] bg-transparent mr-[20px]"><i className="lill bg-transparent">Categories</i></p>
                    </div>
                    </div>
                </div>
            </div>
            <Skills />
        </div>
    );
};

export default Projects;