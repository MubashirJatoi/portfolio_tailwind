import Cv1 from "../../../public/Images/CV2.png"
import Image from "next/image";

function CV () {
    return(
        <div className="w-full">
            <Image className="cv mb-[-80px] mt-[5rem] sm:mt-[5.7rem] sm:mb-[-150px] w-full" src={Cv1} alt="cv" width={1349}/>
        </div>
    );
};

export default CV;