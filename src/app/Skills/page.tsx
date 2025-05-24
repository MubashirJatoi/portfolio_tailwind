"use client";
import { useEffect, useRef } from "react";
import Image, {StaticImageData} from "next/image";
import HTML from "../../../public/Images/HTML.png";
import CSS from "../../../public/Images/CSS.png";
import Typescript from "../../../public/Images/TYPESCRIPT.png";
import Next from "../../../public/Images/NEXTJS.png";
import Python from "../../../public/Images/PYTHON.png";

interface DT {
    name: string;
    progress: number;
    icon: StaticImageData;
}

function Skills() {
    const skills: DT[] = [
        { name: "HTML", progress: 100, icon: HTML },
        { name: "CSS", progress: 80, icon: CSS },
        { name: "Typescript", progress: 60, icon: Typescript },
        { name: "Next", progress: 50, icon: Next },
        { name: "Python", progress: 10, icon: Python },
    ];
    const circularProgressRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = circularProgressRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1) {
                            startAnimation(index);
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when at least 50% of the element is visible
        );

        circularProgressRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const startAnimation = (index: number) => {
        const speed = 10;
        let progressStartValue = 0;
        const progressEndValue = skills[index].progress;
        const circularProgress = circularProgressRefs.current[index];

        const interval = setInterval(() => {
            progressStartValue++;
            if (circularProgress) {
                circularProgress.style.background = `conic-gradient(#FD6F00 ${
                    progressStartValue * 3.6
                }deg, #3A3A3A 0deg)`;
                const span = circularProgress.querySelector(".progress-value");
                if (span) span.textContent = `${progressStartValue}%`;
            }
            if (progressStartValue === progressEndValue) {
                clearInterval(interval);
            }
        }, speed);
    };

    return (
        <div className="w-full">
        <div className="container w-[85%] sm:w-[80%] md:w-[50%] mx-auto grid grid-cols-2 sm:grid-cols-5 pt-[80px] sm:pt-[120px] pb-[40px] justify-items-center gap-[50px] sm:gap-[30px]">
            {skills.map((skill, index) => (
                <div className="circular-progress relative h-[100px] w-[100px] rounded-[50%] bg-[conic-gradient(#FD6F00_3.6deg,_#3A3A3A_0deg)] flex items-center justify-center text-center" ref={(el) => {circularProgressRefs.current[index] = el}} key={skill.name}>
                    <Image src={skill.icon} alt="icon" width={30} height={30} className="icoon absolute top-[35px] bg-transparent [filter:brightness(0)_saturate(100%)_invert(59%)_sepia(6%)_saturate(4%)_hue-rotate(0deg)_brightness(90%)_contrast(100%)]" />
                    <div className="flex flex-row sm:flex-col gap-2 sm:gap-4 absolute bg-transparent b-20">
                        <h2 className="progress-value mt-[150px] sm:mt-[200px] text-[20px] font-[600] text-[#FD6F00] bg-transparent">0%</h2>
                        <h2 className="text mt-[152px] sm:mt-[-20px] text-[16px] font-[500] text-[#606060] bg-transparent">{skill.name}</h2>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Skills;
