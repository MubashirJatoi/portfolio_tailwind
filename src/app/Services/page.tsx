import Image from "next/image";
import User from "../../../public/Images/user.png"

function Services() {
    return(
        <div className="services">
            <div className="services-text mt-[96px]">
                <h3 className="text-[#FEFEFE] text-[40px] font-[700] text-center mb-[15px]">Services</h3>
                <p className="text-[#707070] text-[20px] text-center">I create front-end websites, edit videos, and work proficiently with TypeScript, CSS, and HTML</p>
            </div>
            <div className="cards-parent mt-[79px] mb-[80px]">
                <div className="cards flex gap-[60] mt-[50] justify-center">
                    <div className="card bg-[#1B1B1B] w-[300] h-[200] rounded-[24] cursor-pointer hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 hover:cursor-pointer">
                        <Image className="user bg-transparent w-[50] h-[50] ml-[130px] mt-[20px] transition-transform duration-300 ease-in-out scale-110" src={User} alt="User"/>
                        <p className="design text-[#FD6F00] text-[20px] text-center mt-[10px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Web Development</p>
                        <p className="pop w-[230] h-[96] text-center text-[#575757] ml-[40px] mt-[19px] leading-[21px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Build responsive, user-friendly websites</p>
                    </div>
                    <div className="card bg-[#1B1B1B] w-[300] h-[200] rounded-[24] cursor-pointer hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 hover:cursor-pointer">
                        <Image className="user bg-transparent w-[50] h-[50] ml-[130px] mt-[20px] transition-transform duration-300 ease-in-out scale-110" src={User} alt="User"/>
                        <p className="design text-[#FD6F00] text-[20px] text-center mt-[10px] bg-transparent transition-transform duration-300 ease-in-out scale-110">UI/UX Design</p>
                        <p className="pop w-[230] h-[96] text-center text-[#575757] ml-[40px] mt-[19px] leading-[21px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Create intuitive and appealing designs</p>
                    </div>
                    <div className="card bg-[#1B1B1B] w-[300] h-[200] rounded-[24] cursor-pointer hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 hover:cursor-pointer">
                        <Image className="user bg-transparent w-[50] h-[50] ml-[130px] mt-[20px] transition-transform duration-300 ease-in-out scale-110" src={User} alt="User"/>
                        <p className="design text-[#FD6F00] text-[20px] text-center mt-[10px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Responsive Design</p>
                        <p className="pop w-[230] h-[96] text-center text-[#575757] ml-[40px] mt-[19px] leading-[21px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Ensure compatibility across devices</p>
                    </div>
                </div>
                <div className="cards flex gap-[60] mt-[40] justify-center">
                    <div className="card bg-[#1B1B1B] w-[300] h-[200] rounded-[24] cursor-pointer hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 hover:cursor-pointer">
                        <Image className="user bg-transparent w-[50] h-[50] ml-[130px] mt-[20px] transition-transform duration-300 ease-in-out scale-110" src={User} alt="User"/>
                        <p className="design text-[#FD6F00] text-[20px] text-center mt-[10px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Code Debugging</p>
                        <p className="pop w-[230] h-[96] text-center text-[#575757] ml-[40px] mt-[19px] leading-[21px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Fix front-end issues and bugs</p>
                    </div>
                    <div className="card bg-[#1B1B1B] w-[300] h-[200] rounded-[24] cursor-pointer hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 hover:cursor-pointer">
                        <Image className="user bg-transparent w-[50] h-[50] ml-[130px] mt-[20px] transition-transform duration-300 ease-in-out scale-110" src={User} alt="User"/>
                        <p className="design text-[#FD6F00] text-[20px] text-center mt-[10px] bg-transparent transition-transform duration-300 ease-in-out scale-110">SEO Optimization</p>
                        <p className="pop w-[230] h-[96] text-center text-[#575757] ml-[40px] mt-[19px] leading-[21px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Improve website visibility on search engines</p>
                    </div>
                    <div className="card bg-[#1B1B1B] w-[300] h-[200] rounded-[24] cursor-pointer hover:transition-transform hover:duration-300 hover:ease-in-out hover:scale-110 hover:cursor-pointer">
                        <Image className="user bg-transparent w-[50] h-[50] ml-[130px] mt-[20px] transition-transform duration-300 ease-in-out scale-110" src={User} alt="User"/>
                        <p className="design text-[#FD6F00] text-[20px] text-center mt-[10px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Content Creation</p>
                        <p className="pop w-[230] h-[96] text-center text-[#575757] ml-[40px] mt-[19px] leading-[21px] bg-transparent transition-transform duration-300 ease-in-out scale-110">Deliver engaging text, video, and graphics</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;