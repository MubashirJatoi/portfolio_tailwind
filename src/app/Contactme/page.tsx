import Link from "next/link";

function Contactme () {
    return (
        <div className="Contactme mt-[96px] px-4 sm:px-6 lg:px-8">
            <div className="casas">
                <h1 className="text-[#FEFEFE] text-[25px] sm:text-[32px] md:text-[40px] font-[700] text-center mb-[10px]">Contact me</h1>
                <p className="text-[#707070] mt-[-5px] text-[12px] sm:text-[16px] md:text-[20px] text-center">Cultivating Connections: Reach Out and Connect with Me</p>
            </div>
            <div className="form">
                <form className="w-full max-w-[1012px] text-[#959595] h-auto mt-[30px] sm:mt-[50px] mx-auto" action="/submit" method="POST">
                    <div className="input11 flex flex-col md:flex-row gap-[30px] mb-[30px]">
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="text" placeholder="Name" />
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="email" placeholder="Email" />
                    </div>
                    <div className="input11 flex flex-col md:flex-row gap-[30px] mb-[30px]">
                        <div className="input11 flex flex-col gap-[30px] md:mb-[30px]">
                            <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="text" placeholder="age" />
                            <input className="numm bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="tel" placeholder="Phone Number" />
                        </div>
                        <textarea className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[140px] rounded-[8px] p-[20px]" rows={10} cols={20} placeholder="Project Details..."></textarea>
                    </div>
                    <div className="unlimited flex justify-end">
                        <Link href={"mailto:mubashirlukman231@gmail.com"}>
                            <button className="border-2 border-solid border-[#959595] w-[127px] h-[48px] text-[#959595] text-[20px] rounded-[8px] cursor-pointer hover:bg-[#E46400] hover:border-[#E46400] hover:text-[#FFFFFF] hover:cursor-pointer">Send</button>
                        </Link>
                    </div>
                </form>
                {/* <form className="w-full max-w-[1012px] text-[#959595] h-auto mt-[30px] sm:mt-[50px] mx-auto" action="/submit" method="POST">
                    <div className="input11 flex flex-col md:flex-row gap-[30px] mb-[30px]">
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="text" placeholder="Name" />
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="email" placeholder="Email" />
                    </div>
                    <div className="input11 flex flex-col md:flex-row gap-[30px] mb-[30px]">
                        <input className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="text" placeholder="age" />
                        <input className="numm bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[54px] rounded-[8px] p-[20px]" type="tel" placeholder="Phone Number" />
                    </div>
                    <div className="input11 flex flex-col md:flex-row gap-[30px] justify-end mb-[30px]">
                        <textarea className="bg-[#1B1B1B] border-[#1B1B1B] text-[#959595] w-full md:w-[491px] h-[140px] rounded-[8px] p-[20px]" rows={10} cols={20} placeholder="Project Details..."></textarea>
                    </div>
                    <div className="unlimited flex justify-end">
                        <Link href={"mailto:mubashirlukman231@gmail.com"}>
                            <button className="border-2 border-solid border-[#959595] w-[127px] h-[48px] text-[#959595] text-[20px] rounded-[8px] cursor-pointer hover:bg-[#E46400] hover:border-[#E46400] hover:text-[#FFFFFF] hover:cursor-pointer">Send</button>
                        </Link>
                    </div>
                </form> */}
            </div>
        </div>
    );
}

export default Contactme;

