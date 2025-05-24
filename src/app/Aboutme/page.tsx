import Image from "next/image";
import Mypic from "../../../public/Images/my-pic.png";
import Rectangle from "../../../public/Images/rectangle.png";
import Download from "../../../public/Images/download.png";
import Link from "next/link";

function Aboutme() {
    return (
        <div className="aboutme mt-20 md:mt-24 px-4 sm:px-6 lg:px-20 mx-auto w-[100%]">
            <div className="w-[100%] mx-auto justify-items-center">
            <div className="aboutme-text">
                <h3 className="text-[#FEFEFE] font-bold text-[25px] sm:text-[32px] md:text-[40px] text-center mb-4">About Me</h3>
                <p className="text-[#707070] text-[12px] md:text-[20px] sm:text-[18px] text-center pb-3 md:pb-6">
                    User Interface and User Experience and Also video editing
                </p>
            </div>

            <div className="aboutme-section flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-[13rem] mt-10">
                <div className="relative w-full md:pl-[2rem] max-w-[380px] mx-auto lg:mx-0 mt-6 sm:mt-10">
                    <Image src={Rectangle} alt="rectangle" className="w-[90%] m-auto sm:w-[300px] h-[310px] md:w-[400px] md:h-[440px] sm:h-[350px]" />
                    <Image src={Mypic} alt="my-pic" className="absolute top-[-16%] sm:top-[-19%] md:left-[60%] md:top-[-21%] left-[54%] transform -translate-x-1/2 bg-transparent h-[22.5rem] sm:h-[26rem] md:w-[400px] md:h-[33.3rem] w-[90%] max-w-[410px]" />
                </div>

                <div className="aboutme-font max-w-[480px] text-[#959595] text-justify leading-relaxed mx-auto lg:ml-10 mt-10 lg:mt-0">
                    <p className="text-[13px] sm:text-[18px]">
                        I am Mubashir Hussain, an 18-year-old from Karachi, Sindh, belonging to the Jatoi caste.
                        A year ago, I completed my matriculation and now study in 12th grade at Sindh Muslim College.
                        My journey in programming began 1.5 years ago when I started with TypeScript, followed by HTML and CSS. I later explored Tailwind CSS and Next.js, which allowed me to build full-stack websites—handling both frontend using Next.js and backend with tools like Sanity CMS. Currently, I&apos;m diving into Python, focusing on AI and Agentic AI concepts. This evolving path has sharpened my skills, and now I&apos;m actively seeking a job that offers a good salary and professional growth. I&apos;m truly thankful for every step that has brought me closer to my goals in the tech world.
                    </p>

                    <Link target="_blank" href={"/CV"}>
                        <button className="bg-[#F46B04] flex items-center justify-center text-white border-none w-[120px] md:w-[224px] h-[40px] md:h-[48px] mt-6 rounded-[8px] text-[14px] md:text-[18px] hover:translate-y-[-2px] transition-all duration-500 ease-in-out">
                            <Image className="mr-2 bg-transparent" src={Download} alt="download" />
                            Resume
                        </button>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Aboutme;
