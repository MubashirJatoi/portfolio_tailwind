import Image from "next/image";
import Mypic from "../../../public/Images/my-pic.png"
import Rectangle from "../../../public/Images/rectangle.png"
import Download from "../../../public/Images/download.png"
import Link from "next/link";

function Aboutme () {
    return(
        <div className="aboutme mt-[96]">
            <div className="aboutme-text">
                <h3 className="text-[#FEFEFE] font-[700] text-[40px] text-center mb-[20px]">About Me</h3>
                <p className="text-[#707070] mt-[-5px] text-[20px] text-center">User Interface and User Experience and Also video editing</p>
            </div>
            <div className="aboutme-section flex mt-[40px] ml-[130px]">
                <div className="mt-[80px]">
                <Image className="rectangle" src={Rectangle} alt="rectangle" width={350}/>
                <Image className="aboutme-pic mt-[-533px] ml-[-10px] bg-transparent" src={Mypic} alt="my-pic" width={410}/>
                </div>
                <div className="aboutme-font w-[450] h-[494] leading-[190%] text-[#959595] text-justify ml-[240px] mt-[59px]">
                    <p>I am Mubashir Hussain, an 18-year-old from Karachi, Sindh, belonging to the Jatoi caste. A year ago, I completed my matriculation and now study in 12th grade at Sindh Muslim College. My journey in IT began when I learned about the Governor of Sindh’s initiative offering an IT course at the Governor’s House. After passing a test in physics, math, and IQ, I joined the program.In the first quarter, I learned TypeScript and passed the exams, advancing to the second quarter. Now, I’ve gained skills in HTML, CSS, TypeScript, some JavaScript, and Python, and I’m currently exploring Next.js. This program has been transformative, and I’m truly grateful to the Governor for creating such an opportunity to help young learners like me grow in the world of technology.</p>
                    <Link target="_blank" href={"/CV"}><button className="bg-[#F46B04] flex items-center justify-center text-[#FFFFFF] border-[#F46B04] w-[224] h-[48] mt-[25] rounded-[8] text-[20px] cursor-pointer hover:mt-[28] hover:transition-colors hover:duration-1000 hover:ease-in-out"><Image id="nmm1" className="download mr-[5px] bg-transparent mb-[-3px] ml-[-4px]" src={Download} alt="download"/>Resume</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Aboutme;