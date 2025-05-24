import Image from "next/image";
import User from "../../../public/Images/user.png";

function Services() {
    return (
        <div className="services px-4 sm:px-6 lg:px-20">
            <div className="services-text mt-24">
                <h3 className="text-[#FEFEFE] text-[25px] sm:text-[32px] md:text-[40px] font-bold text-center mb-4">Services</h3>
                <p className="text-[#707070] text-[12px] sm:text-[20px] text-center">
                    I create front-end websites, edit videos, and work proficiently with TypeScript, CSS, and HTML
                </p>
            </div>

            <div className="cards-parent mt-10 sm:mt-20 mb-14 md:mb-20">
                <div className="cards flex flex-wrap justify-center gap-6 lg:gap-[60px]">
                    {[
                        { title: "Web Development", desc: "Build responsive, user-friendly websites" },
                        { title: "UI/UX Design", desc: "Create intuitive and appealing designs" },
                        { title: "Responsive Design", desc: "Ensure compatibility across devices" },
                        { title: "Code Debugging", desc: "Fix front-end issues and bugs" },
                        { title: "SEO Optimization", desc: "Improve website visibility on search engines" },
                        { title: "Content Creation", desc: "Deliver engaging text, video, and graphics" },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="card bg-[#1B1B1B] w-[90%] sm:w-[300px] h-[200px] rounded-[24px] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
                        >
                            <Image className="bg-transparent w-[50px] h-[50px] mx-auto mt-5" src={User} alt="User" />
                            <p className="text-[#FD6F00] text-[20px] text-center mt-2 bg-transparent">{service.title}</p>
                            <p className="w-[230px] h-[96px] text-center bg-transparent text-[#575757] mx-auto mt-4 leading-[21px]">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;