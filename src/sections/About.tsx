"use client";

import Coding from "@/assets/images/coding-pov.png";
import Card from "@/components/Card";
import { Frameworks } from "@/components/Framework";
import Image from "next/image";
import { useRef } from "react";

export const AboutSection: React.FC = () => {
  const grid2Container = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="sm:mx-4 my-20">
      <h2 className="font-bold text-white flex justify-center mb-20 font-serif text-3xl md:text-5xl">
        About Me
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12 lg:w-2/3 lg:mx-auto">
        {/* Grid 1 */}
        <div className="flex items-end grid-1 grid-special-color relative">
          <Image
            src={Coding}
            alt="Coding POV"
            className="absolute scale-[1.75] -right-[5rem] -top-[-3rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] lg:-top-[-15rem] lg:-right-[10rem]"
          />
          <div className="z-10">
            <p className="font-semibold sm:text-xs font-sans lg:text-xl lg:font-bold lg:font-serif">
              Hi, I'm Abhishek Maurya
            </p>
            <p className="font-medium sm:text-xs lg:text-md lg:font-semibold">
              I create responsive UIs with React, manage APIs and server logic
              with Node.js & Express, and design scalable databases with
              MongoDB.
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-special-color grid-2 relative">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <div>
              <Card
                style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                text="SOLID"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                text="Design Patterns"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                text="Next.js"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "20deg", top: "10%", left: "38%" }}
                text="Redux"
                containerRef={grid2Container}
              />
              <Card
                style={{ rotate: "50deg", top: "20%", left: "38%" }}
                text="Node.js"
                containerRef={grid2Container}
              />
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-special-color grid-3 relative">
          <div className="z-10 w-[50%] mt-24 lg:mt-36">
            <p className="font-semibold font-sans text-xs lg:font-bold lg:text-2xl lg:font-serif">Tech Stack</p>
            <p className="font-normal font-sans text-xs lg:font-semibold lg:text-md">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
          <div className="absolute inset-0 w-full h-full left-1/2 md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};
