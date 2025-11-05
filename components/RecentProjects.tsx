"use client";

import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Some of my <span className="text-purple">selected projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-10 max-w-7xl mx-auto">
        {projects.map((item) => {
          const cover = `/projects-screenshots/${item.id}/featured.png`;
          return (
            <div className="h-full mt-[50px] mb-[130px]" key={item.id}>
              {/* remove external title, make whole card lead to project page */}
              <Link href={item.link} className="block">
                <PinContainer title="" href={item.link}>
                  <div className="relative flex items-center justify-center w-full overflow-hidden rounded-2xl mb-6 aspect-video bg-[#13162D]">
                    <img src="/bg.png" alt="bgimg" className="w-full h-full object-cover" />
                    <img src={cover} alt="cover" className="z-10 absolute bottom-0 w-full h-full object-cover" />
                  </div>

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-2 mb-4"
                    style={{ color: "#BEC1DD" }}
                  >
                    {item.des}
                  </p>

                  {/* removed tech icons */}
                  <div className="flex items-center justify-end mt-7 mb-3">
                    <div className="flex justify-center items-center group">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple group-hover:text-purple/80 transition-colors">
                      See Full Case & Demo
                      </p>
                      <FaLocationArrow className="ms-3 group-hover:translate-x-1 transition-transform" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentProjects;
